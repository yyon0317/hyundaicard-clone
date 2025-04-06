// 메인 메뉴
export const MAIN_MENU = [
    { label: 'My Account', link: '/', key: 'account' },
    { label: '카드', link: '/', key: 'card' },
    { label: '혜택', link: '/', key: 'benefit' },
    { label: '금융', link: '/', key: 'finance' },
    { label: '컬처', link: '/', key: 'culture' },
    { label: '고객지원', link: '/', key: 'support' },
  ];
  
  // 유틸 메뉴
  export const UTILITY_MENU = [
    { label: '개인사업자', link: '/' },
    { label: '법인', link: '/' },
    { label: '가맹점', link: '/' },
    { label: '소비자보호 포털', link: '/' },
    { label: '상품공시실', link: '/' },
  ];
  
  // 서브 메뉴
  export const SUB_MENU = {
    account: [
      {
        title: '이용내역',
        items: ['이용대금명세서', '카드 이용내역', '이용알림서비스'],
      },
      {
        title: '이용대금 결제',
        items: ['즉시결제', '분할납부'],
      },
      {
        title: '내 카드 관리',
        items: ['카드 목록', '비밀번호 설정'],
      },
    ],
    card: [
      {
        title: '카드 안내',
        items: ['신용카드', '체크카드', '프리미엄카드'],
      },
      {
        title: '카드 신청',
        items: ['간편 카드 신청', '추천 카드'],
      },
    ],
    benefit: [
      {
        title: '포인트',
        items: ['M포인트', '포인트 전환', '포인트몰'],
      },
      {
        title: '혜택 이용',
        items: ['이벤트', '쿠폰', '멤버십 서비스'],
      },
    ],
    finance: [
      {
        title: '금융서비스',
        items: ['현금서비스', '카드론', '일부결제금액이월약정(리볼빙)'],
      },
      {
        title: '결제 서비스',
        items: ['자동이체 신청', '가상계좌'],
      },
    ],
    culture: [
      {
        title: '컬처 프로그램',
        items: ['현대카드 라이브러리', '현대카드 스토리지'],
      },
      {
        title: '전시/공연',
        items: ['공연예매', '전시안내'],
      },
    ],
    support: [
      {
        title: '고객센터',
        items: ['자주 묻는 질문', '1:1 문의', '분실신고'],
      },
      {
        title: '이용안내',
        items: ['이용약관', '전자금융거래약관', '개인정보처리방침'],
      },
    ],
  };
  