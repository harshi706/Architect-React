import React, { useState, useEffect, useRef } from "react";
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


import ItemCard from "../components/Item/ItemCard";
import Mobileswiper from "../components/Item/Mobileswiper";

const ItemPage = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [wallpaperProducts, setWallpaperProducts] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const swiperOptions = {
    slidesPerView: 3,
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
    slidesPerView: 4,
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

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowFilter(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [showHeader, setShowHeader] = useState(true);

  // // This hook will update the showHeader state based on scroll position
  // useScrollPosition(({ prevPos, currPos }) => {
  //   setShowHeader(currPos.y > prevPos.y || currPos.y < 100);
  // });

  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowHeader(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      setPrevScrollPos(currentScrollPos);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Dependency on prevScrollPos to update the effect when it changes
  // const [showHeader, setShowHeader] = useState(true);

  // useEffect(() => {
  //   // Function to handle scroll event
  //   const handleScroll = () => {
  //     setShowHeader(window.scrollY < 100);
  //   };

  //   // Add event listener when component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove event listener when component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // Empty dependency array ensures that the effect runs only once during mount and unmount

  return (
    <>

<div className="swiper1 mt-10 sm:block hidden">
          <Swiper
            {...swiperOptions}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {isLoading ? (
              <SwiperSlide>
                <div className="flex">Loading...</div>
              </SwiperSlide>
            ) : (
              wallpaperProducts.map((product, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-1 mt-2 h-full fade-in">
                    <ItemCard
                      title={product.productName}
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
              ))
            )}
          </Swiper>
        </div>

    </>
  );
};

export default ItemPage;
