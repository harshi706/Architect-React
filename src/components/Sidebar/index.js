import React, { useState } from "react";
import "./styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Sidebar = ({ places }) => {
  const [isNavOpen, setNavOpen] = useState(true);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className={`sidebar ${isNavOpen ? "open" : ""} z-40`}>
        <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <ul className="mx-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-black">
            <div className="commented"></div>
          </ul>
        </div>
        <button
          className={`toggle-btn ${isNavOpen ? "close" : "open"}`}
          onClick={toggleNav}
        >
          {isNavOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
