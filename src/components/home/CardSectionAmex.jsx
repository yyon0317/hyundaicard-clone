// components/home/CardSectionAmex.jsx
import React from 'react';
import { amexCards } from '../../constants/cards';

import tag_amex_livelife from '../../assets/img/tag_amex_livelife.svg';

const CardSectionAmex = () => {
  return (
    <section className="card-section type02">
      <div className="card-section__inner">
        {/* 왼쪽 텍스트 */}
        <div className="card-section__text">
          <h2>American<br />Express</h2>
          <img
            src={tag_amex_livelife}
            alt="Don't live life without it"
            className="amex-tag"
          />
          <a href="/" className="more-link">전체보기 &gt;</a>
        </div>

        {/* 카드 리스트 */}
        <div className="card-section__grid">
          {amexCards.map((card, idx) => (
            <div key={idx} className="card-item card-item-type3">
              <a href={card.link}>
                <div className="card-img">
                  <img src={card.image} alt={card.name} />
                </div>
              </a>
              <p className="card-name">
                {card.name.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSectionAmex;
