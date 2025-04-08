// src/components/common/ConsumerInfo.jsx
import React from 'react';
import '../../assets/scss/components/_consumerInfo.scss';

const links = [
  { label: '금융소비자보호포털', href: '#' },
  { label: '상품공시실', href: '#' },
  { label: '전자민원접수', href: '#' },
  { label: '보호금융상품등록부', href: '#' },
  { label: '내부자제보', href: '#' },
];

const ConsumerInfo = () => {
  return (
    <div className="consumer-info">
      <h4 className="title">소비자 정보 안내</h4>
      <ul className="link-list">
        {links.map((item, i) => (
          <li key={i}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsumerInfo;
