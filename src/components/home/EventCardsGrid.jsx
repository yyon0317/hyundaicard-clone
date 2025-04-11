// components/home/EventCardsGrid.jsx
import React from 'react';
import { eventCards } from '../../constants/cards';

const EventCardsGrid = () => {
  return (
    <section className="card-section">
      <div className="card-section__inner">
        <div className="card-section__grid">
          {eventCards.map((card, idx) => (
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

export default EventCardsGrid;