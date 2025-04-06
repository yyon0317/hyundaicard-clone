import React from 'react';
import '../../assets/scss/layout/_header.scss';
import logo from '../../assets/img/logo_hyundaicard_scr.svg';
import searchIcon from '../../assets/img/ico_searchB.png';

import { MAIN_MENU, UTILITY_MENU } from '../../constants/menus';

function Header({ onMenuHover, onMenuLeave, activeKey  }) {
  return (
    <header className="header">
      <div className="header__inner">
        {/* 로고 */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="현대카드 로고" />
          </a>
        </div>

        {/* 메인 메뉴 */}
        <nav
          className="main-menu" onMouseLeave={onMenuLeave}
        >
          <ul>
            {MAIN_MENU.map((item) => (
              <li
                key={item.key}
                className={activeKey === item.key ? 'active' : ''}
                onMouseEnter={() => onMenuHover(item.key)}
              >
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 유틸 + 검색 */}
        <div className="header-right">
        <ul className="utility-menu">
          {UTILITY_MENU.map((item, i) => (
            <li key={i}><a href={item.link}>{item.label}</a></li>
          ))}
        </ul>

          <div className="search-box">
            <button>
              <img src={searchIcon} alt="검색" />
            </button>
            <input type="text" placeholder="카드, 메뉴, 혜택 검색" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

