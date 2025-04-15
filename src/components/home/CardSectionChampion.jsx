// components/home/CardSectionChampion.jsx
import React from 'react';
import { championCards } from '../../constants/cards';

const CardSectionChampion = () => {
  return (
    <section  className="card-section type01">
      <div className="card-section__inner">
        {/* 왼쪽 텍스트 */}
        <div className="card-section__text">
          <h2>Champion<br />Brands</h2>
          <p>최고의 브랜드와 콜라보한<br />또 하나의 현대카드</p>
          <a href="/" className="more-link">전체보기 &gt;</a>
        </div>

        {/* 카드 리스트 */}
        <div className="card-section__grid">
          {championCards.map((card, idx) => (
            <div key={idx} className="card-item">
              <a href={card.link}>
                <div className="card-img">
                  <img src={card.image} alt={card.name} />
                </div>
                <p className="card-name">{card.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSectionChampion;
