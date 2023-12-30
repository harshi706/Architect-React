import React, { useState, useEffect } from "react";
import { MdSearch, MdAccessTime } from "react-icons/md";
import { IoClose, IoHome } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import Menu from "../Header/menu";
import search from "../../assets/icon/search.svg";
import { searchProductsRequest } from "../../Features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Expandedbar from "../Header/Expandedbar";
import "./styles.css";

const Search = ({ places, onResultClick }) => {
  const [data, setData] = useState(places);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);
  //section for search-icon click(down)
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };
  //section for search-icon click (above)

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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

  const onClose = () => {
    setSearchQuery("");
  };
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
        <div className="flex items-center justify-between w-full h-16">
          <div className="profile-menu font-bold p-[7px] hover:bg-slate-200 hover:rounded-full">
            <Menu />
          </div>

          {/* {!searchQuery ? (
            <div className=" searchbar pt-4 w-40 h-10 items-right justify-end ">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                placeholder="Search"
                className=" sm:block hidden relative font-semibold placeholder-gray-400 w-[13rem] h-10 bg-slate-100 p-4 rounded-full active:border-none focus:outline-none hover:bg-slate-200 hover:rounded-3xl"
              />
              <img
                src={search}
                alt=""
                className="seachbar-div2-icon absolute z-10"
              />
            </div>
          ) : (
            <Expandedbar searchQuery={searchQuery} onClose={onClose} />
          )} */}
        </div>
      ) : (
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
              value={searchQuery}
              onChange={handleSearchChange}
              className="searchTerm w-[17rem] h-10 border-white p-4 active:border-none focus:outline-none"
              style={{
                borderRadius: "10px 10px 0px 0px",
              }}
            />
            <div className="searchIcon bg-white flex justify-center items-center w-[2rem]">
              <MdSearch className="text-gray-400 text-xl" />
            </div>
          </div>

          {searchQuery &&<div
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
                    : `${
                        item.address_obj.state ? item.address_obj.state : ""
                      } ${item.name}`}
                </div>
                <IoClose
                  className={`text-gray-800 text-xl 
      ${hoveredItem === item ? "opacity-100" : "opacity-0"}
      `}
                />
              </div>
            ))}
          </div>}
        </div>
      )}
    </>
  );
};

export default Search;
