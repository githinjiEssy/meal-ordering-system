import React from 'react';
import "./Testimonials.css";
import { BiSolidQuoteRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  return (
    <div className='testimonials__container'>
      <div className="testimonial__wrapper">
        <div className="testimonial__heading">
          <h1 className="testimonial__title">Testimonials</h1>
          <h3 className='testimonial__subtitle'>Hear from our happy customers who have savored every bite</h3>
        </div>

        <div className="testionial_content">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="testimonial__card swiper-slide">
                <div className="card__top">
                  <img src="" alt="" className='testiomnial__card-img'/>
                  <span class="testimonial__card-title">Cookie Notice</span>
                </div>
                <p class="testimonial__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam tenetur suscipit, eligendi, laborum ipsa facere consectetur vel corporis consequatur accusamus soluta ex ipsam mollitia voluptatum odit amet quas ab!
                </p>
                <div class="card__bottom">
                  <button class="pref">
                    Manage your preferences
                  </button>
                  <BiSolidQuoteRight className='testimonial__icon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial__card swiper-slide">
                <div className="card__top">
                  <img src="" alt="" className='testiomnial__card-img'/>
                  <span class="testimonial__card-title">Cookie Notice</span>
                </div>
                <p class="testimonial__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam tenetur suscipit, eligendi, laborum ipsa facere consectetur vel corporis consequatur accusamus soluta ex ipsam mollitia voluptatum odit amet quas ab!
                </p>
                <div class="card__bottom">
                  <button class="pref">
                    Manage your preferences
                  </button>
                  <BiSolidQuoteRight className='testimonial__icon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial__card swiper-slide">
                <div className="card__top">
                  <img src="" alt="" className='testiomnial__card-img'/>
                  <span class="testimonial__card-title">Cookie Notice</span>
                </div>
                <p class="testimonial__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam tenetur suscipit, eligendi, laborum ipsa facere consectetur vel corporis consequatur accusamus soluta ex ipsam mollitia voluptatum odit amet quas ab!
                </p>
                <div class="card__bottom">
                  <button class="pref">
                    Manage your preferences
                  </button>
                  <BiSolidQuoteRight className='testimonial__icon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial__card swiper-slide">
                <div className="card__top">
                  <img src="" alt="" className='testiomnial__card-img'/>
                  <span class="testimonial__card-title">Cookie Notice</span>
                </div>
                <p class="testimonial__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam tenetur suscipit, eligendi, laborum ipsa facere consectetur vel corporis consequatur accusamus soluta ex ipsam mollitia voluptatum odit amet quas ab!
                </p>
                <div class="card__bottom">
                  <button class="pref">
                    Manage your preferences
                  </button>
                  <BiSolidQuoteRight className='testimonial__icon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial__card swiper-slide">
                <div className="card__top">
                  <img src="" alt="" className='testiomnial__card-img'/>
                  <span class="testimonial__card-title">Cookie Notice</span>
                </div>
                <p class="testimonial__card-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam tenetur suscipit, eligendi, laborum ipsa facere consectetur vel corporis consequatur accusamus soluta ex ipsam mollitia voluptatum odit amet quas ab!
                </p>
                <div class="card__bottom">
                  <button class="pref">
                    Manage your preferences
                  </button>
                  <BiSolidQuoteRight className='testimonial__icon'/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonials