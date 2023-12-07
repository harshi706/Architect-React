import React from "react";
import HeaderInfo from "./HeaderInfo";

const RoomPageHeader = () => {
  return (
    <nav className="border-b">
      <div className="max-w-screen-xl px-2 mx-auto flex justify-between align-center">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li className="room-header-link-item room-page-nav-link">
              <a href="#" className="text-gray-900 ">
                Photos
              </a>
            </li>
            <li className="room-header-link-item room-page-nav-link">
              <a href="#" className="text-gray-900 dark:text-white">
                Amenties
              </a>
            </li>
            <li className="room-header-link-item room-page-nav-link">
              <a href="#" className="text-gray-900 dark:text-white">
                Reviews
              </a>
            </li>
            <li className="room-header-link-item room-page-nav-link">
              <a href="#" className="text-gray-900 dark:text-white">
                Location
              </a>
            </li>
          </ul>
        </div>
        <div><HeaderInfo/></div>
      </div>
    </nav>
  );
};

export default RoomPageHeader;
