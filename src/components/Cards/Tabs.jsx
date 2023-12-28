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

   const circled= [
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
      ]
  

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
  const getContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div>
            <div class=" py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="relative row-span-2 overflow-hidden circle-container items-center justify-center flex ">
                <img
                  className={`h-full w-full object-cover
                  
                   `}
                  src={room}
                  alt="Room"
                />           

                {circled.map((circle, index) => (
                  <div
                    key={index}
                    className={`circle absolute w-5 h-5 bg-white border-4 border-slate-400 rounded-full`}
                    style={{
                      top: `${circle.top}%`,
                      left: `${circle.left}%`,
                    }}
                  >
                    <div
                      className={`hover-box flex-row z-10 w-56 rounded-2xl flex items-center
                     ${circle.top > 75 ? "top-condition" : ""} ${
                        circle.left > 65 ? "left-condition" : ""
                      }
                    `}
                    >
                      <div className="flex flex-col">
                        <h2 className=" font-normal">{circle.productTitle}</h2>
                        <p className=" text-slate-400">
                          {circle.productCategory}
                        </p>
                        <p className="font-semibold">₹ {circle.price}</p>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <BsArrowRightCircleFill className="flex items-center justify-center" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>

              <div class="row-span-2  overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={living}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 sm:block hidden overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={kitchen}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={living}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );

      case "bedroom":
        return (
          <div>
            <div className="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div className="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  alt="room"
                  src={room}
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100  overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );

      case "livingroom":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={living}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={living}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={living}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={living}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={living}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={living}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "kitchen":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={kitchen}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={kitchen}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={kitchen}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={kitchen}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={kitchen}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={kitchen}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "workspace":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={work}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "outdoor":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "bathroom":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "babychildren":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "dining":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "hallway":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "laundry":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      case "accessories":
        return (
          <div>
            <div class="py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="bg-teal-100 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={room}
                  alt="Room"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const tabsData = [
    { key: "all", label: "All" },
    { key: "bedroom", label: "Bedroom" },
    { key: "livingroom", label: "Living Room" },
    { key: "kitchen", label: "Kitchen" },
    { key: "workspace", label: "Workspace" },
    { key: "outdoor", label: "Outdoor" },
    { key: "bathroom", label: "Bathroom" },
    // { key: "babychildren", label: "Baby & children room" },
    { key: "dining", label: "Dining" },
    { key: "hallway", label: "Hallway" },
    { key: "laundry", label: "Laundry" },
    { key: "accessories", label: "Accessories" },
  ];

  // const [isSticky, setIsSticky] = useState(false);
  // const contentRef = useRef(null);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   const contentHeight = contentRef.current.clientHeight;
  //   const tabsHeight = contentRef.current.offsetTop;

  //   setIsSticky(offset > tabsHeight && offset < tabsHeight + contentHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const [activeTab, setActiveTab] = useState("all");
  // const [isSticky, setIsSticky] = useState(false);
  // const contentRef = useRef(null);
  // const blocTabsRef = useRef(null);

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  // const handleScroll = () => {
  //   const blocTabsTop = blocTabsRef.current.getBoundingClientRect().top;
  //   setIsSticky(blocTabsTop <= 0);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // window.addEventListener('scroll', () => {
  //   const blocTabs = document.querySelector('.bloc-tabs1');
  //   const contentTabs = document.querySelector('.content-tabs');
  //   const stickyPoint = blocTabs.offsetTop;

  //   if (window.scrollY >= stickyPoint) {
  //     blocTabs.classList.add('sticky');
  //     contentTabs.style.paddingTop = `${blocTabs.offsetHeight}px`;
  //   } else {
  //     blocTabs.classList.remove('sticky');
  //     contentTabs.style.paddingTop = '0';
  //   }
  // });

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const blocTabs = document.querySelector(".bloc-tabs");
  //     const contentTabs = document.querySelector(".content-tabs");

  //     if (blocTabs && contentTabs) {
  //       const blocTabsRect = blocTabs.getBoundingClientRect();
  //       const contentTabsRect = contentTabs.getBoundingClientRect();

  //       setIsSticky(contentTabsRect.top <= blocTabsRect.bottom);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [activeTab, setActiveTab] = useState("all");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blocTabs = document.querySelector(".bloc-tabs1");
      const contentTabs = document.querySelector(".content-tabs");

      // if (blocTabs && contentTabs) {
      //   const blocTabsRect = blocTabs.getBoundingClientRect();
      //   const contentTabsRect = contentTabs.getBoundingClientRect();

      //   setIsSticky(contentTabsRect.top <= blocTabsRect.bottom);
      // }
      if (contentTabs) {
        const contentTabsRect = contentTabs.getBoundingClientRect();
        setIsSticky(contentTabsRect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className={` wrapper ${
          isSticky ? " sticky" : ""
        } cursor-pointer sm:mb-0 w-full h-full mb-20 sm:px-[50px] px-[20px]
      
       `}
      >
        <div
          className={`bg-white p-4 bloc-tabs1 flex flex-row  sm:overflow-hidden sm:mb-[-64px]`}
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {tabsData.map((tab, i) => (
            <div
              key={i}
              className={`tabs
          ${
            activeTab === tab.key
              ? "active-tabs  border border-black rounded-full w-28 flex items-center justify-center mx-2 bg-gray-100 whitespace-nowrap"
              : "tabs  border w-28 border-white rounded-full flex items-center justify-center  mx-2 bg-gray-100 whitespace-nowrap"
          }`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="content-tabs">{getContent()}</div>
      </div>
    </>
  );
};

export default Tabs;
