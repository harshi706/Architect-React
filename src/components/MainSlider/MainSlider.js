import React, { useRef, useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Oval } from "react-loader-spinner";
import "./Mainslidestyle.css";
import { list3 } from "../../assets/mainslide-list";
import _debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import { selectSliderData } from "../../Features/Slices/sliderSlice";

function MainSlider() {
//data fetching
const dispatch = useDispatch();
const SliderViewData = useSelector(selectSliderData);
const [page, setPage] = useState(1);
useEffect(() => {
  if (!SliderViewData || SliderViewData.length === 0) {
    fetchData();
  } 
}, [page]); 
const fetchData = () => {
  dispatch({ type: "FETCH_SLIDER_VIEW_REQUEST", payload: {
    page: page,
    limit: 3,
  } });
};
console.log(SliderViewData);

  const products = list3.filter(
    (prod) => prod.id === 1 || prod.id === 2 || prod.id === 3
  );
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  useEffect(() => {
    if (scrl.current) {
      scrl.current.scrollLeft = 0;
      scrl.current.style.transition = "none";
    }
  }, []);
  const slide = (shift) => {
    const targetPage = page + (shift > 0 ? 1 : -1);
    if (targetPage >= 1) {
      setPage(targetPage);
      fetchData(targetPage);
    }
  };
  

  if (products.length > 0) {
    return (
      <div className="slider-container">
        <div className="arrow-left z-20" onClick={() => slide(-190)}>
          {scrollX > 0 && <BsArrowLeftCircleFill className="arrow-nav" />}
          {/* <BsArrowLeftCircleFill className='arrow-nav' /> */}
        </div>
        <div className="slider-cont" ref={scrl}>
          {products.map((prod, i) => (
            <div key={i}>
              <div className="circle-container relative items-center justify-center flex sd">
                <img
                  className="sd rounded-sm"
                  src={prod.imgSrc}
                  alt="Product"
                />
                {prod.circles.map((circle, index) => (
                  <div
                    key={index}
                    className={`circle absolute effect`}
                    style={{
                      top: `${circle.top}%`,
                      left: `${circle.left}%`,
                    }}
                  >
                    <div
                      className={`hover-box flex-row z-10 w-44 h-44 flex items-center bg-white
                     ${circle.top > 75 ? "top-condition" : ""} ${circle.left > 65 ? "left-condition" : ""
                        }
                    `}
                    
                    >
                      <div className="flex flex-col">
                        <div className="flex flex-col basis-3/4 w-36 flex-grow relative -ml-1">
                          <h2 className="font-bold pt-1 pr-2">{circle.productTitle}</h2>
                          <p className="font-normal">{circle.productCategory}</p>
                          <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">₹ {circle.price}</p><br />
                        </div>
                        <div className="absolute inset-y-0 right-0  border-l border-black flex items-center justify-center basis-1/4 flex-grow pl-2 pr-2 ml-2">
                          <BsArrowRightCircleFill className="flex items-center justify-center" />
                        </div>
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
      <div className="slider-container">
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
