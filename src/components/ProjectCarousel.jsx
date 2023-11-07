import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import slide__image1 from '../assets/images/Mon-Resto.png'
import slide__image2 from '../assets/images/NYT-Clone.png'
import slide__image3 from '../assets/images/KanbanZen-Client.png'


export default function ProjectCarousel() {
  return (
    <div className='h-screen w-screen border-b-2 border-white px-40 pt-32 pb-20' name='project'>
      <h1 className='text-center'>Projects</h1>
      <div className='flex items-center'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide__image1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide__image2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide__image3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide__image1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide__image2} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}
