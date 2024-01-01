// import Card from "./card";
// import { list } from "../../assets/cards-list";
import Offer from "../../assets/salesoffer.jpg";
import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import PopUp from "../Reviews/PopUp";
import "./styles.css";
import MainSlider from "../MainSlider/MainSlider";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import {
  Pagination,
  Scrollbar,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import "react-loading-skeleton/dist/skeleton.css";
import Imagechanger from "../Imagechanger/Imagechanger";
// import Skeleton from "react-loading-skeleton";
// import Skeletoncard from "../Skeleton/Skeletoncard";
import { useSelector } from "react-redux";
import { selectRecommendedProduct } from "../../Features/Slices/recommendationSlice";
// import Doublecard from "../Doublecard/Doublecard";
import Multicard from "../Imagechanger/Multicard";
import Footer from "../Footer/Footer";
import Tabs from "./Tabs";
import Profile from "./Profile";
import Image from "../Imagechanger/Image";
import Phone from "./Phone";
import DoubleComp from "./DoubleComp";
import { CardData } from "../../Features/Slices/FIrstCardSlice";
// import { selectSliderData } from "../../Features/Slices/sliderSlice";
import { useMemo } from "react";
import Trending from "./Trending";
import Flooring from "./Flooring";
import Blinds from "./Blinds";
import Curtains from "./Curtains";
import Sports from "./Sports";

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
    modules: [Pagination, Scrollbar, Mousewheel, FreeMode],
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
  const swiper2Ref = useRef(null);
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
  // const flooringProducts = filterProductsByCategory(
  //   recommendedProductsDataFromLocalStorage?.products || [],
  //   "Flooring"
  // );
  // const blindsProducts = filterProductsByCategory(
  //   recommendedProductsDataFromLocalStorage?.products || [],
  //   "Blinds"
  // );
  // const curtainsProducts = filterProductsByCategory(
  //   recommendedProductsDataFromLocalStorage?.products || [],
  //   "Curtains"
  // );
  // const sportsAndGymProducts = filterProductsByCategory(
  //   recommendedProductsDataFromLocalStorage?.products || [],
  //   "Sport & Gym Flooring"
  // );
//memo hook
const MemoizedMainSlider = useMemo(() => <MainSlider />, []);


  return (
    <div className="">
     {MemoizedMainSlider}
      <Trending/>
      <div className="h-40 my-10 sm:px-[50px] px-[50px]">
        <img
          src={Offer}
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      {/* 1st */}
      <Image />
      {/* <div className="w-full sm:h-[80vh] h-[160vh] m-1 ">
        <Imagechanger />
      </div> */}
      {/* <div className="w-full sm:h-[60vh] h-[100vh]  mt-2  mb-2  mx-1">
        <Doublecard />
      </div> */}
      {/* flooring */}
      <Flooring/>
      <Blinds/>
     <Curtains/>
      <Sports/>

      <Multicard />
      {/* removed for overlape sm:h-[80vh] */}
      <div className="w-full bg-zinc-100 px-12 py-20  h-auto">   
        <Imagechanger />
      </div>
      <DoubleComp />
      <Profile />
      <Tabs />
      <Phone />
      <Footer />
    </div>
  );
}
export default Cards;
