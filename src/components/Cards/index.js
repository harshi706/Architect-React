import Card from "./card";
import { list } from "../../assets/cards-list";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopUp from "../Reviews/PopUp";
import "./styles.css";
import MainSlider from "../MainSlider/MainSlider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel"
import "swiper/css/scrollbar";
import { Pagination, Navigation, Scrollbar ,Mousewheel,FreeMode} from "swiper/modules";
import 'react-loading-skeleton/dist/skeleton.css'
import Imagechanger from "../Imagechanger/Imagechanger";
import Skeleton from "react-loading-skeleton";
import Skeletoncard from "../Skeleton/Skeletoncard";
import { useSelector } from "react-redux";
import { selectRecommendedProduct } from "../../Features/Slices/recommendationSlice";
import Doublecard from "../Doublecard/Doublecard";
import Multicard from "../Imagechanger/Multicard";
import Footer from "../Footer/Footer";
import Tabs from './Tabs';


function Cards() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const [indexClicked, setClicked] = useState(-1);
  const swiperUseref = useRef(null);
  const swiperOptions = {
    slidesPerView: 3.2,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar,Mousewheel,FreeMode],
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,

  };
  const swiperOptions2 = {
    slidesPerView: 4.08,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar,Mousewheel,FreeMode],
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,

  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
const [isLoading,setLoading]=useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 2500)
}, [])



const recommendedProducts = useSelector(selectRecommendedProduct);
  const recommendedProductsDataFromLocalStorage = JSON.parse(localStorage.getItem("recommendedProducts"));

  useEffect(() => {
    // Update local storage only if recommendedProducts has changed
    if (recommendedProductsDataFromLocalStorage !== recommendedProducts) {
      localStorage.setItem("recommendedProducts", JSON.stringify(recommendedProducts));
    }
  }, [recommendedProducts]);

function filterProductsByCategory(products, category) {
  return products.filter(product => product.category === category);
}

const wallpaperProducts = filterProductsByCategory(recommendedProductsDataFromLocalStorage?.products || [], 'Wallpaper');
const flooringProducts = filterProductsByCategory(recommendedProductsDataFromLocalStorage?.products || [], 'Flooring');
const blindsProducts = filterProductsByCategory(recommendedProductsDataFromLocalStorage?.products || [], 'Blinds');
const curtainsProducts = filterProductsByCategory(recommendedProductsDataFromLocalStorage?.products || [], 'Curtains');
const sportsAndGymProducts = filterProductsByCategory(recommendedProductsDataFromLocalStorage?.products || [], 'Sport & Gym Flooring');

  console.log(wallpaperProducts);
  
  return (
    <div className="pb-20">
      <MainSlider />
      <div className="pt-12  mb-20  bg-white">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl font-serif ml-4">
            {wallpaperProducts ? "Wallpapers" : "Beach and Resort"}
          </h2>
          <div className="Slidenav flex  bg-white text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper1Ref.current.swiper.slidePrev()}
              className="custom-prev-button bg-slate-500   rounded-full  hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={() => swiper1Ref.current.swiper.slideNext()}
              className="custom-next-button bg-slate-500  rounded-full hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
        <PopUp isPopupVisible={isPopupVisible} closePopup={closePopup} />
        <Swiper
          ref={swiper1Ref}
          {...swiperOptions2}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          freeMode={
            {
              enabled: false,
              sticky: true,
            }
          }
          allowSlideNext={true}
          allowSlidePrev={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          onSwiper={setSwiperRef}

          className="px-10"
        >
          {isLoading ? (
             <SwiperSlide>
             <div className="flex">
              ""
             </div>
           </SwiperSlide>
        
          ) : (
            wallpaperProducts.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className="">
                  <div className="grid grid-cols-1 mt-2  h-full fade-in ">
                    <Card
                      title={product.productName}
                      // date={product.date}
                      price={product.price}
                      desc={product.subcategory}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      setPopupVisible={setPopupVisible}
                      cssClass={'card1flex'}

                    />
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
      <div className="w-full h-[80vh] m-1 ">
        <Imagechanger />
      </div>
      <div className="w-full h-[70vh] m-1 ">
        <Doublecard />
      </div>
      <div className="pt-12  mb-20  bg-white">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl font-serif ml-4">
          {flooringProducts ? "Flooring" : "Beach and Resort"}
          </h2>
          <div className="Slidenav flex bg-slate-700 text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper2Ref.current.swiper.slidePrev()}
              className="custom-prev-button hover:bg-400 hover:scale-110 hover:text-slate-100  "
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={() => swiper2Ref.current.swiper.slideNext()}
              className="custom-next-button hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        <Swiper
          scrollbar={{
            hide: false,

            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          allowSlidePrev={true}
          allowSlideNext={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          ref={swiper2Ref}
          onSwiper={setSwiperRef}
          {...swiperOptions}
          className="mySwiper  pl-5"
        >
          {isLoading ? (
             <SwiperSlide>
             <div className="flex">
              ""
             </div>
           </SwiperSlide>
        
          ) : (
            flooringProducts.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className=""> 
                  <div className="grid grid-cols-1 mt-2 h-full fade-in">
                    <Card
                      title={product.productName}
                      // date={product.date}
                      price={product.price}
                      desc={product.subcategory}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      setPopupVisible={setPopupVisible}
                      cssClass={'card1flex'}

                    />  
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>

    {
      blindsProducts && (
        <div className="pt-12  mb-20  bg-white">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl font-serif ml-4">
          {blindsProducts ? "Blinds" : "Beach and Resort"}
          </h2>
          <div className="Slidenav flex bg-slate-700 text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper2Ref.current.swiper.slidePrev()}
              className="custom-prev-button hover:bg-400 hover:scale-110 hover:text-slate-100  "
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={() => swiper2Ref.current.swiper.slideNext()}
              className="custom-next-button hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        <Swiper
          scrollbar={{
            hide: false,

            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          allowSlidePrev={true}
          allowSlideNext={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          ref={swiper2Ref}
          onSwiper={setSwiperRef}
          {...swiperOptions}
          className="mySwiper  pl-5"
        >
          {isLoading ? (
             <SwiperSlide>
             <div className="flex">
              ""
             </div>
           </SwiperSlide>
        
          ) : (
            blindsProducts.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className=""> 
                  <div className="grid grid-cols-1 mt-2 h-full fade-in">
                    <Card
                      title={product.productName}
                      // date={product.date}
                      price={product.price}
                      desc={product.subcategory}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      setPopupVisible={setPopupVisible}
                      cssClass={'card1flex'}

                    />  
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
      )
    }




{
      curtainsProducts && (
        <div className="pt-12  mb-20  bg-white">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl font-serif ml-4">
          {curtainsProducts ? "Curtains" : "Beach and Resort"}
          </h2>
          <div className="Slidenav flex bg-slate-700 text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper2Ref.current.swiper.slidePrev()}
              className="custom-prev-button hover:bg-400 hover:scale-110 hover:text-slate-100  "
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={() => swiper2Ref.current.swiper.slideNext()}
              className="custom-next-button hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        <Swiper
          scrollbar={{
            hide: false,

            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          allowSlidePrev={true}
          allowSlideNext={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          ref={swiper2Ref}
          onSwiper={setSwiperRef}
          {...swiperOptions}
          className="mySwiper  pl-5"
        >
          {isLoading ? (
             <SwiperSlide>
             <div className="flex">
              ""
             </div>
           </SwiperSlide>
        
          ) : (
            curtainsProducts.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className=""> 
                  <div className="grid grid-cols-1 mt-2 h-full fade-in">
                    <Card
                      title={product.productName}
                      // date={product.date}
                      price={product.price}
                      desc={product.subcategory}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      setPopupVisible={setPopupVisible}
                      cssClass={'card1flex'}

                    />  
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
      )
    }



{
      sportsAndGymProducts && (
        <div className="pt-12  mb-20  bg-white">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="text-bold text-2xl font-serif ml-4">
          {sportsAndGymProducts ? "Sports & Gym" : "Beach and Resort"}
          </h2>
          <div className="Slidenav flex bg-slate-700 text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper2Ref.current.swiper.slidePrev()}
              className="custom-prev-button hover:bg-400 hover:scale-110 hover:text-slate-100  "
            >
              <FaChevronLeft />
            </div>
            <div
              onClick={() => swiper2Ref.current.swiper.slideNext()}
              className="custom-next-button hover:bg-400 hover:scale-110 hover:text-slate-100"
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        <Swiper
          scrollbar={{
            hide: false,

            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          allowSlidePrev={true}
          allowSlideNext={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          ref={swiper2Ref}
          onSwiper={setSwiperRef}
          {...swiperOptions}
          className="mySwiper  pl-5"
        >
          {isLoading ? (
             <SwiperSlide>
             <div className="flex">
              ""
             </div>
           </SwiperSlide>
        
          ) : (
            sportsAndGymProducts.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className=""> 
                  <div className="grid grid-cols-1 mt-2 h-full fade-in">
                    <Card
                      title={product.productName}
                      // date={product.date}
                      price={product.price}
                      desc={product.subcategory}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      setPopupVisible={setPopupVisible}
                      cssClass={'card1flex'}

                    />  
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
      )
    }

      <Multicard/>
        <Tabs/>
        <Footer/>
    </div>
  );
}
export default Cards;
