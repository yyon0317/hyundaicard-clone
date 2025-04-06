import React from 'react';
import { SUB_MENU } from '../../constants/menus';
import '../../assets/scss/layout/_submenu.scss';

function SubMenu({ isVisible, menuKey, onHover }) {
  const currentMenu = SUB_MENU[menuKey];

  if (!currentMenu) return null; // 해당 서브메뉴 없으면 출력 안 함

  return (
    <div
    className={`submenu ${isVisible ? 'on' : ''}`}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <div className="submenu__inner">
      <div className="submenu__left">
        <ul>
          {currentMenu.map((section, i) => (
            <li key={i}>
              <h6>{section.title}</h6>
              <ul>
                {section.items.map((item, j) => (
                  <li key={j}><a href="/">{item}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="submenu__right">
        <h6>자주 찾는 메뉴</h6>
        <p>로그인하면 자주 찾는 메뉴를<br />확인할 수 있습니다.</p>
        <div className="login-btn">
          <a href="/">로그인</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SubMenu;
