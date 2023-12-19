import React, { useState } from "react";
import { dataRooms } from "./data";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Header from "../../Header";
import { TiTick } from "react-icons/ti";
import Sidebar from "./sidebar";
import { GoCircle } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
const Rooms = () => {
  const navigate = useNavigate();

  const nextHandler = () => {
    if (selectedPage === "vrooms") {
      navigate("/virtualexperience/activities");
    }
  };

  const [selectedActivity, setSelectedActivity] = useState({});
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const [selectedPage, setSelectedPage] = useState("vrooms");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };

  const handleClick = (roomId) => {
    setSelectedActivity((prevSelectedRooms) => {
      const updatedSelectedRooms = {
        ...prevSelectedRooms,
        [roomId]: !prevSelectedRooms[roomId],
      };
      return updatedSelectedRooms;
    });
    setShowCircle(!showCircle);
    setShowbuttoncontent(true);
  };

  return (
    <div className="py-4 relative w-full h-full flex flex-col justify-center bg-[#f4e3dd]">
      <Header />

      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
        {dataRooms.map((item) => (
          <div
            key={item.id}
            className=" relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            {selectedActivity[item.id] && (
              <div className="overlay rounded-2xl absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            )}

            <img
              src={item.img}
              alt={item.title}
              onClick={() => {
                handleClick(item.id);
                handleSelect();
              }}
              className={`room-item rounded-2xl object-cover w-full h-full block p-1 
            ${
              selectedActivity[item.id] ? " overlay z-10 black opacity-100" : ""
            }  ${selectedActivity[item.id] ? " border-2 border-red-500" : ""}
              `}
            />

            <h3
              className={` p-1 rounded-sm absolute right-0 bottom-0
            ${
              selectedActivity[item.id]
                ? "font-semibold text-white absolute left-2 bottom-2  bg-transparent"
                : "bg-white"
            }
            `}
            >
              {item.title}
            </h3>

            {selectedActivity[item.id] && (
              <div className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center">
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
            {/* {showbuttoncontent && (
              <Button onSelect={() => handleClick(item.id)} />
            )} */}
          </div>
        ))}
      </div>
      <button
        onClick={nextHandler}
        className="rounded-2xl px-3 py-1 mb-4 text-center text-white font-bold bg-[#2F4F4F] absolute right-2 bottom-1"
      >
        Next Question
      </button>
    </div>
  );
};

export default Rooms;
