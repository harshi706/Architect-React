import React, { useState, useEffect, useRef } from "react";
import room from "./room.jpg";
import work from "./work.jpg";
import living from "./living.jpg";
import kitchen from "./kitchen.webp";
import "./styles.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
const Tabs = () => {
  // const [activeTab, setActiveTab] = useState("all");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };
  const [circle1Hovered, setCircle1Hovered] = useState(false);
  const [circle2Hovered, setCircle2Hovered] = useState(false);

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
  const tabImages = {
    all: [room, work, living, kitchen],
    bedroom: [room, room, room],
    livingroom: [living, living, living],
    kitchen: [kitchen, kitchen, kitchen],
    workspace: [work, work, work],
    outdoor: [room, living, kitchen],
    bathroom: [room, room, room],
    dining: [living, kitchen, room],
    hallway: [room, room, room],
    laundry: [work, work, work],
    accessories: [room, living, kitchen],
  };
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
        setIsSticky(false)
      }
      if (isMobile && window.scrollY > 5520) {

        setIsSticky(false)
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
  const tabsData = [
    { key: "all", label: "All", img: tabImages.all },
    { key: "bedroom", label: "Bedroom", img: tabImages.bedroom },
    { key: "livingroom", label: "Living Room", img: tabImages.livingroom },
    { key: "kitchen", label: "Kitchen", img: tabImages.kitchen },
    { key: "workspace", label: "Workspace", img: tabImages.workspace },
    { key: "outdoor", label: "Outdoor", img: tabImages.outdoor },
    { key: "bathroom", label: "Bathroom", img: tabImages.bathroom },
    // { key: "babychildren", label: "Baby & children room" },
    { key: "dining", label: "Dining", img: tabImages.dining },
    { key: "hallway", label: "Hallway", img: tabImages.hallway },
    { key: "laundry", label: "Laundry", img: tabImages.laundry },
    { key: "accessories", label: "Accessories", img: tabImages.accessories },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className={` wrapper py-20 ${isSticky ? " sticky" : ""
          } cursor-pointer sm:mb-0 w-full h-full mb-20 sm:px-[50px] px-[20px]
      
       `}
      >
        <div
          className={`bg-white py-5 bloc-tabs1 flex flex-row  sm:overflow-hidden`}
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {/* sm:mb-[-64px] */}
          {tabsData.map((tab, i) => (
            <div
              key={i}
              className={` px-5 py-2 tabs
          ${activeTab === tab.key
                  ? "active-tabs  border border-black mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  : "tabs  border border-white mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                }`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* <div className="content-tabs">{getContent()}</div> */}
        <div className="content-tabs">
          <div>
            <div className=" text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div className="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][0]}
                  alt="Room"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][1]}
                  alt="Room"
                />
              </div>
              <div className="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][2]}
                  alt="Room"
                />
              </div>
              <div className="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div className="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={activeTab === "all" ? tabImages[activeTab][3] : tabImages[activeTab][0]}
                  alt="Room"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][0]}
                  alt="Room"
                />
              </div>
              <div className="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][0]}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
