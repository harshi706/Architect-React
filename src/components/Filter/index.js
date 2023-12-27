import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { links } from "../../assets/images-links";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import backarrow from "../../assets/icon/backarrow.svg";
import rightarrow from "../../assets/icon/backarrowRevarce.svg";
import filter from "../../assets/icon/filter.svg";
import choserightfloor from "../../assets/icon/choserightfloor.svg";
import Collections from "../../Dropitems/Collections";
import Styles from "../../Dropitems/Styles";
import Colours from "../../Dropitems/Colours";
import Rooms from "../../Dropitems/Rooms";
import Featured from "../../Dropitems/Featured";

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  const handleDropdownClick = (event, idx) => {
    event.stopPropagation();
    if (activeDropdown === idx) {
      setActiveDropdown(null);
    } else {
      setSelectedFilter(idx);
      setActiveDropdown(idx);
    }
  };

  const slide = (shift) => {
    const targetScroll = scrl.current.scrollLeft + shift;

    scrl.current.scrollTo({
      left: targetScroll,
      behavior: "smooth", // Use smooth scrolling
    });

    setScrollX(targetScroll);
  };

  return (
    <header
      className={`absolute top-16 w-full  filter-array transition-all ease-in-out duration-300  z-[20] ${
        isScrolled ? "bg-white" : "bg-white"
      } `}
    >
      <div className="filter" style={{ marginLeft: "0px" }}>
        <div className="Filter-array" ref={scrl}>
          <div
            className={` slider_lr_container arrow-left  ${
              scrollX === 0 ? "hidden" : ""
            }`}
          >
            <img
              src={backarrow}
              alt=""
              className="riht-arrow-sty"
              onClick={() => slide(-250)}
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
            />
          </div>
          {links.map((value, idx) => (
            <div
              key={idx}
              className={`Filter-array-element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ent ${
                idx === selectedFilter ? "selected-array-element" : ""
              }`}
              onClick={(event) => handleDropdownClick(event, idx)}
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* {value && (
                <img
                  src={value.imgSrc}
                  alt="NA"
                  className="Filter-array-element-img"
                />
              )} */}
              {value && (
                <img
                  src={choserightfloor}
                  alt="NA"
                  className={` relative rounded-full sm:w-[40px] w-[40px] sm:h-[40px] h-[40px] sm:p-2 p-2 mx-2 sm:bg-white bg-gray-100 whitespace-nowrap  top-0  flex items-center justify-center 
                  
                  ${idx === 1 ? "sm:hidden block" : "hidden"}
                  
                  `}
                />
              )}
              {value && (
                <p
                  className={` sm:text-base text-sm Filter-array-element-lebel sm:block rounded-full flex items-center justify-center mx-2 sm:bg-white bg-gray-100 whitespace-nowrap ${
                    value.label === "Find Floor" ? "hidden" : "block"
                  }
  ${value.label === "Sport & Gyn Flooring" ? " w-44 h-8" : "w-28 h-8"}
  `}
                >
                  {value.label}
                </p>
              )}
              {/* {value && (
                <p className="Filter-array-element-lebel">{value.label}</p>
              )} */}

              {activeDropdown === idx && (
                <div
                  className="absolute dropdown-content top-7 left-0 mt-10 w-full bg-white shadow-md flex flex-col
                 transition-all ease-linear duration-2000 
                  "
                  onClick={(event) => event.stopPropagation()} // Prevent clicks inside the dropdown from closing it
                >
                  <div className="px-[50px] my-5">
                    <div className="filter_container flex gap-32">
                      <div className="grid grid-cols-6">
                        <div className="col-span-2">
                          <Featured />
                        </div>
                        <div className="col-span-1 ml-[-40px]">
                          <Collections />
                        </div>
                        <div className="col-span-1">
                          <Styles />
                        </div>
                        <div className="col-span-1">
                          <Colours />
                        </div>
                        <div className="col-span-1">
                          <Rooms />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="slider_lr_container arrow-right-filter">
            <img
              src={rightarrow}
              alt=""
              className="riht-arrow-sty"
              onClick={() => slide(+250)}
              style={{ overflowX: "auto", scrollBehavior: "smooth" }}
            />
          </div>
        </div>
        <div className="after-arrow sm:block hidden">
          <div className="at h-[40px]">
            <img src={filter} alt="" className="seachbar-div2-icon" />
            Filters
          </div>
          <Link to="/magazine">
            <div className="at">
              {" "}
              <img
                src={choserightfloor}
                alt=""
                className="seachbar-div2-icon"
              />{" "}
              Find the Right Floor
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Filter;
