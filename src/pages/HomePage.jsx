import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import MobileSearchBar from "../components/MobileSearch/";
import Filter from "../components/Filter/";
import home from "../assets/icon/home.svg";
import search from "../assets/icon/search.svg";
import userprofile from "../assets/icon/profile.svg";
import ayatrio_store from "../assets/icon/ayatrio_store.svg";
import { useNavigate } from "react-router-dom";
// import Splashscreen from "../components/Splashscreen/Splashscreen";
import "./HomePage.css";
import PopUp from "../components/PopUp/PopUp";
// import { useDispatch, useSelector } from "react-redux";
// import {fetchSliderRequest,selectSliderData, selectSliderLoader} from "../Features/slider/sliderSlice";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Expandedbar from "../components/Header/Expandedbar";
import { selectSliderData, selectSliderLoader } from '../Features/Slices/sliderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CardData } from '../Features/Slices/FIrstCardSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const FirstCardData= useSelector(CardData);
  // useEffect(() => {
  //   dispatch({ type: "FETCH_FIRST_CARD_REQUEST" });
  //   dispatch({ type: "FETCH_SLIDER_VIEW_REQUEST" });
  // }
  // , [dispatch]);
  
  const loader = false
  const navigate = useNavigate();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // console.log(window.scrollY);
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isScrolled]);
  const handleLoginNav = () => {
    navigate("/login");
  };
  const handleProfileNav = () => {
    console.log("Profile");
    navigate("/profile");
  };
  // const onClose = () => {
  //   setSearchText("");
  // };

  const onClose=()=>{
    setIsSearchBarVisible(!isSearchBarVisible);
  }

  //2nd
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

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

  const popUp = localStorage.getItem("popUp");

  if (loader) {
    return (
      <div className="loader slider-container">
        <Oval
          height={100}
          width={100}
          color="#FF0000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="Creating your Ayatrio Experience"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <>
      <div
        className={`fade-in ${
          isFilterVisible ? "show-filter" : "hide-filter"
        } overflow-x-hidden`}
      >
        {popUp === "true" ? null : <PopUp />}
        {/* <Header /> */}
        {/* <MobileSearchBar /> */}
        
        {isFilterVisible && (
          <>
            <Header onSearchIconClick={handleSearchIconClick} />
            {isSearchBarVisible &&
            
             <Expandedbar
              // searchText={searchText} 
              onClose={onClose}  /> }
            <MobileSearchBar />
          </>
        )}
        <Filter />
        <Cards />
        {isFilterVisible && <div className="fixed-ayatrio-map">
          <button
            type="button"
            className="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex -bottom-3 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => navigate("/ayatrio-map")}
          >
            Near Ayotrio{" "}
            <img
              src={ayatrio_store}
              alt=""
              className="header-div-sStore-icon"
            />
          </button>
        </div>}
        {/* <div className="notch-buttons fixed z-50 py-2 bg-white w-full h-10  bottom-0 flex flex-row justify-evenly">
          <img src={home} alt="" className=" w-6 h-6" />
          
          <img
            src={search}
            alt=""
            className=" w-6 h-6"
            onClick={handleSearchIconClick}
          />
          <img src={userprofile} alt="" className=" w-6 h-6" />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
