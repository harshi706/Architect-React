import React, { useRef, useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Oval } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Mainslidestyle.css";
import { list3 } from "../../assets/mainslide-list";

function MainSlider() {
  // const [fakeLoading, setFakeLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFakeLoading(true);
  //   },1500);
  // }, []);

  const products = list3.filter(
    (prod) => prod.id === 1 || prod.id === 2 || prod.id === 3
  );
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  useEffect(() => {
    if (scrl.current) {
      scrl.current.scrollLeft = 380;
      scrl.current.style.transition = "none";
    }
  }, []);

  const slide = (shift) => {
    if (scrl.current) {
      const targetScroll = scrl.current.scrollLeft + shift;

      scrl.current.scrollTo({
        left: targetScroll,
      });

      setScrollX(targetScroll);
    }
  };

  if (products.length > 0) {
    return (
      <div className="slider-container">
        <div className="arrow-left" onClick={() => slide(-380)}>
          {scrollX > 0 && <BsArrowLeftCircleFill className="arrow-nav" />}
          {/* <BsArrowLeftCircleFill className='arrow-nav' /> */}
        </div>
        <div className="slider-cont" ref={scrl}>
          {products.map((prod, i) => (
            <div key={i}>
              <div className="relative items-center justify-center flex sd">
                <img
                  className="sd rounded-sm"
                  src={prod.imgSrc}
                  alt="Product"
                />
                {prod.circles.map((circle, index) => (
                  <div
                    key={index}
                    className={`circle absolute w-5 h-5 bg-white border-4 border-slate-400 rounded-full
                  
                  
                  `}
                    style={{ top: `${circle.top}%`, left: `${circle.left}%` }}
                  >
                    <div
                      className={`hover-box flex-row z-10 w-56 rounded-2xl flex items-center
                     ${circle.top > 75 ? "top-condition" : ""} ${
                        circle.left > 65 ? "left-condition" : ""
                      }
                    `}
                    >
                      <div className="flex flex-col">
                        <h2 className=" font-normal">{circle.text1}</h2>
                        <p className=" text-slate-400">{circle.text2}</p>
                        <p className="font-semibold">₹ {circle.price}</p>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <BsArrowRightCircleFill className="flex items-center justify-center" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="arrow-rightS" onClick={() => slide(+380)}>
          <BsArrowRightCircleFill className="arrow-nav arrow-right" />
        </div>
      </div>
    );
  } else {
    return (
      <div className=" slider-container">
        <Oval
          height={100}
          width={100}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}

export default MainSlider;
