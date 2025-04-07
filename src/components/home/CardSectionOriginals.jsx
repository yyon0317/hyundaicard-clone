// components/home/CardSectionOriginals.jsx
import React from 'react';
import { originalCards } from '../../constants/cards';
import '../../assets/scss/components/_card-section.scss';

const CardSectionOriginals = () => {
  return (
    <section className="card-section">
      <div className="card-section__inner">
        {/* 왼쪽 텍스트 */}
        <div className="card-section__text">
          <h2>Hyundai<br />Originals</h2>
          <p>현대카드의 오리지널리티를 담은<br />진정한 현대카드</p>
          <a href="/" className="more-link">전체보기 &gt;</a>
        </div>

        {/* 카드 리스트 */}
        <div className="card-section__grid">
          {originalCards.map((card, idx) => (
            <div key={idx} className="card-item">
              <a href={card.link}>
                <div className="card-img">
                  <img src={card.image} alt={card.name} />
                {card.badge && <span className="card-badge">{card.badge}</span>}
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

export default CardSectionOriginals;