import React, { useState } from "react";
import { MdSearch, MdAccessTime } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GoHome } from "react-icons/go";
const Searchmagazine = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  return (
    <div className="main-search absolute shadow-lg z-20 top-[14%] left-3">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="search flex items-center border-none bg-white"
        style={{
          borderRadius: "10px 10px 0px 10px",
        }}
      >
        <input
          type="text"
          placeholder="Search Ayatrio Maps"
          className="searchTerm w-[17rem] h-10 border-white p-4 active:border-none focus:outline-none"
          style={{
            borderRadius: toggleDropdown ? "10px 10px 0px 0px" : "20px",
          }}
        />
        <div className="searchIcon bg-white flex justify-center items-center w-[2rem]">
          <MdSearch className="text-gray-400 text-xl" />
        </div>
      </div>
      {toggleDropdown ? (
        <div 
          className="dropdown-container bg-white w-[19rem] h-44 border border-gray-200 shadow-md overflow-auto"
          style={{
            borderRadius: "0px 0px 15px 15px",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              className={`flex justify-evenly items-center hover:bg-gray-100`}
              key={item}
              onClick={() => console.log(`Clicked on result ${item}`)}
              onMouseEnter={() => handleItemHover(item)}
              onMouseLeave={() => handleItemHover(null)}
            >
              {item===1?<GoHome className="text-gray-700 text-xl"/>:<MdAccessTime className="text-gray-700 text-xl" />}
              <div className="py-2 px-4 text-gray-700 cursor-pointer">
                {
                    item===1?"Home  Search":`recent Search ${item}`
                }
              </div>
              <IoClose className={`text-gray-800 text-xl 
              ${hoveredItem === item ? "opacity-100" : "opacity-0"}
              `} />
             
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Searchmagazine;
