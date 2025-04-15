// components/home/SidebarTabs.jsx
import React from 'react';
import '../../assets/scss/layout/_sidebarTabs.scss';

const financeItems = [
  {
    title: '장기카드대출(카드론)',
    desc: '목돈이 필요할 때',
    link: '/',
  },
  {
    title: '단기카드대출(현금서비스)',
    desc: '일상에서 현금이 필요할 때',
    link: '/',
  },
  {
    title: '일부결제금액이월약정(리볼빙)',
    desc: '카드대금이 부담될 때',
    link: '/',
  },
];

const noticeItems = [
  '카드 배송 사칭 보이스피싱 증가 주의 안내',
  '단기카드대출(현금서비스) 및 일부결제...',
  '대한항공카드 신규 플레이트 ‘the Millio...',
  'M 긴급적립(선지급 포인트 서비스) 및 X...',
  '스마트미싱케어 이용 약관 변경 안내',
];

const SidebarTabs = () => {
  return (
    <div className="sidebar-tabs">
      {/* 금융 영역 */}
      <section className="finance-box">
        <h4 className="sidebar-title">
          금융 <a href="/"><span className="arrow">›</span></a>
        </h4>
        <ul className="sidebar-list">
          {financeItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.link}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 뉴스·공지사항 영역 */}
      <section className="notice-box">
        <h4 className="sidebar-title">
          뉴스 · 공지사항 <a href="/"><span className="arrow">›</span></a>
        </h4>
        <ul className="sidebar-list notice">
          {noticeItems.map((text, idx) => (
            <li key={idx}>
              <a href="/">{text}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SidebarTabs;
