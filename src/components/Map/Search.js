import React, { useState, useEffect } from "react";
import { MdSearch, MdAccessTime } from "react-icons/md";
import { IoClose, IoHome } from "react-icons/io5";
import { GoHome } from "react-icons/go";

const Search = ({ places, onResultClick }) => {
  const [data, setData] = useState(places);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setData(places);
  }, [places]);

  let filteredData = [];
  if (data && data.length > 0) {
    filteredData = data
      .filter(
        (item) => item.address_obj && item.address_obj.country === "India"
      )
      .slice(0, 4);

    // console.log(filteredData.map((item) => item.address_obj.country));
  }

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };
  const handleResultClick = (item) => {
    if (onResultClick && item) {
      onResultClick({ lat: item.latitude, lng: item.longitude });
    } else {
      onResultClick({ lat: 20.593, lng: 78.96 });
    }
  };

  return (
    <div className="main-search absolute shadow-lg z-20 top-[14%] left-3">
      <div
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
            borderRadius: "10px 10px 0px 0px",
          }}
        />
        <div className="searchIcon bg-white flex justify-center items-center w-[2rem]">
          <MdSearch className="text-gray-400 text-xl" />
        </div>
      </div>

      <div
        className="dropdown-container bg-white w-[19rem] h-44 border border-gray-200 shadow-md overflow-auto"
        style={{
          borderRadius: "0px 0px 15px 15px",
        }}
      >
        {filteredData.map((item, index) => (
          <div
            className={`flex justify-evenly items-center hover:bg-gray-100`}
            key={item.location_id}
            onClick={() =>
              index === 0 ? handleResultClick() : handleResultClick(item)
            }
            onMouseEnter={() => handleItemHover(item)}
            onMouseLeave={() => handleItemHover(null)}
          >
            {index === 0 ? (
              <GoHome className="text-gray-700 text-xl" />
            ) : (
              <MdAccessTime className="text-gray-700 text-xl" />
            )}
            <div className="py-2 px-4 text-gray-700 cursor-pointer">
              {index === 0
                ? "India"
                : `${item.address_obj.state ? item.address_obj.state : ""} ${
                    item.name
                  }`}
            </div>
            <IoClose
              className={`text-gray-800 text-xl 
      ${hoveredItem === item ? "opacity-100" : "opacity-0"}
      `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
