import React, { useState } from "react";
import room from "./room.jpg";
import work from "./work.jpg";
import living from "./living.jpg";
import kitchen from "./kitchen.webp";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div>
            <div class=" py-[80px] text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
              <div class="row-span-2 overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={room}
                  alt="Room"
                />
              </div>
              <div class="overflow-hidden">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div>
              {/* <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={work}
                  alt="Room"
                />
              </div> */}

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
              {/* <div class="overflow-hidden sm:hidden block">
                <img
                  className="h-full w-full object-cover "
                  src={living}
                  alt="Room"
                />
              </div> */}
            </div>
          </div>
        );

      case "bedroom":
        return (
          <div>
            <div className="p-20 grid grid-cols-3 gap-3 grid-rows-3 mr-8">
              <div className="row-span-2 overflow-hidden">
                <img className="h-full w-full object-cover" src={room} />
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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
            <div class="p-20 text-green-800 grid grid-cols-3 gap-3 grid-rows-3 ">
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

  return (
    <>
      <div className=" cursor-pointer sm:mb-0 w-full h-full mb-20 sm:px-[50px] px-[20px] ">
        <div
          className="bloc-tabs flex flex-row  sm:overflow-hidden sm:mb-[-64px]"
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
