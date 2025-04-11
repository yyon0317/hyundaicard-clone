// components/home/SidebarRight.jsx
import React, {  useState, useEffect } from 'react';
import '../../assets/scss/layout/_sidebar.scss';

import qrcode from '../../assets/img/QRCODE.png';

const SidebarRight = () => {
  const [activeTab, setActiveTab] = useState('pin');

  const [countdown, setCountdown] = useState(299); // 4분 59초 (299초)

  useEffect(() => {
    if (activeTab === 'app') {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(1, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  
  return (
    <aside className="sidebar-right">
      {/* 로그인 박스 */}
      <div className="login-box">
        <h4 className="sidebar-title">
        로그인<span className="arrow">다른 로그인 방법 ›</span>
        </h4>
        <div className="tabs">
          <button
            className={activeTab === 'pin' ? 'active' : ''}
            onClick={() => setActiveTab('pin')}
          >
            간편번호
          </button>
          <button
            className={activeTab === 'app' ? 'active' : ''}
            onClick={() => setActiveTab('app')}
          >
            현대카드 앱
          </button>
        </div>
        <div className="login-content">
          {activeTab === 'pin' ? (
            <>
              <p className="guide">현대카드 홈페이지 간편번호<br />6자리를 설정해 주세요</p>
              <div className="dot-nav">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="dot" />
                ))}
              </div>
              <button className="btn-login">간편번호 등록</button>
              <div className="app-links">
                <a href="/">회원가입</a>
              </div>
            </>
          ) : (
            <>
              <p className="guide">
                현대카드 앱 실행 후 '앱카드 메뉴'에서<br />
                QR코드 스캔 또는 숫자코드 입력을 선택해 주세요
              </p>
              <p className="countdown">남은 시간 {formatTime(countdown)}</p>
              <div className="code-box">
                <div className="qrcode">
                  <div className="dummy-qr">
                    <img src={qrcode} alt="qrcode" />
                  </div>
                </div>
                <div className="or">또는</div>
                <div className="code">7127630</div>
              </div>
              <div className="app-links">
                <a href="/">앱 다운로드</a>
                <a href="/">회원가입</a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 퀵 메뉴 */}
      <div className="quick-menu">
        <ul>
          <li className='qm1'><a href="/">고객지원</a></li>
          <li className='qm2'><a href="/">상담 · 문의</a></li>
          <li className='qm3'><a href="/">도난 · 분실</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarRight;
