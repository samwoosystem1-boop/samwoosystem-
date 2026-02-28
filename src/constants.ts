export interface Partner {
  id: string;
  name: string;
  slogan: string;
  description: string;
  products: string[];
  link: string;
  logo: string;
  logoUrl: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface LibraryItem {
  id: string;
  brand: string;
  title: string;
  type: 'Catalog' | 'Manual' | 'Certificate' | 'Drawing';
  link: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'yokogawa',
    name: 'YOKOGAWA',
    slogan: 'Co-innovating Tomorrow',
    description: '독자적 기술 기반의 고정밀 현장 계기. OpreX 브랜드의 신뢰성을 바탕으로 한 세계적 리더.',
    products: ['압력 전송기 (EJX/EJA)', '유량계', '온도 전송기', '레벨 미터'],
    link: 'https://www.yokogawa.com/solutions/products-platforms/field-instruments/',
    logo: 'YOKOGAWA',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Yokogawa_Electric_logo.svg/512px-Yokogawa_Electric_logo.svg.png'
  },
  {
    id: 'kobold',
    name: 'KOBOLD',
    slogan: 'Made in Germany',
    description: '전 세계가 신뢰하는 정밀 측정 및 제어 기술. 독일의 정밀 측정 기술 및 유량/압력 제어 솔루션.',
    products: ['Flow 센서', 'Pressure 센서', 'Level 센서', 'Temperature 스위치'],
    link: 'https://www.kobold.com/',
    logo: 'KOBOLD',
    logoUrl: 'https://www.kobold.com/images/logo.png'
  },
  {
    id: 'fluke',
    name: 'FLUKE',
    slogan: 'Keeping your world up and running',
    description: '세계 1위 산업 계측기 브랜드. 정확성과 내구성을 겸비한 열화상 및 전력 분석 솔루션.',
    products: ['열화상 카메라', '디지털 멀티미터', '전력 품질 분석기'],
    link: 'https://www.fluke.com/ko-kr',
    logo: 'FLUKE',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Fluke_Corporation_logo.svg/512px-Fluke_Corporation_logo.svg.png'
  },
  {
    id: 'kometer',
    name: 'KOMETER',
    slogan: '국제공인 교정기관(KOLAS) 인증',
    description: '대한민국 유량계의 표준, 정밀 교정 및 제조 기술. 국내 최고의 유량 계측 솔루션.',
    products: ['전자기 유량계 (KTM-800)', '볼텍스 유량계 (KTVP-750)', '질량 유량계 (KMS-2000)'],
    link: 'http://www.kometer.co.kr/',
    logo: 'KOMETER',
    logoUrl: 'https://www.kometer.co.kr/img/common/logo.png'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'steel',
    title: 'Steel',
    description: '고온, 고압의 극한 환경에서도 정밀한 계측이 가능한 철강 공정 최적화 솔루션을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: '가혹한 환경에서도 신뢰할 수 있는 고정밀 계측 솔루션으로 생산 효율을 극대화합니다.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'chemical',
    title: 'Chemical',
    description: '복잡한 화학 공정의 안전과 정밀한 제어를 위한 최적의 파트너 솔루션을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'power',
    title: 'Power',
    description: '발전 설비의 안정적인 운영과 에너지 효율 개선을 위한 통합 모니터링 시스템을 구축합니다.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200'
  }
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  { id: '1', brand: 'KOMETER', title: 'KMSG-8000MT (Thermal Mass Flowmeter) Manual', type: 'Manual', link: '#' },
  { id: '2', brand: 'KOBOLD', title: 'Kobold MAN-SC Datasheet', type: 'Catalog', link: '#' },
  { id: '3', brand: 'YOKOGAWA', title: 'Yokogawa EJX Series General Specs', type: 'Catalog', link: '#' },
  { id: '4', brand: 'FLUKE', title: 'Fluke Ti480 PRO Thermal Camera User Manual', type: 'Manual', link: '#' },
  { id: '5', brand: 'KOMETER', title: 'KTM-800 Electromagnetic Flowmeter Certificate', type: 'Certificate', link: '#' },
];
