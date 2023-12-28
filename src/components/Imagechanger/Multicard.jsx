import React, { useRef } from "react";
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

const Multicard = () => {
  const swiper1Ref = useRef(null);

  return (
    <div>
      <div className="bg-zinc-50 rounded-lg h-100 sm:px-[50px] px-[20px] overflow-x-auto">
        <div className="sm:text-5xl text-2xl font-bold w-full font-sans">
          Why Ayatrio so innovative
          <br />
          for home furnishing.
        </div>
        <Swiper
          ref={swiper1Ref}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          // slidesPerView={3}
          navigation={{ clickable: true }}
          // navigation={{
          //   nextEl: ".swiper-button-prev",
          //   prevEl: ".swiper-button-next",
          // }}

          draggable={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ "--swiper-navigation-size": "24px" }}
          breakpoints={{
            450: {
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
          <SwiperSlide>
            <div className=" relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px  h-auto ">
              <div className="mt-8 ml-6 ">
                <CiDeliveryTruck size={52} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Get flexible delivery and easy pickup.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Choose two-hour delivery from an Apple Store, free delivery, or
                easy pickup options.
              </div>
              <br />
              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px h-auto ">
              <div className="mt-8 ml-6 mr-12">
                <IoChatbubblesOutline size={46} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Shop with a Specialist over video.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Choose your next Mac in a guided, one-way video session with our experts analyzer
              </div>
              <br />
              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px h-auto ">
              <div className="mt-8 ml-6 mr-12">
                <IoMdContacts size={48} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Get to know your new Mac.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Learn how to get the most out of your new Mac with a free
                one-on-one Personal Session.
              </div>
              <br />
              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative bg-white rounded-xl sm:w-[100%] w-[80vw] sm:h-300px h-auto">
              <div className="mt-8 ml-6 mr-12">
                <MdMenuBook size={44} />
              </div>
              <h2 className="text-2xl font-bold ml-6 mr-12">
                Get flexible delivery and easy pickup.
              </h2>
              <div className="mt-2 ml-6 mr-12 mb-12">
                Learn how to get the most out of your new Mac with a free
                one-on-one Personal Session.
              </div>
              <br />
              <div className="absolute bottom-1 right-4 mb-8">
                <IoIosAddCircle size={34} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Multicard;
