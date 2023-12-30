import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import { TiTick } from "react-icons/ti";
import Sidebar from "./sidebar";
import { FaCircle } from "react-icons/fa";

const Budget = () => {
  const navigate = useNavigate();

  const prevHandler = () => {
    navigate("/virtualexperience/activities");
  };

  const nextHandler = () => {
    navigate("/virtualexperience/content1");
  };

  const [selectedPage, setSelectedPage] = useState("budget");
  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleClick = (index) => {
    // Clear previous selection
    setSelectedActivity(null);

    // Set the new selection
    setSelectedActivity(index);
  };

  return (
    <div className="pt-4 pb-28 flex flex-col w-full h-full justify-center bg-[#f4e3dd]">
      <Header />
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />

      <div className="grid grid-cols-2 gap-y-4 place-items-center sm:grid-cols-4 mb-10">
        {[
          { label: "$", index: "first" },
          { label: "$$", index: "second" },
          { label: "$$$", index: "third" },
          { label: "$$$$", index: "fourth" },
        ].map(({ label, index }) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={` relative flex flex-col min-h-[12rem] w-[5rem] justify-between items-center bg-white mx-6 p-5 rounded-t-full rounded-b-full
              ${selectedActivity === index ? " border-2 border-red-500" : ""}
            `}
          >
            {selectedActivity === index && (
              <div className="overlay rounded-full absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            )}

            <p className="text-lg">{label}</p>

            {selectedActivity === index && (
              <div className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center">
                <div className="circle-container relative flex justify-center items-center">
                  <FaCircle size={30} color="black" className="opacity-100" />
                  <TiTick
                    className="opacity-100 absolute"
                    color="white"
                    size={30}
                    style={{ opacity: 100 }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 px-10 mt-10">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <p>
            Products Available (728){" "}
            <span>
              {" "}
              <a href="/" className="text-underline underline">
                Skip to results
              </a>{" "}
            </span>
          </p>

          <button
            onClick={nextHandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
