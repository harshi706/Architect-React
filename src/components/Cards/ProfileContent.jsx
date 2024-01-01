import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { IoIosAddCircle, IoMdContacts } from "react-icons/io";
// import { IoChatbubblesOutline } from "react-icons/io5";
// import { MdMenuBook } from "react-icons/md";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaLinkedin } from "react-icons/fa";
import linkdln from "./linkdln.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectProfileData } from "../../Features/Slices/profileSlice";

const ProfileContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_PROFILE_REQUEST", payload: "Profile" });
  }, []);
  let profileData = useSelector(selectProfileData);
  const peopleData = [
    { name: 'Rajit1', image: linkdln },
    { name: 'Rajit2', image: linkdln },
    { name: 'Rajit3', image: linkdln },
    { name: 'Rajit4', image: linkdln },
  ];
  const [peopleState, setPeopleState] = useState(peopleData);
  useEffect(() => {
    if (profileData) {
      setPeopleState(profileData);
    }
  }, []);
  return (
    <div className='transparent rounded-lg h-100 pb-8'>
    <Swiper
      spaceBetween={20}
      // slidesPerView={3}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
      style={{ '--swiper-navigation-size': '24px' }}
      breakpoints={{
            100: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}

    >
      {peopleData.map((person, index) => (
        <SwiperSlide key={index}>
          <div>
            <div className="bg-black rounded-full h-40 w-40 mb-2 sm:mt-32 mt-4 sm:ml-4 ml-20"></div>
            <div className='flex justify-center'>
              <div className='text-2xl font-bold '>{person.name}</div>
              <a href='#'>
                <img className='h-10 w-10' src={person.image} alt={`LinkedIn for ${person.name}`} />
              </a>
            </div>
          </div>
          <br/><br/><br/><br/>
        </SwiperSlide>
      ))}
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
    </Swiper>
  </div>
  );
};

export default ProfileContent;

// mb-6 mt-32 ml-28
//mb-6 mt-32 ml-16
//mb-6 mt-32 ml-1
//mb-6 mt-32 ml-[-48px]
