import Card from "./card";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopUp from "../Reviews/PopUp";
import "./styles.css";
import back from '../../assets/back.png'
import right from '../../assets/right.png';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import {
<<<<<<< HEAD
    Pagination,
    Scrollbar,
    Mousewheel,
    FreeMode,
=======
  Pagination,

  Scrollbar,
  Mousewheel,
  FreeMode,
>>>>>>> 2e2686bcef086057e46365f2f50deb436ebab309
} from "swiper/modules";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { selectRecommendedProduct } from "../../Features/Slices/recommendationSlice";
import { CardData } from "../../Features/Slices/FIrstCardSlice";
const Trending = () => {

    const [swiperRef, setSwiperRef] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
<<<<<<< HEAD
    const handleImageClick = () => {
        setPopupVisible(true);
    };
    const swiperUseref = useRef(null);
=======
    // const handleImageClick = () => {
    //   setPopupVisible(true);
    // };
    //   const swiperUseref = useRef(null);
>>>>>>> 2e2686bcef086057e46365f2f50deb436ebab309
    const swiperOptions2 = {
        slidesPerView: 4.08,
        centeredSlides: false,
        spaceBetween: 1,
        modules: [Pagination, Scrollbar, Mousewheel, FreeMode],
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
    // const swiper2Ref = useRef(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);
    const [trendingData, setTrendingData] = useState([]);
    const trendingSelect = useSelector(CardData);
    useEffect(() => {
        setTrendingData(trendingSelect);
    }, [trendingSelect]);
    const recommendedProducts = useSelector(selectRecommendedProduct);
    const recommendedProductsDataFromLocalStorage = JSON.parse(
<<<<<<< HEAD
        localStorage.getItem("recommendedProducts")
    );
=======
      localStorage.getItem("recommendedProducts")
    );
  
    useEffect(() => {
      if (recommendedProductsDataFromLocalStorage !== recommendedProducts) {
        localStorage.setItem(
          "recommendedProducts",
          JSON.stringify(recommendedProducts)
        );
      }
    }, [recommendedProducts]);
  
    function filterProductsByCategory(products, category) {
      return products.filter((product) => product.category === category);
    }
  
    // const wallpaperProducts = filterProductsByCategory(
    //   recommendedProductsDataFromLocalStorage?.products || [],
    //   "Wallpaper"
    // );
>>>>>>> 2e2686bcef086057e46365f2f50deb436ebab309

    useEffect(() => {
        if (recommendedProductsDataFromLocalStorage !== recommendedProducts) {
            localStorage.setItem(
                "recommendedProducts",
                JSON.stringify(recommendedProducts)
            );
        }
    }, [recommendedProducts]);

    function filterProductsByCategory(products, category) {
        return products.filter((product) => product.category === category);
    }

    const wallpaperProducts = filterProductsByCategory(
        recommendedProductsDataFromLocalStorage?.products || [],
        "Wallpaper"
    );

    return (
        <div>
            <div className="pt-12  mb-20  bg-white sm:px-[50px] px-[20px]">
                <div className="mb-2 w-full flex justify-between items-center">
                    <h2 className="text-bold text-2xl font-serif">
                        {trendingData ? "Trending Products" : "Trending Product"}
                    </h2>
                    <div className="Slidenav flex  bg-white text-2xl cursor-pointer  text-white rounded-full gap-2">
                        <div
                            onClick={() => swiper1Ref.current.swiper.slidePrev()}
                            className="custom-prev-button  rounded-full  hover:bg-400 hover:scale-110 hover:text-slate-100"
                        >
                            <img className="w-8 h-8" src={back} />
                        </div>
                        <div
                            onClick={() => swiper1Ref.current.swiper.slideNext()}
                            className="custom-next-button  rounded-full hover:bg-400 hover:scale-110 hover:text-slate-100"
                        >
                            <img className="w-7 h-9" src={right} />
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
                    freeMode={{
                        enabled: false,
                        sticky: true,
                    }}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    slideNextClass="custom-next-button"
                    slidePrevClass="custom-prev-button"
                    onSwiper={setSwiperRef}
                    className="px-10"
                >
                    {true ? (
                        <SwiperSlide>
                            <div className="flex">""</div>
                        </SwiperSlide>
                    ) : (
                        trendingData.map((product, idx) => {
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
                                            cssClass={"card1flex"}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Trending
