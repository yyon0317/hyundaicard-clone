import React, { useState } from 'react';
import '../../assets/scss/components/_topbanner.scss';

function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="top-banner">
        <div className="desc">
          넥슨 현대카드, 던전앤파이터 전용 플레이트 공개 기념 이벤트
        </div>
        <button className="btnClose" onClick={() => setIsVisible(false)}>X</button>
      </div>
    )
  );
}

export default TopBanner;

