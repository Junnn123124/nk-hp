'use client';

import { useEffect, useRef, useState } from 'react';
import { geoOrthographic, geoPath, geoGraticule10, geoDistance } from 'd3-geo';
import { feature } from 'topojson-client';
import landTopology from 'world-atlas/land-110m.json';

export interface GlobeSite {
  id: string;
  name: string;
   globeLabel: string;
  partnerRole?: string;
  isPartner: boolean;
  isExport: boolean;
  lon: number;
  lat: number;
  side: 'left' | 'right'; // 라벨 위치 (겹침 방지)
  dy: number;
}

const PARTNER_BLUE = '#2563EB';
const EXPORT_RED = '#DC2626';

// 지사/협력업체(파란색) 및 수출·납품 이력 국가(빨간색) 거점 정보
export const GLOBE_SITES: GlobeSite[] = [
  {
    id: 'kr',
    name: '한국',
    globeLabel: '한국 · NKUCT, NKT',
    partnerRole: 'NKUCT, NKT',
    isPartner: true,
    isExport: true,
    lon: 126.98,
    lat: 37.57,
    side: 'left',
    dy: -30,
  },
  {
    id: 'cn',
    name: '중국',
    globeLabel: '중국 · NK-Hatsuta 상하이',
    partnerRole: 'NK-Hatsuta 상하이',
    isPartner: true,
    isExport: true,
    lon: 121.47,
    lat: 31.23,
    side: 'left',
    dy: 8,
  },
  {
    id: 'jp',
    name: '일본',
    globeLabel: '일본 · HATSUTA',
    partnerRole: 'HATSUTA',
    isPartner: true,
    isExport: true,
    lon: 139.69,
    lat: 35.69,
    side: 'right',
    dy: -24,
  },
  {
    id: 'us',
    name: '미국',
    globeLabel: '미국 · NKUSA',
    partnerRole: 'NKUSA',
    isPartner: true,
    isExport: true,
    lon: -97.74,
    lat: 30.27,
    side: 'right',
    dy: -24,
  },
  {
    id: 'sg',
    name: '싱가포르',
    globeLabel: '싱가포르 · 협력업체',
    partnerRole: '협력업체',
    isPartner: true,
    isExport: true,
    lon: 103.82,
    lat: 1.35,
    side: 'left',
    dy: -12,
  },
  {
    id: 'in',
    name: '인도',
    globeLabel: '인도 · 준비 중',
    partnerRole: '준비 중',
    isPartner: true,
    isExport: false,
    lon: 77.21,
    lat: 28.61,
    side: 'left',
    dy: -20,
  },
  {
    id: 'eu',
    name: '유럽 등',
    globeLabel: '유럽 · 협력업체',
    partnerRole: '협력업체',
    isPartner: true,
    isExport: true,
    lon: 10.45,
    lat: 51.16,
    side: 'right',
    dy: -22,
  },
];

const PARTNER_LIST = [
  { id: 'kr', country: '한국', label: 'NKUCT, NKT' },
  { id: 'cn', country: '중국', label: 'NK-Hatsuta 상하이' },
  { id: 'jp', country: '일본', label: 'HATSUTA' },
  { id: 'us', country: '미국', label: 'NKUSA' },
  { id: 'sg', country: '싱가포르', label: '협력업체' },
  { id: 'eu', country: '유럽', label: '협력업체' },
  { id: 'in', country: '인도', label: '준비 중' },
];

const EXPORT_LIST = [
  { id: 'us', label: '미국' },
  { id: 'jp', label: '일본' },
  { id: 'kr', label: '한국' },
  { id: 'cn', label: '중국' },
  { id: 'sg', label: '싱가포르' },
  { id: 'eu', label: '유럽 등' },
];

const HOME = GLOBE_SITES[0];

export default function GlobeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = useState<{ id: string; mode: 'partner' | 'export' } | null>(null);
  const activeRef = useRef<{ id: string; mode: 'partner' | 'export' } | null>(null);
  activeRef.current = activeState;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = wrapRef.current!;
    const ctx = canvas.getContext('2d')!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const land = feature(landTopology as any, (landTopology as any).objects.land) as any;
    const graticule = geoGraticule10();

    let size = 400;
    let dpr = 1;
    let rotation: [number, number] = [-110, -25];
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let lastInteract = 0;
    let raf = 0;
    let t0 = performance.now();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      size = Math.max(280, Math.min(wrap.clientWidth, 560));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
    };
    resize();
    window.addEventListener('resize', resize);

    const projection = geoOrthographic().clipAngle(90);

    const draw = (now: number) => {
      const dt = now - t0;
      t0 = now;
      if (!dragging && !reduceMotion && now - lastInteract > 1500 && !activeRef.current) {
        rotation[0] += dt * 0.012;
      }
      // 캔버스 사각형 경계에 그림자(glow)와 국가 라벨이 잘리지 않도록 충분한 여백(pad) 확보
      const pad = Math.max(36, Math.round(size * 0.085));
      const r = size / 2 - pad;
      const glowRadius = r + pad - 2;
      projection.translate([size / 2, size / 2]).scale(r).rotate([rotation[0], rotation[1]]);
      const path = geoPath(projection, ctx);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      // 대기 glow (캔버스 반경 안쪽에서 자연스럽게 0으로 감쇠하여 사각형 잘림 현상 완전 제거)
      const glow = ctx.createRadialGradient(size / 2, size / 2, r * 0.96, size / 2, size / 2, glowRadius);
      glow.addColorStop(0, 'rgba(74,144,217,0.34)');
      glow.addColorStop(0.55, 'rgba(74,144,217,0.14)');
      glow.addColorStop(1, 'rgba(74,144,217,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // 바다
      const ocean = ctx.createRadialGradient(size * 0.38, size * 0.32, r * 0.1, size / 2, size / 2, r);
      ocean.addColorStop(0, '#2A5AA8');
      ocean.addColorStop(1, '#001B5E');
      ctx.fillStyle = ocean;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fill();

      // 경위선
      ctx.strokeStyle = 'rgba(147,197,253,0.18)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      path(graticule);
      ctx.stroke();

      // 육지
      ctx.fillStyle = '#DCE8FA';
      ctx.strokeStyle = 'rgba(0,27,94,0.55)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      path(land);
      ctx.fill();
      ctx.stroke();

      // 두 지점 사이 곡선 좌표 생성 (동일 구간에 파란선·빨간선 2줄을 나란히 그리기 위한 헬퍼)
      const buildCurvedLine = (
        from: [number, number],
        to: [number, number],
        offsetSign: number
      ): [number, number][] => {
        const dLon = ((to[0] - from[0] + 540) % 360) - 180;
        const dLat = to[1] - from[1];
        const dist = Math.hypot(dLon, dLat) || 1;
        const nx = -dLat / dist;
        const ny = dLon / dist;
        const offsetMag = Math.max(1.8, Math.min(6.2, dist * 0.085)) * offsetSign;
        const steps = 20;
        const coords: [number, number][] = [];
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const bulge = Math.sin(Math.PI * t);
          const lon = from[0] + dLon * t + nx * offsetMag * bulge;
          const lat = Math.max(-85, Math.min(85, from[1] + dLat * t + ny * offsetMag * bulge));
          coords.push([lon, lat]);
        }
        return coords;
      };

      // 한국 본사 ↔ 각 거점 연결선
      // 협력업체+수출국 동시 해당 시 파란색 점선과 빨간색 점선 2줄로 분리 표시
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1.35;
      GLOBE_SITES.filter((s) => s.id !== HOME.id).forEach((s) => {
        if (s.isPartner && s.isExport) {
          // 1) 협력업체 연결선 (파란색 점선)
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.95)';
          ctx.beginPath();
          path({
            type: 'LineString',
            coordinates: buildCurvedLine([HOME.lon, HOME.lat], [s.lon, s.lat], 1),
          });
          ctx.stroke();

          // 2) 수출국 연결선 (빨간색 점선)
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.95)';
          ctx.beginPath();
          path({
            type: 'LineString',
            coordinates: buildCurvedLine([HOME.lon, HOME.lat], [s.lon, s.lat], -1),
          });
          ctx.stroke();
        } else {
          ctx.strokeStyle = s.isPartner ? 'rgba(59, 130, 246, 0.92)' : 'rgba(239, 68, 68, 0.92)';
          ctx.beginPath();
          path({ type: 'LineString', coordinates: [[HOME.lon, HOME.lat], [s.lon, s.lat]] });
          ctx.stroke();
        }
      });
      ctx.setLineDash([]);

      // 입체감 (하이라이트 / 그림자)
      const shade = ctx.createRadialGradient(size * 0.35, size * 0.3, r * 0.2, size / 2, size / 2, r);
      shade.addColorStop(0, 'rgba(255,255,255,0.10)');
      shade.addColorStop(1, 'rgba(0,10,40,0.38)');
      ctx.fillStyle = shade;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fill();

      // 거점 마커
      const center: [number, number] = [-rotation[0], -rotation[1]];
      const pulse = (Math.sin(now / 400) + 1) / 2;
      GLOBE_SITES.forEach((s) => {
        if (geoDistance([s.lon, s.lat], center) > Math.PI / 2 - 0.05) return;
        const p = projection([s.lon, s.lat]);
        if (!p) return;
        const isActive = activeRef.current?.id === s.id;
        const activeMode = activeRef.current?.id === s.id ? activeRef.current.mode : null;

        const primaryColor =
          activeMode === 'export'
            ? EXPORT_RED
            : activeMode === 'partner'
            ? PARTNER_BLUE
            : s.isPartner
            ? PARTNER_BLUE
            : EXPORT_RED;

        const markerR = 5.6;

        // 협력업체이면서 수출국인 경우(한국·중국·일본·미국): 마커를 대각선(/)으로 파란색 / 빨간색 반반 분할
        if (s.isPartner && s.isExport) {
          const auraR = 7 + pulse * 6 + (isActive ? 3 : 0);
          // 좌상단 파란색 오라
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.arc(p[0], p[1], auraR, Math.PI * 0.75, Math.PI * 1.75);
          ctx.closePath();
          ctx.fillStyle = PARTNER_BLUE + '38';
          ctx.fill();

          // 우하단 빨간색 오라
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.arc(p[0], p[1], auraR, Math.PI * 1.75, Math.PI * 0.75);
          ctx.closePath();
          ctx.fillStyle = EXPORT_RED + '38';
          ctx.fill();

          // 좌상단 파란색 반원 (중간 구분선 없이 파란색·빨간색만 맞닿게 표현)
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.arc(p[0], p[1], markerR, Math.PI * 0.75, Math.PI * 1.75);
          ctx.closePath();
          ctx.fillStyle = PARTNER_BLUE;
          ctx.fill();

          // 우하단 빨간색 반원
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.arc(p[0], p[1], markerR, Math.PI * 1.75, Math.PI * 0.75);
          ctx.closePath();
          ctx.fillStyle = EXPORT_RED;
          ctx.fill();

          // 외곽 흰색 테두리만 유지 (중간 흰색 대각선 제거)
          ctx.beginPath();
          ctx.arc(p[0], p[1], markerR, 0, Math.PI * 2);
          ctx.lineWidth = 1.4;
          ctx.strokeStyle = '#FFFFFF';
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p[0], p[1], 6 + pulse * 7 + (isActive ? 3 : 0), 0, Math.PI * 2);
          ctx.fillStyle = primaryColor + '40';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p[0], p[1], 5, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.fill();
          ctx.lineWidth = 1.4;
          ctx.strokeStyle = '#FFFFFF';
          ctx.stroke();
        }

        // 라벨 박스 (테두리는 모두 흰색으로 통일)
        ctx.font = '600 11.5px Inter, Pretendard, sans-serif';
        const label = s.globeLabel;
        const dotSpace = s.isPartner && s.isExport ? 21 : 12;
        const w = ctx.measureText(label).width + 14 + dotSpace;
        const rawLx = s.side === 'left' ? p[0] - 10 - w : p[0] + 10;
        const lx = Math.max(4, Math.min(size - w - 4, rawLx));
        const ly = Math.max(4, Math.min(size - 24, p[1] + s.dy));

        ctx.save();
        ctx.shadowColor = 'rgba(0, 18, 69, 0.22)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetY = 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(lx, ly, w, 21, 10.5);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // 라벨 내부 색상 점 (중간 구분선 없이 파란색·빨간색 점으로만 깔끔하게 표현)
        let textOffsetX = lx + 8;
        if (s.isPartner && s.isExport) {
          // 파란 점
          ctx.beginPath();
          ctx.arc(textOffsetX + 3.2, ly + 10.5, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = PARTNER_BLUE;
          ctx.fill();
          textOffsetX += 8.5;

          // 빨간 점
          ctx.beginPath();
          ctx.arc(textOffsetX + 3.2, ly + 10.5, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = EXPORT_RED;
          ctx.fill();
          textOffsetX += 9.5;
        } else {
          ctx.beginPath();
          ctx.arc(textOffsetX + 3.2, ly + 10.5, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = s.isPartner ? PARTNER_BLUE : EXPORT_RED;
          ctx.fill();
          textOffsetX += 10;
        }

        ctx.font = '600 11.5px Inter, Pretendard, sans-serif';
        ctx.fillStyle = '#001245';
        ctx.fillText(label, textOffsetX + 1, ly + 14.5);
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = 'grabbing';
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      rotation[0] += (e.clientX - lastX) * 0.35;
      rotation[1] = Math.max(-70, Math.min(70, rotation[1] - (e.clientY - lastY) * 0.35));
      lastX = e.clientX;
      lastY = e.clientY;
      lastInteract = performance.now();
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      lastInteract = performance.now();
      canvas.style.cursor = 'grab';
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    };
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);

    // 범례 클릭 시 해당 국가로 회전
    const focus = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const s = GLOBE_SITES.find((x) => x.id === id);
      if (!s) return;
      const target: [number, number] = [-s.lon, -s.lat * 0.6];
      const start: [number, number] = [rotation[0], rotation[1]];
      let d0 = target[0] - start[0];
      d0 = ((d0 + 540) % 360) - 180;
      const startT = performance.now();
      const step = (n: number) => {
        const k = Math.min((n - startT) / 700, 1);
        const ease = 1 - Math.pow(1 - k, 3);
        rotation[0] = start[0] + d0 * ease;
        rotation[1] = start[1] + (target[1] - start[1]) * ease;
        lastInteract = performance.now();
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    wrap.addEventListener('globe-focus', focus);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
      wrap.removeEventListener('globe-focus', focus);
    };
  }, []);

  const focusSite = (id: string, mode: 'partner' | 'export') => {
    setActiveState({ id, mode });
    wrapRef.current?.dispatchEvent(new CustomEvent('globe-focus', { detail: id }));
  };

  return (
    <div ref={wrapRef} className="w-full flex flex-col items-center">
      <canvas
        ref={canvasRef}
        aria-label="NK UCT 글로벌 협력업체 및 수출 국가를 보여주는 3D 지구본. 마우스로 드래그하여 회전할 수 있습니다."
        role="img"
        style={{ cursor: 'grab', touchAction: 'none', maxWidth: '100%' }}
      />
      <p className="text-xs" style={{ color: 'var(--nk-text-dim)', marginTop: '0.35rem' }}>
        마우스로 끌어서 지구본을 돌려보세요 (항목 클릭 시 해당 위치로 이동)
      </p>

      {/* 두 가지 섹션: 1. 협력업체 (파란색) / 2. 수출 및 이력 국가 (빨간색) */}
      <div
        className="w-full max-w-lg"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginTop: '0.85rem',
        }}
      >
        {/* 섹션 1: 협력업체 (파란색) */}
        <div
          className="rounded-xl border"
          style={{
            padding: '0.85rem 1rem',
            background: 'rgba(255, 255, 255, 0.92)',
            borderColor: 'rgba(37, 99, 235, 0.35)',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.07)',
          }}
        >
          <div
            className="flex items-center justify-center gap-2 text-xs font-bold"
            style={{ color: PARTNER_BLUE, marginBottom: '0.6rem' }}
          >
            <span
              className="inline-block rounded-full"
              style={{ width: '9px', height: '9px', background: PARTNER_BLUE }}
            />
            <span>협력업체 (글로벌 네트워크)</span>
          </div>
          <div className="flex flex-wrap justify-center" style={{ gap: '0.45rem' }}>
            {PARTNER_LIST.map((item) => {
              const isSelected = activeState?.id === item.id && activeState?.mode === 'partner';
              return (
                <button
                  key={`partner-${item.id}`}
                  type="button"
                  onClick={() => focusSite(item.id, 'partner')}
                  onMouseLeave={() => setActiveState(null)}
                  className="rounded-full text-xs font-semibold transition-all hover:shadow-md inline-flex items-center"
                  style={{
                    gap: '0.4rem',
                    padding: '0.4rem 0.85rem',
                    background: isSelected ? PARTNER_BLUE : 'rgba(37, 99, 235, 0.08)',
                    color: isSelected ? '#FFFFFF' : '#1E3A8A',
                    border: `1.5px solid ${PARTNER_BLUE}`,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: '7px',
                      height: '7px',
                      background: isSelected ? '#FFFFFF' : PARTNER_BLUE,
                    }}
                  />
                  <span>
                    <strong>{item.country}</strong> · {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 섹션 2: 수출 및 이력 국가 (빨간색) */}
        <div
          className="rounded-xl border"
          style={{
            padding: '0.85rem 1rem',
            background: 'rgba(255, 255, 255, 0.92)',
            borderColor: 'rgba(220, 38, 38, 0.35)',
            boxShadow: '0 4px 14px rgba(220, 38, 38, 0.07)',
          }}
        >
          <div
            className="flex items-center justify-center gap-2 text-xs font-bold"
            style={{ color: EXPORT_RED, marginBottom: '0.6rem' }}
          >
            <span
              className="inline-block rounded-full"
              style={{ width: '9px', height: '9px', background: EXPORT_RED }}
            />
            <span>수출 및 납품 이력 국가</span>
          </div>
          <div className="flex flex-wrap justify-center" style={{ gap: '0.45rem' }}>
            {EXPORT_LIST.map((item) => {
              const isSelected = activeState?.id === item.id && activeState?.mode === 'export';
              return (
                <button
                  key={`export-${item.id}`}
                  type="button"
                  onClick={() => focusSite(item.id, 'export')}
                  onMouseLeave={() => setActiveState(null)}
                  className="rounded-full text-xs font-semibold transition-all hover:shadow-md inline-flex items-center"
                  style={{
                    gap: '0.35rem',
                    padding: '0.4rem 0.85rem',
                    background: isSelected ? EXPORT_RED : 'rgba(220, 38, 38, 0.08)',
                    color: isSelected ? '#FFFFFF' : '#991B1B',
                    border: `1.5px solid ${EXPORT_RED}`,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: '7px',
                      height: '7px',
                      background: isSelected ? '#FFFFFF' : EXPORT_RED,
                    }}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
