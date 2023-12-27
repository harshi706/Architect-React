import "../../../Dropitems/Styles";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Familycollections = () => {
  const collections = [
    "Log in ",
    "Join Ayatrio Family",
    "Member Offers",
    "Member Workshop & Events ",
    "Member Feedback",
  ];

  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const handleToggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="filter_item">
      <div className="sm:block hidden ">
        <h4 className={`filter_heading text-black mb-[20px]`}>Ayatrio Family</h4>
        <div className="filter_content">
          <ul className="filter_content_list ">
            {collections.map((item) => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:hidden ">
        <h4
          className="filter_heading_mobile font-semibold  flex flex-row justify-between items-center text-black mb-[20px]"
          onClick={handleToggleAccordion}
        >
          Ayatrio Family
          {isAccordionOpen ? (
            <FaChevronUp className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          ) : (
            <FaChevronDown className="sm:font-bold font-medium sm:text-2xl text-xl text-gray-500 cursor-pointer" />
          )}
        </h4>
        {isAccordionOpen && (
          <div className="filter_content_mobile sm:hidden">
            <ul className="filter_content_list_mobile font-normal flex flex-col gap-[20px] text-slate-400 ">
              {collections.map((item) => (
                <li key={item} >
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

export default Familycollections;
