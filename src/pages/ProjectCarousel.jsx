import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import mon_resto from '../assets/images/Mon-Resto.png'
import nyt_clone from '../assets/images/NYT-Clone.png'
import kanbanzen_client from '../assets/images/KanbanZen-Client.png'
import personal_website from '../assets/images/personal-website.png'
import ubike from '../assets/images/UBike.png'
import user_dummy from '../assets/images/user-dummy-API.png'



export default function ProjectCarousel({ textColor, hour2, projectRef }) {

  return (
    <div ref={projectRef} className='h-screen w-screen px-40 pt-32 pb-20' name='project'>
      <h1 className={`text-center text-5xl font-bold ${textColor}`}>PROJECTS</h1>
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
            <img src={mon_resto} onClick={() => window.open('https://github.com/Alif-Dzarif/Mon-Resto')} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nyt_clone} onClick={() => window.open('https://github.com/Alif-Dzarif/NYT-Clone')} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={kanbanzen_client} onClick={() => window.open('https://github.com/Alif-Dzarif/KanbanZen-Client')} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={personal_website} onClick={() => window.open('https://github.com/Alif-Dzarif/personal-website')} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ubike} onClick={() => window.open('https://github.com/UBike-rmt-38')} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={user_dummy} onClick={() => window.open('https://github.com/Alif-Dzarif/user-dummy-API')} alt="slide_image" />
          </SwiperSlide>


          <div className="slider-controler">
            <div className={`swiper-button-prev slider-arrow  ${hour2 < 6 || hour2 >= 18 ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </div>
            <div className={`swiper-button-next slider-arrow ${hour2 < 6 || hour2 >= 18 ? 'text-white' : 'text-black'}`}>
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}
