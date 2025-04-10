import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../../assets/scss/components/_slider.scss';
import sliderData from '../../constants/sliderData';

const chunkSlides = (slides, size) => {
  const chunked = [];
  for (let i = 0; i < slides.length; i += size) {
    chunked.push(slides.slice(i, i + size));
  }
  return chunked;
};

const HeroSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  const handlePlayPause = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    if (isPlaying) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  const groupedSlides = chunkSlides(sliderData, 3);

  return (
    <section className="hero-slider-grouped">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.custom-pagination' 
        }}
        navigation
        className="hero-swiper-grouped"
        ref={swiperRef}
      >
        {groupedSlides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="slide-group">
              {group.map((slide, idx) => (
                <div className="banner-card" key={idx}>
                  <img src={slide.img} alt={slide.alt} />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="slider-controls">
        <div className="custom-pagination"></div> 
        <button onClick={handlePlayPause} className={`play-pause-btn ${isPlaying ? 'stop' : 'play'}`}>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
