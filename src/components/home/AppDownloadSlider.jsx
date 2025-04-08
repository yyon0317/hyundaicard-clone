import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/scss/components/_appDownloadSlider.scss';

import icon1 from '../../assets/img/icon_app1.png';
import icon2 from '../../assets/img/icon_app2.png';
import icon3 from '../../assets/img/icon_app3.png';

const slides = [
  {
    icon: icon1,
    text: '카드 생활의 모든 것을\n단 하나의 앱으로',
    link: '#',
  },
  {
    icon: icon2,
    text: '신용/체크카드\n발급부터 혜택까지',
    link: '#',
  },
  {
    icon: icon3,
    text: '간편한 소비관리\n똑똑한 가계부 기능',
    link: '#',
  },
];

const AppDownloadSlider = () => {
  return (
    <div className="app-download-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.link} className="slide-content">
              <img src={slide.icon} alt={`앱 배너 ${index + 1}`} />
              <div className="text">{slide.text}</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppDownloadSlider;
