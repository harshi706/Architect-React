import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosAddCircle, IoMdContacts } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaLinkedin } from "react-icons/fa";
import linkdln from "./linkdln.jpg";

const ProfileContent = () => {
  return (
    <div>
      <div className="transparent rounded-lg h-100 pb-8">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          // slidesPerView={3}
          navigation={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ "--swiper-navigation-size": "24px" }}
          breakpoints={
            {
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }
          }
        >
          <SwiperSlide>
            <div>
              <div class="bg-black rounded-full h-44 w-44 mb-6 mt-32 ml-28"></div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold ml-24">Rajat Agrawal</div> &nbsp;
                <FaLinkedin
                  size={24}
                  style={{ color: "#0284c7" }}
                  className=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="bg-black rounded-full h-44 w-44 mb-6 mt-32 ml-16"></div>
              <div class="flex justify-center">
                <div class="text-2xl font-bold ml-4">Rajat Agrawal</div>
                <FaLinkedin
                  size={24}
                  className=" mt-1 ml-1"
                  style={{ color: "#0284c7" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="bg-black rounded-full h-44 w-44 mb-6 mt-32 ml-1"></div>
              <div class="flex justify-center">
                <div class="text-2xl font-bold ml-[-112px]">Rajat Agrawal</div>
                <FaLinkedin
                  size={24}
                  className=" mt-1 ml-1"
                  style={{ color: "#0284c7" }}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div class="bg-black rounded-full h-44 w-44 mb-6 mt-32 ml-[-48px]"></div>
              <div class="flex justify-center">
                <div class="text-2xl font-bold ml-[-196px]">Rajat Agrawal</div>
                <FaLinkedin
                  size={24}
                  className=" mt-1 ml-1"
                  style={{ color: "#0284c7" }}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProfileContent;
