// ✅ GNB 전체 구조 통합 (Header + SubMenu hover 상태를 하나로 처리)
import React, { useState } from 'react';
import { Header, SubMenu, TopBanner } from '../components/common';
import HeroSlider from '../components/home/HeroSlider';
import CardSectionOriginals from '../components/home/CardSectionOriginals';
import CardSectionAmex from '../components/home/CardSectionAmex';
import CardSectionChampion from '../components/home/CardSectionChampion';
import EventCardsGrid from '../components/home/EventCardsGrid';
import SidebarRight from '../components/home/SidebarRight';
import SidebarTabs from '../components/home/SidebarTabs';

function HomeView() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      <TopBanner />

      {/* Header + SubMenu를 하나의 wrapper로 통합 */}
      <div
        className="gnb-wrapper"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => {
          setIsSubMenuOpen(false);
          setActiveMenu(null); // 🔥 active 제거
        }}
      >
        <Header
          onMenuHover={(key) => {
            setActiveMenu(key);
          }}
          activeKey={activeMenu}
        />
        <SubMenu
          isVisible={isSubMenuOpen}
          menuKey={activeMenu}
          onHover={(v) => setIsSubMenuOpen(v)}
        />
      </div>

      <main className="home">
        <div className="main-area">
          <HeroSlider />
          <CardSectionOriginals />
          <CardSectionAmex />
          <CardSectionChampion />
          <EventCardsGrid />
        </div>
        <aside className="sidebar">
          <SidebarRight />
          <SidebarTabs />
        </aside>
      </main>
    </>
  );
}

export default HomeView;