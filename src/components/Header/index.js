import React, { useRef } from "react";
import "./styles.css";
import mainlogo from "../../assets/ayatriologo.png";
import adtocart from "../../assets/icon/adtocart.svg";
import liketocart from "../../assets/icon/like.svg";
import userprofile from "../../assets/icon/profile.svg";
import search from "../../assets/icon/search.svg";

import Menu from "./menu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Expandedbar from "./Expandedbar";
//import axios from "axios";
import { useDispatch } from "react-redux";
import { searchProductsRequest } from "../../Features/search/searchSlice";
import TopLoader from "../AddOn/TopLoader";
// import { faL } from "@fortawesome/free-solid-svg-icons";

function Header({ howMuchScrolled }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchEngine, SetSeacrhEngine] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProductsRequest(searchQuery));
  }, [dispatch, searchQuery]);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const handleLoginNav = () => {
    navigate("/login");
  };
  const handleProfileNav = () => {
    console.log("Profile");
    handleLinkClick("/profile");
  };
  const onClose = () => {
    setSearchQuery("");
    SetSeacrhEngine("");
  };
  const loginStatus = localStorage.getItem("Login");
  const [isLoading, setIsLoading] = useState(false);
  const handleLinkClick = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 1200);
  };

  const [isModalOPen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalClick = (event) => {
    event.stopPropagation();
  };
  const inpRef = useRef(null);
  return (
    <header
      className={`fixed w-full sm:bg-none  top-0 transition-all ease-in-out duration-300  z-[99999]
       ${isScrolled ? "bg-white" : "bg-white"} 
      ${howMuchScrolled > 20 ? "hidden" : ""}`}
    >
      {isLoading && <TopLoader />}
      {!searchQuery ? (
        <div className="navbar sm:px-[30px] px-[10px] py-0 flex justify-between items-center w-full ">
          <div className="left flex items-center sm:gap-5 gap-1 ">
            <div className="profile-menu font-bold p-[7px] hover:bg-slate-200 hover:rounded-full">
              <Menu />
            </div>
            <Link onClick={() => handleLinkClick("/virtualexperience/vrooms")}>
              <div className=" text-costom-co p-[7px] hover:bg-slate-200 hover:rounded-3xl whitespace-nowrap">
                Virtual Exprience{" "}
              </div>
            </Link>

            <div className=" text-costom-co p-[7px] hover:bg-slate-200 hover:rounded-3xl whitespace-nowrap">
              New Arivals
            </div>

            <div
              className="sm:hidden block  w-10 h-10 p-[7px]"
              onClick={handleModalOpen}
            >
              <img src={search} alt="" className="header-div-icon" />

              {isModalOPen && (
                <div className="modal-overlay z-[9999]  bg-white h-full w-full ">
                  <div className="modal" onClick={handleModalClick}>
                    <div className="flex flex-row gap-2 justify-evenly">
                      <div className="searchDiv  flex flex-col justify-between">
                        <div className="searchCon relative sm:w-[600px] w-[60vw] h-[40px]  bg-[#e5e5e5] rounded-xl ">
                          <input
                            ref={inpRef}
                            type="text"
                            placeholder="Search"
                            className="search-input  border px-4 h-full sm:w-full w-[60vw] ml-8 rounded-xl focus:outline-none"
                            value={searchEngine}
                            onChange={(e) => SetSeacrhEngine(e.target.value)}
                          />
                          <img
                            src={search}
                            alt=""
                            className="  w-5 mx-1 my-1.5 top-[18%] left-[1%]  absolute z-10"
                          />
                        </div>
                        <div className="dropdown flex flex-col mb-8 gap-4 ">
                          <div className="head text-slate-400">
                            <h2>Popular Searches</h2>
                          </div>
                          <div className="items">
                            <div className="dropdown-item font-bold font-sans ">
                              Products
                            </div>
                            <div className="dropdown-item font-bold font-sans ">
                              Rooms
                            </div>
                            <div className="dropdown-item font-bold font-sans ">
                              Magazine
                            </div>
                            <div className="dropdown-item font-bold font-sans ">
                              Virtual Experience
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={handleModalClose}
                          className="border rounded-3xl p-1"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* for only mobole search */}

          <div className="mainlogo">
            <Link onClick={() => handleLinkClick("/home")}>
              <img src={mainlogo} alt="logo" className="sm:w-48 w-52 m-2" />
            </Link>
          </div>
          <div className="right flex items-center sm:gap-4 gap-2">
            {/* map-icon */}

            <div className=" searchbar sm:block hidden pt-4 w-40 h-10 items-right justify-end ">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                placeholder="Search"
                className="searchTerm sm:block hidden relative font-semibold placeholder-gray-400 w-[13rem] h-10 bg-slate-100 p-4 rounded-full active:border-none focus:outline-none hover:bg-slate-200 hover:rounded-3xl"
              />
              <img
                src={search}
                alt=""
                className="seachbar-div2-icon absolute z-10"
              />
            </div>
            <div className="sm:block hidden w-10 h-10 p-[7px] hover:bg-slate-200 hover:rounded-full cursor-pointer">
              <img src={liketocart} alt="" className="header-div-icon" />
              <div className="cart-notification">12</div>
            </div>

            <div
              className="w-10 h-10 p-[7px] hover:bg-slate-200 hover:rounded-full cursor-pointer"
              onClick={() => handleLinkClick("/cart")}
            >
              <img src={adtocart} alt="" className="header-div-icon" />
              <div className="cart-notification">3</div>
            </div>
            {loginStatus === "true" ? (
              <div
                className="pro flex p-[7px] hover:bg-slate-200 hover:rounded-full whitespace-nowrap "
                onClick={handleProfileNav}
              >
                <img src={userprofile} alt="" className="header-div-icon" />
              </div>
            ) : (
              <img
                src={userprofile}
                onClick={handleLoginNav}
                alt=""
                className="header-div-icon"
              />
            )}
          </div>
        </div>
      ) : (
        <Expandedbar
          searchQuery={searchQuery}
          onClose={onClose}
          onSearch={handleSearchChange}
        />
      )}
    </header>
  );
}
export default Header;
