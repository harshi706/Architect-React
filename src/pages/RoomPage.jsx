import React, { useEffect, useState } from "react";
// import RoomPageHeader from "../components/Room/RoomPageHeader";
import "../components/Room/styles.css";
import RoomImageList from "../components/Room/RoomImageList";
import RoomInfo from "../components/Room/RoomInfo";
import Reviews from "../components/Room/Other/Reviews";
import Header from "../components/Header";
import ImageCaresoul from '../components/Room/imagecaresoul'
import Footer from '../components/Footer/Footer'
import Card from "../components/Room/Other/Card";
const RoomPage = () => {
  const [howMuchScrolled, setHowMuchScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHowMuchScrolled(window.scrollY);
      } else {
        setHowMuchScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [howMuchScrolled]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-rooms flex sm:block items-center">
        <Header />
        <div className="sm:px-[50px] mt-[65px] px-[20px]">
          <div className="flex sm:flex-row flex-col">
            <div className="sm:basis-2/3 flex flex-col  sm:flex-grow">
              <RoomImageList />
              <ImageCaresoul />
              <RoomInfo />
            </div>
            <div className="sm:basis-1/3 flex flex-col">
              <div className="sm:sticky flex top-12 mb-16 ml-0">
                <Card />
              </div>
            </div>
          </div>
          <Reviews />
          <Footer />
        </div>
      </div>


    </>
  );
};

export default RoomPage;
