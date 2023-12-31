import React, { useState, useEffect, useRef } from "react";
import bengta from "../../assets/product/bengta-block-out-curtain-1-length-light-grey__0977118_pe813406_s5.avif";
import lenda from "../../assets/product/lenda-curtains-with-tie-backs-1-pair-off-white__1136111_pe879297_s5.avif";
import lill from "../../assets/product/lill-net-curtains-1-pair-white__0887768_pe569661_s5.avif";
import netvol from "../../assets/product/net-volie-curtains-700221.avif";
import "./styles.css";
import { IoMdClose } from "react-icons/io";
import adtocart from "../../assets/icon/adtocart.svg";
import liketocart from "../../assets/icon/like.svg";
import arrow from "../../assets/icon/backarrow.svg";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import filter from "../../assets/icon/filter.svg";
import choserightfloor from "../../assets/icon/choserightfloor.svg";
const Tabs = () => {
  const [circle1Hovered, setCircle1Hovered] = useState(false);
  const [circle2Hovered, setCircle2Hovered] = useState(false);

  const curtainImage = [
    {
      id: 1,
      image: bengta,
      title: "SY",
      detail: "Iron-on hemming strip",
      price: 139,
      count: 59,
    },
    {
      id: 2,
      image: lenda,
      title: "KRONILL",
      detail: "Heading tape, 8.5x310 cm (3x122)",
      price: 149,
      count: 13,
    },

    {
      id: 3,
      image: lill,
      title: "LILL",
      detail: "Net curtains, 1 pair, 280x250 cm (110x98)",
      price: 399,
      count: 122,
    },
    {
      id: 4,
      image: lill,
      title: "ALVINE SPETS",
      detail: "Net curtains, 1 pair, 145x250 cm (57x98)",
      price: 599,
      count: 94,
    },
  ];
  const srtarr = [
    {
      id: 1,
      name: "Best match",
      value: "1",
    },
    {
      id: 2,
      name: "Price: low to high",
      value: "2",
    },
    {
      id: 3,
      name: "Price: high to low",
      value: "3",
    },
    {
      id: 4,
      name: "Newest",
      value: "4",
    },
    {
      id: 5,
      name: "Customer rating",
      value: "5",
    },
    {
      id: 6,
      name: "Name",
      value: "6",
    },
    {
      id: 7,
      name: "Most popular",
      value: "7",
    },
    {
      id: 8,
      name: "Width",
      value: "8",
    },
    {
      id: 9,
      name: "Length",
      value: "9",
    },
  ];
  const wdharr = [
    {
      id: 1,
      name: "0-119 cm",
      value: "2",
    },
    {
      id: 2,
      name: "120 -129 cm",
      value: "2",
    },
    {
      id: 3,
      name: "130-139",
      value: "3",
    },
    {
      id: 4,
      name: "140-149",
      value: "82",
    },
    {
      id: 5,
      name: "150+",
      value: "6",
    },
  ];
  const htarr = [
    {
      id: 1,
      name: "100 cm",
      value: "1",
    },
    {
      id: 2,
      name: "150 cm",
      value: "17",
    },
    {
      id: 3,
      name: "250 cm",
      value: "76",
    },
    {
      id: 4,
      name: "310 cm",
      value: "1",
    },
    {
      id: 5,
      name: "1000 cm",
      value: "1",
    },
  ];
  const colorarr = [
    {
      id: 1,
      class:
        "rounded-full bg-white border border-slate-400 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "White",
      value: "36",
    },
    {
      id: 2,
      class:
        "rounded-full bg-gray-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Grey",
      value: "22",
    },
    {
      id: 3,
      class:
        "rounded-full bg-yellow-100 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Beige",
      value: "17",
    },
    {
      id: 4,
      class:
        "rounded-full bg-blue-800 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Blue",
      value: "16",
    },
    {
      id: 5,
      class:
        "rounded-full bg-green-800 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Green",
      value: "10",
    },
    {
      id: 6,
      class:
        "rounded-full bg-red-600 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Red",
      value: "8",
    },
    {
      id: 7,
      class:
        "rounded-full bg-white hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 border border-slate-300 w-14 h-14",
      name: "Multicolor",
      value: "4",
    },
    {
      id: 8,
      class:
        "rounded-full bg-yellow-900 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Brown",
      value: "3",
    },
    {
      id: 9,
      class:
        "rounded-full bg-black hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Black",
      value: "3",
    },
    {
      id: 10,
      class:
        "rounded-full bg-yellow-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Yellow",
      value: "2",
    },
    {
      id: 11,
      class:
        "rounded-full bg-emerald-300 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2 w-14 h-14",
      name: "Turquiose",
      value: "2",
    },
    {
      id: 12,
      class:
        "rounded-full bg-orange-400 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2  w-14 h-14",
      name: "Orange",
      value: "36",
    },
    {
      id: 13,
      class:
        "rounded-full bg-red-200 hover:outline hover:outline-1 hover:outline-slate-300 hover:outline-offset-2  w-14 h-14",
      name: "Pink",
      value: "1",
    },
  ];
  const categoryarr = [
    {
      id: 1,
      name: "Heading tape",
      value: "39",
    },
    {
      id: 2,
      name: "Slot heading",
      value: "32",
    },
    {
      id: 3,
      name: "Tab heading",
      value: "13",
    },
    {
      id: 4,
      name: "Eyelet",
      value: "10",
    },
    {
      id: 5,
      name: "Curtains, 1 pair",
      value: "4",
    },
    {
      id: 6,
      name: "Panel curtains",
      value: "1",
    },
  ];

  const typearr = [
    {
      id: 1,
      name: "Heading tape",
      value: "39",
    },
    {
      id: 2,
      name: "Slot heading",
      value: "32",
    },
    {
      id: 3,
      name: "Tab heading",
      value: "13",
    },
    {
      id: 4,
      name: "Eyelet",
      value: "10",
    },
    {
      id: 5,
      name: "Curtains, 1 pair",
      value: "4",
    },
  ];

  const typeContent = [
    {
      id: 1,
      name: "Sheer curtains, 1 pair",
      value: "3",
    },
    {
      id: 2,
      name: "Block-out curtains, 1 pair",
      value: "1",
    },
    {
      id: 3,
      name: "Curtain",
      value: "1",
    },
    {
      id: 4,
      name: "Iron-on hemming strip",
      value: "1",
    },
    {
      id: 5,
      name: "Sound absorbing panel",
      value: "1",
    },
    {
      id: 6,
      name: "Tie heading",
      value: "0",
    },
  ];

  const circled = [
    {
      top: 50,
      left: 68,
      productTitle: "Nike Dri-FIT One Women's Tank Top",
      productCategory: "Athletic Tank Top",
      price: 1900,
    },
    {
      top: 79,
      left: 82,
      productTitle: "Nike Sportswear Essential Repel Women",
      productCategory: "Athletic Jacket",
      price: 3995.0,
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeTab, setActiveTab] = useState("all");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blocTabs = document.querySelector(".bloc-tabs1");
      const contentTabs = document.querySelector(".content-tabs");

      if (contentTabs) {
        const contentTabsRect = contentTabs.getBoundingClientRect();
        setIsSticky(contentTabsRect.top <= 0);
      }
      console.log(window.scrollY);
      //  for mobile
      if (isSticky) {
        const contentstart = window.scrollY;
      }
      if (!isMobile && window.scrollY > 4700) {
        setIsSticky(false);
      }
      if (isMobile && window.scrollY > 5520) {
        setIsSticky(false);
      }

      // if (blocTabs) {
      //   const blocTabsRect = blocTabs.getBoundingClientRect();
      //   setIsSticky(blocTabsRect.top >= 0);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openSort, setOpenSort] = React.useState(false);

  const handleOpen = () => {
    setOpenSort(!openSort);
  };
  const [openAllsort, setopenallsort] = useState(false);
  const handleAllsort = () => {
    setopenallsort(!openAllsort);
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOptionClick = (option) => {
    // Handle the selected option as needed
    console.log(`Selected option: ${option}`);
    setDropdownVisible(false);
  };

  const [openSize, setOpenSize] = useState(false);

  const handleSize = () => {
    setOpenSize(!openSize);
  };
  const [openAllSize, setOpenAllSIze] = useState(false);
  const handleAllSize = () => {
    setOpenAllSIze(!openAllSize);
  };
  const [openWidth, setOpenWidth] = useState(false);
  const handleWidth = () => {
    setOpenWidth(!openWidth);
  };

  const [openHeight, setOpenHeight] = useState(false);
  const handleHeight = () => {
    setOpenHeight(!openHeight);
  };

  const [opencolor, setOpenColor] = useState(false);
  const handlecolor = () => {
    setOpenColor(!opencolor);
  };
  const [openCaategory, setOpenCategory] = useState(false);
  const handleCategory = () => {
    setOpenCategory(!openCaategory);
  };

  const [selectedCircle, setSelectedCircle] = useState([]);
  const handleClick = (idx) => {
    if (selectedCircle.includes(idx)) {
      setSelectedCircle(selectedCircle.filter((item) => item !== idx));
    } else {
      setSelectedCircle([...selectedCircle, idx]);
    }
  };

  const [openType, setOpenType] = useState(false);
  const handleType = () => {
    setOpenType(!openType);
  };
  const [openContent, setOpenCOntent] = useState(false);
  const handleContent = () => {
    setOpenCOntent(!openContent);
  };

  const [openAll, setOpenAll] = useState(false);
  const handleAll = () => {
    setOpenAll(true);
  };
  const closeAll = () => {
    setOpenAll(false);
  };

  const renderSortItem = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label htmlFor="age1" className="">
        {text.name}
      </label>
      <input type="radio" id="age1" name="age" value="30" />
    </div>
  );
  const rendersizewidth = (text, idx) => (
    <div className="flex justify-between" key={idx}>
      <label for="age1" className="">
        {text.name}
      </label>
      <div className="flex gap-6">
        <label>{text.value}</label>
        <input type="checkbox" id="age6" name="age" value="36" />
      </div>
    </div>
  );

  return (
    <>
      <div className="wrapper mb-20 sm:px-[50px] px-[20px] py-20 w-full h-full">
        <div>
          <h2 className="text-xl font-bold mb-5">More ideas and inspiration</h2>
        </div>
        <div
          className={`${isSticky ? " sticky" : ""} cursor-pointer sm:mb-0 
      
       `}
        >
          <div
            className={`bg-white py-5 bloc-tabs2 flex flex-row  `}
            style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
          >
            {/* dropdown1 */}
            <div className="dropdown1">
              <div>
                <button
                  onClick={() => {
                    handleOpen();
                    handleTabClick();
                  }}
                  className={` Tabbtn justify-between
                  ${
                    openSort
                      ? "active-tabs  border border-black px-3 py-2 mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                      : "tabS  border border-white mr-2.5 px-3 py-2 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  }
                  `}
                >
                  Sort 
                  <img
                    src={arrow}
                    className={`w-6 h-6  mt-1
                ${openSort ? " rotate-90" : "-rotate-90"}
                
                `}
                    alt=""
                  />
                </button>
                {openSort ? (
                  <div className=" border opensort flex flex-col gap-7 py-5 bg-white rounded-2xl w-52 h-40 overflow-y-auto px-5 absolute">
                    {srtarr.map(renderSortItem)}
                  </div>
                ) : null}
              </div>
            </div>

            {/* dropdown2 */}

            <div className="dropdown2 ">
              <button
                onClick={() => {
                  handleSize();
                  handleTabClick();
                }}
                className={`Tabbtn justify-between
                  ${
                    openSize
                      ? "active-tabs  border border-black px-3 py-2 mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                      : "tabS  border border-white mr-2.5 px-3 py-2 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  }
                  `}
              >
                Size &nbsp;
                <img
                  src={arrow}
                  className={`w-6 h-6  mt-1
                ${openSize ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>

              {openSize ? (
                <div className="border flex flex-col gap-7 py-5 bg-white rounded-2xl w-64 h-80 overflow-y-auto px-5 absolute">
                  <hr />
                  <div
                    className="flex justify-between"
                    onClick={(event) => {
                      handleWidth();
                      event.stopPropagation();
                    }}
                  >
                    <label for="age11" className=" underline">
                      width
                    </label>
                    <img
                      src={arrow}
                      className={`w-6 h-6  mt-1
                  ${openWidth ? " rotate-90" : "-rotate-90"}
                  `}
                      alt=""
                    />
                  </div>

                  {/* ******************************************** */}
                  {openWidth ? (
                    <div className="flex flex-col gap-4">
                      {wdharr.map(rendersizewidth)}
                    </div>
                  ) : null}

                  {/* ********************************************** */}
                  <hr />
                  <div
                    className="flex justify-between"
                    onClick={(event) => {
                      handleHeight();
                      event.stopPropagation();
                    }}
                  >
                    <label for="age11" className=" underline">
                      Height
                    </label>
                    <img
                      src={arrow}
                      className={`w-6 h-6  mt-1
                  ${openHeight ? " rotate-90" : "-rotate-90"}
                  `}
                      alt=""
                    />
                  </div>

                  {/* ******************************************** */}
                  {openHeight ? (
                    <div className="flex flex-col gap-4">
                      {htarr.map((text, idx) => (
                        <div className="flex justify-between" key={idx}>
                          <label for="age1" className="">
                            {text.name}
                          </label>
                          <div className="flex gap-6">
                            <label>{text.value}</label>
                            <input
                              type="checkbox"
                              id="age6"
                              name="age"
                              value="36"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <hr />
                </div>
              ) : null}
            </div>

            {/* dropdown3 */}

            <div>
              <button
                onClick={() => {
                  handlecolor();
                  handleTabClick();
                }}
                className={`Tabbtn justify-between
                  ${
                    opencolor
                      ? "active-tabs  border border-black px-3 py-2 mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                      : "tabS  border border-white mr-2.5 px-3 py-2 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  }
                  `}
              >
                Color &nbsp;
                <img
                  src={arrow}
                  className={`w-6 h-6  mt-1
                ${opencolor ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>
              {opencolor ? (
                <div className="absolute flex flex-col bg-white items-center  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5">
                  <div className="grid grid-cols-3 gap-6">
                    {colorarr.map((text, idx) => (
                      <div
                        className="flex flex-col items-center justify-center"
                        key={idx}
                      >
                        <div
                          onClick={() => handleClick(idx)}
                          className={`${text.class}  ${
                            selectedCircle.includes(idx)
                              ? "outline outline-2"
                              : ""
                          } `}
                        ></div>
                        <p>{text.name}</p>
                        <p>{text.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* dropdown4 */}
            <div>
              <button
                onClick={() => {
                  handleCategory();
                  handleTabClick();
                }}
                className={`Tabbtn justify-between
                  ${
                    openCaategory
                      ? "active-tabs  border border-black px-3 py-2 mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                      : "tabS  border border-white mr-2.5 px-3 py-2 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  }
                  `}
              >
                Category &nbsp;
                <img
                  src={arrow}
                  className={`w-6 h-6  mt-1
                ${openCaategory ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>
              {openCaategory ? (
                <div className="absolute bg-white flex flex-col  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5">
                  {categoryarr.map((text, idx) => (
                    <div className="flex justify-between" key={idx}>
                      <label for="age1" className="">
                        {text.name}
                      </label>
                      <div className="flex gap-6">
                        <label>{text.value}</label>
                        <input
                          type="checkbox"
                          id="age6"
                          name="age"
                          value="36"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {/* dropdown5 */}
            <div>
              <button
                onClick={() => {
                  handleType();
                  handleTabClick();
                }}
                className={`Tabbtn justify-between
                  ${
                    openType
                      ? "active-tabs  border border-black px-3 py-2 mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                      : "tabS  border border-white mr-2.5 px-3 py-2 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  }
                  `}
              >
                Type &nbsp;
                <img
                  src={arrow}
                  className={`w-6 h-6  mt-1
                ${openType ? " rotate-90" : "-rotate-90"}
                
                `}
                  alt=""
                />
              </button>
              {openType ? (
                <div className="bg-white absolute flex flex-col  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5">
                  {typearr.map((text, idx) => (
                    <div
                      className={`flex justify-between
                    
                    
                    `}
                      key={idx}
                    >
                      <label for="age1" className="">
                        {text.name}
                      </label>
                      <div className="flex gap-6">
                        <label>{text.value}</label>
                        <input
                          type="checkbox"
                          id="age6"
                          name="age"
                          value="36"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    className={`text-left underline
                  ${openContent ? "hidden" : "block"}
                  `}
                    onClick={handleContent}
                  >
                    +7 more
                  </button>
                  {openContent
                    ? 
                    
                    typeContent.map((text, idx) => (
                        <div className="flex justify-between" key={idx}>
                          <label for="age1" className="">
                            {text.name}
                          </label>
                          <div className="flex gap-6">
                            <label>{text.value}</label>
                            <input
                              type="checkbox"
                              id="age6"
                              name="age"
                              value="36"
                            />
                          </div>
                        </div>
                      ))
                      
                    : null}

                  <button
                    onClick={handleContent}
                    className={`text-left underline ${
                      openContent ? "block" : "hidden"
                    }`}
                  >
                    Less
                  </button>
                </div>
              ) : null}
            </div>

            {/* ddropdown6 */}
            <div>
              <button
                onClick={() => {
                  handleAll();
                  handleTabClick();
                }}
                className={`Tabbtn z-0 justify-between
                  ${
                    openAll
                      ? "active-tabs  border border-black px-3 py-2 mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                      : "tabS  border border-white mr-2.5 px-3 py-2 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  }
                  `}
              >
                All Filters &nbsp;
                <img
                  src={choserightfloor}
                  className={`w-6 h-6  
                
                
                `}
                  alt=""
                />
              </button>
              {openAll ? (
                <div className="menu-overlay overflow-y-auto bg-white  border-2 fixed  w-[30vw]  right-0 top-0 z-[5000] rounded-2xl    h-full">
                  <div className="menu-option bg-white  pt-5  w-[100%] h-[100vh] border-slate-600 z-[5001]">
                    <div className="flex flex-col px-4 gap-6">
                      <div className="flex justify-between gap-32">
                        <p>Filter and sort</p>
                        <IoMdClose size={20} onClick={closeAll} color="black" />
                      </div>
                      <hr />
                      {/* 1stt div */}
                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllsort}
                          className="text-left flex justify-between"
                        >
                          Color &nbsp;
                          <img
                            src={arrow}
                            className={`w-6 h-6  mt-1
                ${openAllsort ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllsort ? (
                          <div className="flex flex-col gap-7">
                            {srtarr.map(renderSortItem)}
                          </div>
                        ) : null}
                      </div>
                      <hr />
                      {/* 2nd div */}

                      <div className="flex flex-col gap-7">
                        <div
                          onClick={handleAllSize}
                          className="text-left flex justify-between"
                        >
                          Color &nbsp;
                          <img
                            src={arrow}
                            className={`w-6 h-6  mt-1
                ${openAllSize ? " rotate-90" : "-rotate-90"}
                
                `}
                            alt=""
                          />
                        </div>
                        {openAllSize ? (
                          <div className="flex flex-col gap-7">
                            <p className="text-left font-semibold">Width</p>
                            {wdharr.map((text, idx) => (
                              <div className="flex justify-between" key={idx}>
                                <label for="age1" className="">
                                  {text.name}
                                </label>
                                <input
                                  type="radio"
                                  id="age1"
                                  name="age"
                                  value="30"
                                />
                              </div>
                            ))}

                            <p className="text-left font-semibold">Height</p>
                            {htarr.map((text, idx) => (
                              <div className="flex justify-between" key={idx}>
                                <label for="age1" className="">
                                  {text.name}
                                </label>
                                <input
                                  type="radio"
                                  id="age1"
                                  name="age"
                                  value="30"
                                />
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <hr />
                      {/* ****************************** */}
                      <div>size</div>
                      <div>color</div>
                      <div>category</div>
                      <div>Type</div>
                      <div>Price</div>
                      <hr />
                    </div>
                    <div className="pt-10 flex items-center justify-center flex-row gap-3">
                      <button className="w-36 h-14 bg-blue-900 text-white rounded-full">
                        View 96
                      </button>
                      <button className="w-36 h-14 bg-blue-900 text-white rounded-full">
                        Clear all
                      </button>
                    </div>
                  </div>
                  {/* sdm;lsmd */}
                </div>
              ) : null}
            </div>
          </div>

          <hr />

          <div className="">
            <div className="pt-[32px] flex flex-row gap-6">
              {curtainImage.map((text, idx) => (
                <div className="flex flex-col gap-3 hover-div" key={idx}>
                  <div className="flex justify-between checkbox-div">
                    <input type="checkbox" />
                    <label htmlFor="">Compare</label>
                  </div>
                  <img src={text.image} alt="" />
                  <p className="text-sm font-semibold">{text.title}</p>
                  <p className="text-sm">{text.detail}</p>
                  <p className="text-sm font-semibold  w-28 h-10 bg-yellow-400 flex items-center justify-center">
                    Rs. <span className="text-3xl"> {text.price}</span>
                  </p>
                  <p className="text-sm flex flex-row gap-1 items-center text-black">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                    <FaStarHalfAlt /> &nbsp; ({text.count})
                  </p>
                  <div className="flex gap-3 items-center">
                    <img src={adtocart} className="w-10 h-10" alt="" />
                    <img src={liketocart} className="w-5 h-5" alt="" />
                  </div>
                </div>
              ))}
            </div>
            {/* <div>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Compare</label>
              </div>
              <img src="" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
