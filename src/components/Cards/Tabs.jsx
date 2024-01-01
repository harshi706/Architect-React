import React, { useState, useEffect } from "react";
import "../MainSlider/Mainslidestyle.css";
// import { list3 } from "../../assets/mainslide-list";
import room from "./room.jpg";
import work from "./work.jpg";
import living from "./living.jpg";
import kitchen from "./kitchen.webp";
import "./styles.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Tabs = () => {
  // const [activeTab, setActiveTab] = useState("all");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };
  const navigate = useNavigate();
  const handleTab = () => {
    navigate("/rooms");
  };
  // const products = list3.filter(
  //   (prod) => prod.id === 1 || prod.id === 2 || prod.id === 3
  // );
  // const [circle1Hovered, setCircle1Hovered] = useState(false);
  // const [circle2Hovered, setCircle2Hovered] = useState(false);
  const circled = [
    {
      top: 50,
      left: 68,
      productTitle: "Bedroom 1bhk Room",
      productCategory: "Mountain view",
      price: 1900,
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
  // const [isSticky, setIsSticky] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const firstDiv = document.querySelector(".bloc-tabsnone");
      const thirdDiv = document.querySelector(".classic-tabs");

      if (firstDiv && thirdDiv) {
        const firstDivHeight = firstDiv.offsetHeight;
        const thirdDivBottom =
          thirdDiv.getBoundingClientRect().bottom + window.scrollY;
        const windowBottom = window.scrollY;

        if (thirdDivBottom <= windowBottom + firstDivHeight) {
          firstDiv.style.position = "relative"; // Stop being sticky
        } else {
          firstDiv.style.position = "sticky"; // Be sticky
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mb-20 sm:px-[50px] px-[20px] py-20 w-full h-full">
        <div>
          <h2 className="text-xl font-bold mb-5">More ideas and inspiration</h2>
        </div>
        <div
          className={`
             cursor-pointer sm:mb-0 main-div `}
        >
          <div
            className={` py-5 bloc-tabsnone flex flex-row`}
            style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
          >
            {/* sm:mb-[-64px] */}
            {tabsData.map((tab, i) => (
              <div
                key={i}
                className={` px-5 py-2 tabS
            ${
              activeTab === tab.key
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
            <div className=" classic-tabs text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div className="row-span-2 overflow-hidden relative">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][0]}
                  alt="Room"
                />
                <div className="text-md text-black absolute top-16 left-10  bg-white border-4 border-slate-400 rounded-full w-5 h-5">
                  <div
                    className={`flex-row z-10 mt-4 w-36 h-32 flex items-center pb-2 bg-white`}
                    onClick={handleTab}
                  >
                    <div className="flex flex-row relative">
                      {circled.map((data) => (
                        <div
                          className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-2"
                          key={data.productId}
                        >
                          <h2 className="font-bold pt-1 pr-2">
                            {data.productTitle}
                          </h2>
                          <p className="font-normal pb-2">
                            {data.productCategory}
                          </p>
                          <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                            ₹{data.price}
                          </p>
                        </div>
                      ))}
                      <div className="absolute right-0 top-0 border-l border-black flex justify-end items-center h-full pr-2">
                        <BsArrowRightCircleFill className="flex ml-2 mr-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden relative">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][1]}
                  alt="Room"
                />
              </div>
              <div className="row-span-2 overflow-hidden relative">
                <img
                  className="h-full w-full object-cover"
                  src={tabImages[activeTab][2]}
                  alt="Room"
                />
                <div className="text-md text-black absolute top-16 left-10  bg-white border-4 border-slate-400 rounded-full w-5 h-5">
                  <div
                    className={`flex-row z-10 mt-4 pb-2 w-36 h-32 flex items-center bg-white`}
                    onClick={handleTab}
                  >
                    <div className="flex flex-row relative">
                      {circled.map((data) => (
                        <div
                          className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-2"
                          key={data.productId}
                        >
                          <h2 className="font-bold pt-1 pr-2">
                            {data.productTitle}
                          </h2>
                          <p className="font-normal pb-2">
                            {data.productCategory}
                          </p>
                          <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                            ₹{data.price}
                          </p>
                        </div>
                      ))}

                      <div className="absolute right-0 top-0 border-l border-black flex justify-end items-center h-full pr-2">
                        <BsArrowRightCircleFill className="flex ml-2 mr-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              <div className="row-span-2 overflow-hidden relative">
                <img
                  className="h-full w-full object-cover"
                  src={
                    activeTab === "all"
                      ? tabImages[activeTab][3]
                      : tabImages[activeTab][0]
                  }
                  alt="Room"
                />
                <div className="text-md text-black absolute top-16 left-10  bg-white border-4 border-slate-400 rounded-full w-5 h-5">
                  <div
                    className={`flex-row z-10 mt-4 w-36 h-32 flex items-center pb-2 bg-white`}
                    onClick={handleTab}
                  >
                    <div className="flex flex-row relative">
                      {circled.map((data) => (
                        <div
                          className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-2"
                          key={data.productId}
                        >
                          <h2 className="font-bold pt-1 pr-2">
                            {data.productTitle}
                          </h2>
                          <p className="font-normal pb-2">
                            {data.productCategory}
                          </p>
                          <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                            ₹{data.price}
                          </p>
                        </div>
                      ))}

                      <div className="absolute right-0 top-0 border-l border-black flex justify-end items-center h-full pr-2">
                        <BsArrowRightCircleFill className="flex ml-2 mr-2" />
                      </div>
                    </div>
                  </div>
                </div>
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
