import "../../../Dropitems/Styles";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AyatrioServices = () => {
  const ServicesCollections = [
    "Wallpaper",
    "Flooring",
    "Blinds",
    "Curtatins",
    "Sport Flooring",
  ];

  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleToggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };
  return (
    
    <div className="filter_item">
      <div className="sm:block hidden ">
        <h4 className={`filter_heading text-black mb-[20px]`}>Service</h4>
        <div className="filter_content">
          <ul className="filter_content_list ">
            {ServicesCollections.map((item) => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:hidden ">
        <h4
          className="filter_heading_mobile mb-[20px] font-semibold  flex flex-row justify-between items-center text-black"
          onClick={handleToggleAccordion}
        >
          Service
          {isAccordionOpen ? (
            <FaChevronUp className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          ) : (
            <FaChevronDown className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          )}
        </h4>
        {isAccordionOpen && (
          <div className="filter_content_mobile sm:hidden">
            <ul className="filter_content_list_mobile flex flex-col gap-[20px] font-normal  text-slate-400 ">
              {ServicesCollections.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AyatrioServices;

{/* <div className="filter_item">
  <div className="sm:block hidden ">
    <h4 className={`filter_heading text-black mb-[20px]`}>Service</h4>
    <div className="filter_content">
      <ul className="filter_content_list ">
        {ServicesCollections.map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="sm:hidden ">
    <h4
      className="filter_heading_mobile  flex flex-row justify-between items-center text-black"
      onClick={handleToggleAccordion}
    >
      Service
      {isAccordionOpen ? (
        <FaChevronUp className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
      ) : (
        <FaChevronDown className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
      )}
    </h4>
    {isAccordionOpen && (
      <div className="filter_content_mobile sm:hidden">
        <ul className="filter_content_list_mobile ">
          {ServicesCollections.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>; */}
