import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../../assets/scss/components/_slider.scss';

import banner1 from '../../assets/img/mainbanner1-1.jpg';
import banner2 from '../../assets/img/mainbanner1-2.jpg';
import banner3 from '../../assets/img/mainbanner1-3.jpg';

const slides = [
  {
    img: banner1,
    title: '넥슨 현대카드 출시!',
    desc: '던전앤파이터와 함께 하는 특별한 카드 혜택',
  },
  {
    img: banner2,
    title: '현대카드 라이브러리',
    desc: '당신의 생각을 확장시켜줄 공간',
  },
  {
    img: banner3,
    title: 'M포인트 혜택',
    desc: '매일 누리는 포인트 라이프',
  },
];

function MainSlider() {
  return (
    <section className="main-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000 }}
        effect="fade"
        speed={1000}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide" style={{ backgroundImage: `url(${slide.img})` }}>
              <div className="overlay" />
              <div className="text-box">
                <h2 className="fade-up">{slide.title}</h2>
                <p className="fade-up" style={{ transitionDelay: '0.2s' }}>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MainSlider;
