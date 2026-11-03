export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  desc: string; // short description
  badges: string[];
  image: string;
  overview: string; // long description
  features: ProductFeature[];
  specs: ProductSpec[];
  underRevision?: boolean; // Added for products under revision
}

export const productsData: Product[] = [
  // 자동소화설비
  { 
    id: 'cabinex-ewt', 
    category: '자동소화설비', 
    name: 'CABINEX-EWT2', 
    desc: '반도체·디스플레이 제조 장비용 FM 인증 이산화탄소(CO2) 자동소화설비입니다. ESS·배기덕트 등은 현장 조건에 맞춰 적용을 검토합니다.', 
    badges: ['FM', 'CE'], 
    image: '/products/cabinex-ewt.jpg',
    overview: 'FM 인증(FM Approved)을 획득한 이산화탄소(CO2) 자동소화설비입니다. 소화약제량은 FM 기준에 따라 산정하며, CO2는 비전도성이고 방출 후 클린룸 환경과 보호 대상 장비에 미치는 영향이 적습니다.',
    features: [
      { title: '화재 감지 및 소화 연동', description: '전용 감지기가 화재를 감지하면 소화약제 방사로 연동됩니다.' },
      { title: '이력, 감시', description: '실시간 모니터링, 이력 관리가 가능합니다.' },
      { title: 'FM 인증 (FM Approved)', description: 'FM은 공장·생산설비의 재산 손실 방지 기준이며, 미국 NFPA 규격을 포함합니다. 본 제품은 FM 인증을 획득했습니다.' },
      { title: '이산화탄소(CO2) 소화', description: 'CO2는 비전도성이며 방출 후 장비와 주변 환경에 미치는 영향이 적습니다. 반도체·디스플레이 제조 장비를 중심으로 하며, ESS·배기덕트 등은 현장 조건에 맞춰 검토합니다.' }
    ],
    specs: [
      { label: '소화약제', value: '이산화탄소 (CO2) 22.7kg / 45.4kg' },
      { label: '사용온도', value: '0℃ ~ 40℃' },
      { label: '소비전력', value: '105W Max.' },
      { label: '입력전원', value: 'AC100~120V / 187~240V, 50/60Hz' },
      { label: '규격 (W×H×D)', value: 'COX-50EWT2 기준 500×1530×370 mm' }
    ]
  },
  { 
    id: 'cabinex-en2', 
    category: '자동소화설비', 
    name: 'CABINEX-EN2', 
    desc: '공작 기계 및 각종 산업 기계 설비용 자동 소화 시스템.', 
    badges: [], 
    image: '/products/cabinex.jpg',
    overview: '공작 기계, 산업 기계 등 화재 위험이 있는 설비를 보호하기 위한 맞춤형 패키지 소화 시스템입니다.',
    features: [
      { title: '뛰어난 공간 효율성', description: '컴팩트한 디자인으로 좁은 공간이나 기계 내부에도 설치가 용이합니다.' },
      { title: '감지 및 소화 연동', description: '전용 감지기와 연동하여 화재 감지 시 소화약제를 방출합니다.' }
    ],
    specs: [
      { label: '소화약제', value: '이산화탄소 (CO2)' },
      { label: '작동방식', value: '자동 감지 및 수동 조작' }
    ],
    underRevision: true
  },
  { 
    id: 'cabinex-kz', 
    category: '자동소화설비', 
    name: 'CABINEX-KZ', 
    desc: '화재 발생 시 소화약제를 국소 방출하는 방식의 소화 시스템입니다.', 
    badges: [], 
    image: '/products/cabinex.jpg',
    overview: '특정 방호 구역에 국소 방출 방식으로 소화약제를 집중 투입하여 화재 진압을 돕는 시스템입니다.',
    features: [
      { title: '국소 방출 방식', description: '방호 대상 부위에 소화약제를 국소적으로 방출하도록 구성합니다.' },
      { title: '안전 설계', description: '인체 및 환경을 고려한 설계가 적용되었습니다.' }
    ],
    specs: [
      { label: '인증', value: '없음' },
      { label: '적용분야', value: '위험물 취급소, 전기실' }
    ],
    underRevision: true
  },
  
  // 감지기 및 센서
  { 
    id: 'sensor-sx', 
    category: '감지기 및 센서', 
    name: '3파장 적외선식 불꽃 감지기', 
    desc: '3개의 적외선 파장을 분석하여 불꽃을 감지하며, 비화재보(오작동) 가능성을 줄입니다.', 
    badges: ['FM'], 
    image: '/products/sensors.jpg',
    overview: '3파장 적외선(IR3) 방식으로 불꽃의 적외선 스펙트럼 패턴을 분석하며, 용접 불꽃이나 직사광선 등에 의한 오작동 가능성을 줄입니다.',
    features: [
      { title: '비화재보 저감', description: '불꽃의 적외선 스펙트럼 패턴을 분석하여 오작동 가능성을 줄입니다.' },
      { title: '반도체·FPD 장비용', description: '반도체·FPD 제조 장비용으로 설계된 모델이며, 감지기 배선 이상과 전원 이상을 감지할 수 있습니다.' }
    ],
    specs: [
      { label: '인증', value: 'FM' },
      { label: '감지거리', value: '화염 크기에 따라 상이 (카탈로그 참조)' },
      { label: '감지시야각', value: '원뿔형 ±50° (카탈로그 기준)' }
    ]
  },
  { 
    id: 'sensor-th', 
    category: '감지기 및 센서', 
    name: '서미스터형 열 감지기', 
    desc: '설정된 온도에 도달하면 경보를 발령하는 열 감지기입니다.', 
    badges: [], 
    image: '/products/sensors.jpg',
    overview: '반도체 공정 장비 등에 적용되는 서미스터 방식 열 감지기로, 설정된 온도에 도달하면 동작합니다.',
    features: [
      { title: '서미스터 방식 온도 감시', description: '서미스터 소자를 이용해 온도 변화를 감시합니다.' },
      { title: '설치 환경', description: '설치 환경에 맞춰 선정합니다. 부식성 가스·분진 환경은 사전 상담이 필요합니다.' }
    ],
    specs: [
      { label: '인증', value: '없음' },
      { label: '감지방식', value: '서미스터 (Thermistor)' }
    ]
  },
  { 
    id: 'sensor-sg', 
    category: '감지기 및 센서', 
    name: '연기 및 가연성 가스 감지 장치', 
    desc: '화재로 인한 연기와 가연성 가스 누출을 동시에 감지하는 복합형 조기 경보 센서.', 
    badges: [], 
    image: '/products/sensors.jpg',
    overview: '연기와 가연성 가스를 하나의 유닛에서 감지하여, 화재와 가스 누출 위험을 조기에 파악하도록 돕는 복합 감지 장치입니다.',
    features: [
      { title: '복합 감지', description: '연기와 가연성 가스를 하나의 유닛에서 모니터링합니다.' },
      { title: '빠른 유지보수', description: '센서 모듈 교체가 용이하게 설계되었습니다.' }
    ],
    specs: [
      { label: '인증', value: '없음' },
      { label: '감지대상', value: '연기, 가연성 가스 (H2, CH4 등)' }
    ]
  }
];
