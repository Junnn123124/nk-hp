'use client';

import { useEffect, useRef, useState } from 'react';
import { geoOrthographic, geoPath, geoContains, geoDistance } from 'd3-geo';
import { feature } from 'topojson-client';
import landTopology from 'world-atlas/land-110m.json';

export interface GlobeSite {
  id: string;
  name: string;
  role: string;
  lon: number;
  lat: number;
  color: string;
  side: 'left' | 'right'; // 라벨 위치 (겹침 방지)
  dy: number;
}

// 지사/거점 정보 — 위치(경도·위도)와 명칭은 여기서 수정하세요.
export const GLOBE_SITES: GlobeSite[] = [
  { id: 'kr', name: '대한민국', role: 'NK UCT', lon: 126.98, lat: 37.57, color: '#2E6DB8', side: 'left', dy: -28 },
  { id: 'jp', name: '일본', role: 'Hatsuta (본사)', lon: 139.69, lat: 35.69, color: '#E53E3E', side: 'right', dy: -26 },
  { id: 'us', name: '미국', role: 'NKuct America, Inc. (자회사)', lon: -97.74, lat: 30.27, color: '#F59E0B', side: 'right', dy: -24 },
  { id: 'cn', name: '중국', role: 'NK-HATSUTA 상하이 합작법인', lon: 121.47, lat: 31.23, color: '#10B981', side: 'left', dy: 6 },
];

const HOME = GLOBE_SITES[0];

export default function GlobeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeRef = useRef<string | null>(null);
  activeRef.current = activeId;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = wrapRef.current!;
    const ctx = canvas.getContext('2d')!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const land = feature(landTopology as any, (landTopology as any).objects.land) as any;
    // 단순화된 점(dot) 지도: 육지를 점으로만 표현하여 국경선·지명·세부 해안선을 표시하지 않음
    const dots: [number, number][] = [];
    const step = 2.8;
    for (let lat = -56; lat <= 82; lat += step) {
      const lonStep = step / Math.max(Math.cos((lat * Math.PI) / 180), 0.2);
      for (let lon = -180; lon < 180; lon += lonStep) {
        if (geoContains(land, [lon, lat])) dots.push([lon, lat]);
      }
    }

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
      size = Math.max(260, Math.min(wrap.clientWidth, 520));
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
      const r = size / 2 - 6;
      projection.translate([size / 2, size / 2]).scale(r).rotate([rotation[0], rotation[1]]);
      const path = geoPath(projection, ctx);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      // 대기 glow
      const glow = ctx.createRadialGradient(size / 2, size / 2, r * 0.95, size / 2, size / 2, r * 1.12);
      glow.addColorStop(0, 'rgba(74,144,217,0.35)');
      glow.addColorStop(1, 'rgba(74,144,217,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, r * 1.12, 0, Math.PI * 2);
      ctx.fill();

      // 바다
      const ocean = ctx.createRadialGradient(size * 0.38, size * 0.32, r * 0.1, size / 2, size / 2, r);
      ocean.addColorStop(0, '#2A5AA8');
      ocean.addColorStop(1, '#001B5E');
      ctx.fillStyle = ocean;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fill();

      // 육지 (점 지도)
      const viewCenter: [number, number] = [-rotation[0], -rotation[1]];
      const dotR = Math.max(1.1, (size / 260) * 1.25);
      ctx.fillStyle = 'rgba(225,236,252,0.9)';
      ctx.beginPath();
      for (const d of dots) {
        if (geoDistance(d, viewCenter) > Math.PI / 2 - 0.02) continue;
        const q = projection(d);
        if (!q) continue;
        ctx.moveTo(q[0] + dotR, q[1]);
        ctx.arc(q[0], q[1], dotR, 0, Math.PI * 2);
      }
      ctx.fill();

      // 한국 본사 ↔ 각 거점 연결선
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1.2;
      GLOBE_SITES.filter((s) => s.id !== HOME.id).forEach((s) => {
        ctx.beginPath();
        path({ type: 'LineString', coordinates: [[HOME.lon, HOME.lat], [s.lon, s.lat]] });
        ctx.stroke();
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
        const isActive = activeRef.current === s.id;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 6 + pulse * 7 + (isActive ? 3 : 0), 0, Math.PI * 2);
        ctx.fillStyle = s.color + '40';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p[0], p[1], 5, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#fff';
        ctx.stroke();

        ctx.font = '600 12px Inter, Pretendard, sans-serif';
        const label = s.name;
        const w = ctx.measureText(label).width + 14;
        const lx = s.side === 'left' ? p[0] - 10 - w : p[0] + 10;
        const ly = p[1] + s.dy;
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(lx, ly, w, 20, 10);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#001245';
        ctx.fillText(label, lx + 7, ly + 14);
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

  const focusSite = (id: string) => {
    setActiveId(id);
    wrapRef.current?.dispatchEvent(new CustomEvent('globe-focus', { detail: id }));
  };

  return (
    <div ref={wrapRef} className="w-full flex flex-col items-center">
      <canvas
        ref={canvasRef}
        aria-label="NK UCT 글로벌 거점을 보여주는 3D 지구본. 마우스로 드래그하여 회전할 수 있습니다."
        role="img"
        style={{ cursor: 'grab', touchAction: 'none', maxWidth: '100%' }}
      />
      <p className="text-xs mt-2" style={{ color: 'var(--nk-text-dim)' }}>
        마우스로 끌어서 지구본을 돌려보세요
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-md">
        {GLOBE_SITES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => focusSite(s.id)}
            onMouseLeave={() => setActiveId(null)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border bg-white transition-shadow hover:shadow-md"
            style={{ borderColor: s.color, color: 'var(--nk-primary-dark)' }}
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
            {s.name} · {s.role}
          </button>
        ))}
      </div>
    </div>
  );
}
