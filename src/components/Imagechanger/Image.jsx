import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProgressBar = ({ progress }) => (
  <div className="absolute top-[0px] left-[0px] w-[100%] h-[5px] bg-white ">
    <div
    className=" bg-[#808080] h-full"
      style={{
        width: `${progress}%`,
        transition: "width 3s",
      }}
    ></div>
  </div>
);

const Image = () => {
  const [index, setIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const text = [
    "dsadasdorem ipsum dolor sit amet, consectetur adipissit amet, consect eiusmod tempor incididunt ut labore et dolore magnasit amet, consect eiusmod tempor incididunt ut labore et dolore magnacing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    "orem ipsudolor sit amet, consect eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisc dolor sit amet, consectetur adipisciieniam,",
    "lorem ipsum dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipisci dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  ];

  const images = [
    [
      "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  ];

  const Heading = ["Trending Choices", "Trending Choices", "Trending Choices"];

  const toggleIndex = (clickedIndex) => {
    setIndex((prevIndex) =>
      prevIndex === clickedIndex ? -1 : prevIndex === -1 ? clickedIndex : -1
    );
    setCarouselIndex(0);
  };

  const handleCarouselClick = (increment) => {
    const totalImages = images[index]?.length || 1; // Avoid division by zero if there are no images
    setCarouselIndex(
      (prevIndex) => (prevIndex + increment + totalImages) % totalImages
    );
  };

  const renderImages = () => {
    if (index === -1) {
      return <img src={images[0][0]} alt="" className={`w-[100%] h-[100%]`} />;
    }

    return images[index].map((src, imgIdx) => (
      <img
        key={imgIdx}
        src={src}
        alt=""
        className={` w-[100%] h-[100%] ${
          imgIdx === carouselIndex ? "" : "hidden"
        }`}
      />
    ));
  };

  useEffect(() => {
    const totalImages = images[index]?.length || 1; // Avoid division by zero if there are no images

    const interval = setInterval(() => {
      if (index !== -1) {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % totalImages);
        setProgress(
          (prevProgress) => (prevProgress + (1 / totalImages) * 100) % 100
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, images]);

  useEffect(() => {
    setProgress(0);
  }, [index]);

  return (
    <>
      <div className="main-image w-full h-100  flex gap-[10px] sm:flex-row flex-col sm:px-[50px] px-[20px]">
        <div className="left-image text-container flex flex-col m-auto justify-center sm:w-1/2 w-full h-full">
          <div className="sm:text-3xl text-xl font-bold mb-2">
            Trending adfsdd fjddf dffg <br />
            fgdjd vfvdnd
          </div>
          <div className="text-md font-bold mb-2">
            Trending choices description fddg fjd rfhnkf lorem{" "}
          </div>

          {Heading.map((value, idx) => (
            <div key={idx} className="mb-7">
              {idx === 1 && (
                <>
                  {/* <div className="line-horizontal dark-black-line h-1 w-full bg-gray-300" /> */}
                  <div
                    onClick={() => toggleIndex(idx)}
                    className="flex items-center justify-between sm:w-auto w-[80vw]"
                  >
                    <h1 className="text-2xl sm:my-4 my-1 font-bold text-left cursor-pointer">
                      {value}
                    </h1>
                    {index === idx ? (
                      <FaChevronUp className="text-2xl my-4 font-sans text-gray-500 text-left cursor-pointer" />
                    ) : (
                      <FaChevronDown className="text-2xl my-4 text-gray-500 text-left cursor-pointer" />
                    )}
                  </div>
                </>
              )}
              {idx !== 1 && (
                <div
                  onClick={() => toggleIndex(idx)}
                  className="flex items-center justify-between  sm:w-auto w-[80vw] "
                >
                  <h1 className="text-2xl mb-2 font-bold text-left cursor-pointer">
                    {value}
                  </h1>
                  {index === idx ? (
                    <FaChevronUp className="text-2xl my-4 text-gray-500 text-left cursor-pointer" />
                  ) : (
                    <FaChevronDown className="text-2xl my-4 text-gray-500 text-left cursor-pointer" />
                  )}
                </div>
              )}
              <div className="sm:w-[23rem] w-[80vw]">
                <p className={`${idx + 1}text`}>
                  {index === idx ? text[idx] : ""}
                </p>
                {/* {idx === 1 && (
                  <hr className="line-horizontal dark-black-line h-1 w-full bg-gray-300" />
                )} */}
              </div>
            </div>
          ))}
        </div>
        <div className="right-image image-container flex sm:w-1/2 w-full h-full">
          <div className="flex w-full h-full justify-center  relative">
            {progress > 0 && <ProgressBar progress={progress} />}
            {renderImages()}
            <div
              className="absolute top-0 h-full flex items-center cursor-pointer"
              onClick={() => handleCarouselClick(-1)}
            >
              <div className="text-3xl font-bold text-white"></div>
            </div>
            <div
              className="absolute top-0 right-0 h-full flex items-center cursor-pointer"
              onClick={() => handleCarouselClick(1)}
            >
              <div className="text-3xl font-bold text-white"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Image;
