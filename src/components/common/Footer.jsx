import React from 'react';
import '../../assets/scss/layout/_footer.scss';

import logoBSI from '../../assets/img/logo_com_img_bsi.png';
import logoWA from '../../assets/img/logo_com_img_wa.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h4>고객센터</h4>
          <ul>
            <li>1577-6000</li>
            <li>카드신청 1577-0100</li>
            <li>금융신청 1577-6100</li>
            <li>도난분실신고 1577-6200</li>
            <li>점자카드신청 1566-5630</li>
            <li>해외 82-2-3015-9000</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>회사소개</h4>
          <ul>
            <li><a href="/">회사소개(한글 · ENG)</a></li>
            <li><a href="/">영업점 안내</a></li>
            <li><a href="/">개인정보 처리방침</a></li>
            <li><a href="/">고객관리안내</a></li>
            <li><a href="/">이용약관</a></li>
            <li><a href="/">윤리경영</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>&nbsp;</h4>
          <ul>
            <li><a href="/">업무위탁현황</a></li>
            <li><a href="/">인재모집</a></li>
            <li><a href="/">현대카드 SNS·패밀리·그룹사</a></li>
          </ul>
        </div>
        <div className="footer-section last">
          <h4>
            <span>개인</span>
            <span>법인</span>
            <span>가맹점</span>
          </h4>
          <p>서울시 영등포구 의사당대로 3 현대카드빌딩 1관</p>
          <p>사업자 등록번호 213-86-15419</p>
          <p>© Hyundai Card Co., Ltd.</p>
          <div className="footer-cert">
            <img src={logoBSI} alt="웹 접근성 인증" />
            <img src={logoWA} alt="ISMS 인증" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
