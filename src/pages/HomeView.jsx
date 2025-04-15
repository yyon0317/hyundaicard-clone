import React, { useState, useEffect, useRef } from 'react';
import { Header, SubMenu, TopBanner } from '../components/common';
import HeroSlider from '../components/home/HeroSlider';
import CardSectionOriginals from '../components/home/CardSectionOriginals';
import CardSectionAmex from '../components/home/CardSectionAmex';
import CardSectionChampion from '../components/home/CardSectionChampion';
import EventCardsGrid from '../components/home/EventCardsGrid';
import SidebarRight from '../components/home/SidebarRight';
import SidebarTabs from '../components/home/SidebarTabs';
import AppDownloadSlider from '../components/home/AppDownloadSlider';
import ConsumerInfo from '../components/home/ConsumerInfo';
import Footer from '../components/common/Footer';

function HomeView() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const sidebarRef = useRef(null);
  const scrollStopRef = useRef(null); // 스크롤 멈춤 기준

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const stopTarget = scrollStopRef.current;
    if (!sidebar || !stopTarget) return;

    const headerOffset = 40;
    let ticking = false;

    const updateSidebar = () => {
      const scrollY = window.scrollY;
      const sidebarHeight = sidebar.offsetHeight;
      const stopY = stopTarget.getBoundingClientRect().top + window.scrollY;
      const maxTop = stopY - sidebarHeight;
      const newTop = Math.min(scrollY + headerOffset, maxTop);

      sidebar.style.top = `${newTop}px`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateSidebar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopBanner />

      {/* GNB */}
      <div
        className="gnb-wrapper"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => {
          setIsSubMenuOpen(false);
          setActiveMenu(null);
        }}
      >
        <Header onMenuHover={setActiveMenu} activeKey={activeMenu} />
        <SubMenu isVisible={isSubMenuOpen} menuKey={activeMenu} onHover={setIsSubMenuOpen} />
      </div>

      <main className="home">
        <div className="main-area">
          <HeroSlider />
          <CardSectionOriginals />
          <CardSectionAmex />

          
            <CardSectionChampion />
          
          {/* 멈출 기준 ref 적용 */}
          <div ref={scrollStopRef}>
          <EventCardsGrid />
          </div>
          <Footer />
        </div>

        <aside ref={sidebarRef} className="sidebar">
          <SidebarRight />
          <SidebarTabs />
          <AppDownloadSlider />
          <ConsumerInfo /> 
        </aside>
      </main>
    </>
  );
}

export default HomeView;
