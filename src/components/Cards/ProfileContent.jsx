import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import linkdln from './linkdln.jpg';
import './styles.css';

const ProfileContent = () => {
  const peopleData = [
    { name: 'Rajit1', image: linkdln },
    { name: 'Rajit2', image: linkdln },
    { name: 'Rajit3', image: linkdln },
    { name: 'Rajit4', image: linkdln },
  ];

  return (
    <div className='transparent rounded-lg h-100 pb-16'>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ '--swiper-navigation-size': '24px' }}
      >
        {peopleData.map((person, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="bg-black rounded-full h-40 w-40 mb-2 mt-32 ml-32"></div>
              <div className='flex justify-center'>
                <div className='text-2xl font-bold ml-20'>{person.name}</div>
                <a href='#'>
                  <img className='h-10 w-10' src={person.image} alt={`LinkedIn for ${person.name}`} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
      </Swiper>
    </div>
  );
};

export default ProfileContent;
