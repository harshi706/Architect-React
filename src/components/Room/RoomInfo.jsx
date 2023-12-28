import React from "react";
import Beding from "./Other/Beding";
import PlaceInfo from "./Other/PlaceInfo";
import Amenities from "./Other/Amenities";
import Calendar from "./Other/Calendar";
import Card from "./Other/Card";
import ItemPage from "../../pages/ItemPage";

const RoomInfo = () => {
  return (
    <div className="flex my-6 ml-1" style={{ width: "100%" }}>
      <div className="mr-4 sm:w-[60%]">
        <div className="room-details pb-4">
          <h2 className="sm:text-2xl text-lg sm:font-semibold font-medium mt-[24rem]">
            Entire villa in Nandgaon, India
          </h2>
          <div className=" text-base">
            16+ guests4 bedrooms5 beds3 bathrooms
          </div>
          <div className="reviews">
            <span className="underline text-lg font-semibold">2 reviews</span>
          </div>
        </div>

        {/* place features and information */}
        <PlaceInfo />

        {/* ----------------- bedding cards ------------ */}
        <Beding />

        {/* ----------------- what this place offers ------------ */}
        <Amenities />

        {/* ---------- select from dates ----------- */}
        <Calendar />
      </div>

      {/* ------------------ card -------------- */}
      <div className="sm:flex hidden" style={{ width: "40%" }}>
        <Card />
      </div>
    </div>
  );
};
export default RoomInfo;
