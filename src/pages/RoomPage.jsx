import React, { useEffect, useState,useRef } from "react";
import RoomPageHeader from "../components/Room/RoomPageHeader";
import {
  Pagination,
  Navigation,
  Scrollbar,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import "../components/Room/styles.css";
import RoomImageList from "../components/Room/RoomImageList";
import RoomInfo from "../components/Room/RoomInfo";
import Reviews from "../components/Room/Other/Reviews";
import Header from "../components/Header";
import ImageCaresoul from "../components/Room/imagecaresoul";
import Footer from "../components/Footer/Footer";
import Card from "../components/Room/Other/Card";
import Mobileswiper from "../components/Item/Mobileswiper";
import ItemCard from "../components/Item/ItemCard";
const RoomPage = () => {
  const [howMuchScrolled, setHowMuchScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHowMuchScrolled(window.scrollY);
      } else {
        setHowMuchScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [howMuchScrolled]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showFilter, setShowFilter] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [wallpaperProducts, setWallpaperProducts] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const swiperOptions3 = {
    slidesPerView: 1,
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
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setWallpaperProducts([
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          {
            productName: "Product 1",
            price: "$100",
            subcategory: "Category 1",
            images: "image_url_1.jpg",
            ratings: 4.5,
          },
          // Add more products as needed
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-rooms flex sm:block items-center ">
        {isFilterVisible && <Header />}
        <div className="sm:px-[50px] px-[20px] mt-[65px]">
          <div className="flex sm:flex-row flex-col">
            <div className="sm:basis-2/3 flex flex-col  sm:flex-grow">
              <RoomImageList />
              <ImageCaresoul />
              {/* <div className="sm:hidden flex">
                <Card/>
              </div> */}
              <RoomInfo />
            </div>
            <div className="sm:basis-1/3 flex flex-col  ">
              <div className="sm:sticky flex top-12 mb-16 ml-0">
                <Card />
              </div>
            </div>
          </div>
         
            <Reviews />
{/*           
            <Mobileswiper/> */}
           
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RoomPage;
