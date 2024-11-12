import React from 'react';
import "./Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

function Testimonials() {
  return (
    <div className='testimonials__container'>
        <div className="testimonial__wrapper">
          <div className="testimonial-heading">
            <h1 className="testimonial-title">Testimonials</h1>
          </div>

          <div className="slider__container">
            <Swiper 
            slidesPreview={3} 
            spaceBetween={30} 
            freeMode={true} 
            pagination={{clickable: true,}} 
            module={[FreeMode, Pagination]} 
            className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Testimonials