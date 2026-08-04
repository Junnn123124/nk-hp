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
    desc: '반도체, 디스플레이, ESS, 배터리 등 제조 장비 화재 특성에 맞춘 초고속 맞춤형 자동소화 시스템.', 
    badges: ['FM', 'CE'], 
    image: '/products/cabinex-ewt.jpg',
    overview: 'FM 요구 기준을 만족하는 CO2 소화 가스를 사용하여, 클린룸 및 반도체 장비 내 화재를 잔여물 없이 안전하고 완벽하게 진압하는 최고 성능의 시스템입니다.',
    features: [
      { title: '0.3초 초고속 감지', description: '특수 센서를 통해 화재를 0.3초 이내에 감지하고 즉각 대응합니다.' },
      { title: '네트워크 감시', description: 'Modbus/TCP 통신을 지원하여 실시간 모니터링 및 이력 관리가 가능합니다.' },
      { title: '범용 방호 솔루션', description: '이산화탄소를 사용하여 반도체, 디스플레이뿐만 아니라 배기덕트 및 ESS 화재까지 전천후 대응이 가능합니다.' }
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
    desc: '공작 기계 및 각종 산업 기계 설비에 최적화된 자동 소화 시스템.', 
    badges: [], 
    image: '/products/cabinex.jpg',
    overview: '공작 기계, 산업 기계 등 화재 위험이 있는 설비를 보호하기 위한 맞춤형 패키지 소화 시스템입니다.',
    features: [
      { title: '뛰어난 공간 효율성', description: '컴팩트한 디자인으로 좁은 공간이나 기계 내부에도 설치가 용이합니다.' },
      { title: '신속한 감지 및 소화', description: '전용 감지기와 연동하여 화재 발생 즉시 소화 약제를 방출합니다.' }
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
    desc: '국소 방출 방식의 고성능 소화 시스템으로 화재 발생 시 신속하게 대응합니다.', 
    badges: [], 
    image: '/products/cabinex.jpg',
    overview: '특정 방호 구역에 국소 방출 방식으로 소화약제를 집중 투입하여 화재를 빠르고 효과적으로 진압하는 시스템입니다.',
    features: [
      { title: '국소 방출 최적화', description: '화원(Fire source)을 직접 겨냥하여 효율적인 소화 성능을 제공합니다.' },
      { title: '안전 설계', description: '인체 및 환경에 미치는 영향을 최소화하는 설계가 적용되었습니다.' }
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
    desc: '3개의 다른 적외선 파장을 분석하여 비화재보(오작동)를 최소화하고 정확하게 화재를 감지합니다.', 
    badges: ['FM'], 
    image: '/products/sensors.jpg',
    overview: '최첨단 3파장 적외선(IR3) 센서 기술을 적용하여 장거리에서도 불꽃을 정확히 인식하며, 용접 불꽃이나 직사광선 등에 의한 오작동을 원천 차단합니다.',
    features: [
      { title: '비화재보 방지', description: '고급 알고리즘으로 진짜 화재 불꽃만을 식별합니다.' },
      { title: '초고속 반응', description: '불꽃 발생 후 0.3초 이내에 경보를 출력합니다.' }
    ],
    specs: [
      { label: '인증', value: 'FM' },
      { label: '감지거리', value: '최대 60m' },
      { label: '감지시야각', value: '90도' }
    ]
  },
  { 
    id: 'sensor-th', 
    category: '감지기 및 센서', 
    name: '서미스터형 열 감지기', 
    desc: '미세한 온도 변화를 빠르고 정밀하게 감지하여 화재 초기 단계에서 경보를 발령합니다.', 
    badges: [], 
    image: '/products/sensors.jpg',
    overview: '반도체 공정 장비 등 미세한 열 변화에도 민감한 환경에 적용되는 고정밀 열 감지기로, 설정된 위험 온도 도달 시 즉시 동작합니다.',
    features: [
      { title: '고정밀 감지', description: '작은 온도 변화도 정밀하게 추적 및 감시합니다.' },
      { title: '내구성', description: '부식성 가스나 분진이 있는 공장 환경에서도 높은 내구성을 발휘합니다.' }
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
    overview: '연기와 폭발성 가연성 가스를 하나의 유닛에서 동시에 감지함으로써, 화재 위험뿐만 아니라 가스 폭발 위험까지 사전에 차단하는 복합 안전 장치입니다.',
    features: [
      { title: '복합 감지', description: '연기와 가스를 동시에 모니터링하여 감지 신뢰도를 극대화합니다.' },
      { title: '빠른 유지보수', description: '센서 모듈 교체가 용이하게 설계되었습니다.' }
    ],
    specs: [
      { label: '인증', value: '없음' },
      { label: '감지대상', value: '연기, 가연성 가스 (H2, CH4 등)' }
    ]
  }
];
