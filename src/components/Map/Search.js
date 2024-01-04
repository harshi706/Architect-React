import React, { useState, useEffect } from "react";
import { MdSearch, MdAccessTime } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import Menu from "../Header/menu";

import { searchProductsRequest } from "../../Features/search/searchSlice";
import { useDispatch } from "react-redux";
// import Expandedbar from "../Header/Expandedbar";
import "./styles.css";

const Search = ({ places, onResultClick }) => {
  const [data, setData] = useState(places);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);
  //section for search-icon click(down)
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  // const handleSearchIconClick = () => {
  //   setIsSearchBarVisible(!isSearchBarVisible);
  // };
  //section for search-icon click (above)

  //const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(places);

  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProductsRequest(searchQuery));
    // console.log("search called");
  }, [dispatch, searchQuery]);

  // const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  // const onClose = () => {
  //   setSearchQuery("");
  // };
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
      onResultClick({
        lat: item.geo_location.latitude,
        lng: item.geo_location.longitude,
      });
    } else {
      onResultClick({ lat: 20.593, lng: 78.96 });
    }
    console.log(item);
  };

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

  return (
    <>
      {isMobile ? (
        <div className="map-bg flex flex-row items-center justify-between w-full h-16">
          <div
            className=" font-bold p-[7px] hover:bg-slate-200 hover:rounded-full bg-opacity-5 bg-transparent"
            style={{
              backgroundColor: "transparent",
              background: "transparent",
            }}
          >
            <Menu />
          </div>
          <div
            className="main-search absolute shadow-lg z-20 top-[14%] right-3"
            style={{
              backgroundColor: "transparent",
              background: "transparent",
            }}
          >
            <div
              className="search flex items-center border-none bg-white"
              style={{
                borderRadius: "20px 20px 20px 20px",
              }}
            >
              <input
                type="text"
                placeholder="Search Ayatrio Maps"
                className="searchTerm w-[17rem] h-10 border-white p-4 active:border-none focus:outline-none"
                style={{
                  borderRadius: "20px 20px 20px 20px",
                }}
              />
              <div className="searchIcon absolute right-1 bg-white flex justify-center items-center w-[2rem]">
                <MdSearch className="text-gray-400 text-xl" />
              </div>
            </div>

            <div
              className="dropdown-container bg-white hidden  w-[19rem] h-44 border border-gray-200 shadow-md overflow-auto"
              style={{
                borderRadius: "0px 0px 15px 15px",
              }}
            >
              {places.map((item, index) => (
                <div
                  className={`flex justify-evenly items-center hover:bg-gray-100`}
                  key={item._id}
                  onClick={() =>
                    index === 0
                      ? handleResultClick()
                      : handleResultClick(item)
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
                    {index === 0 ? "India" : `${item.name}`}
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
        </div>
      ) : (
        <div className="main-search absolute shadow-lg z-20 top-[14%] left-3">
          <div
            className="search flex items-center border-none bg-white"
            style={{
              borderRadius: "10px 10px  10px 10px",
            }}
          >
            <input
              type="text"
              placeholder="Search Ayatrio Maps"
              value={searchQuery}
              onChange={handleSearchChange}
              className="searchTerm w-[17rem] h-10 border-white p-4 active:border-none focus:outline-none"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
            <div className="searchIcon bg-white flex justify-center items-center w-[2rem]">
              <MdSearch className="text-gray-400 text-xl" />
            </div>
          </div>

          {true && (
            <div
              className="dropdown-container bg-white w-[19rem] h-44 border border-gray-200 shadow-md overflow-auto"
              style={{
                borderRadius: "0px 0px 15px 15px",
              }}
            >
              {places.map((item, index) => (
                <div
                  className={`flex justify-evenly items-center hover:bg-gray-100`}
                  key={item.location_id}
                  onClick={() =>
                    index === 0
                      ? handleResultClick()
                      : handleResultClick(item)
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
                      : `${item.name} ${(item.address).slice(0, 20)}`}
                  </div>
                  <IoClose
                    className={`text-gray-800 text-xl 
      ${hoveredItem === item ? "opacity-100" : "opacity-0"}
      `}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
