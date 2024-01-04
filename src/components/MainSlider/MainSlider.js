import React, { useRef, useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Oval } from "react-loader-spinner";
import "./Mainslidestyle.css";
import { list3 } from "../../assets/mainslide-list";
// import _debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import { selectSliderData } from "../../Features/Slices/sliderSlice";
import { animateScroll as scroll } from "react-scroll";

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
    dispatch({
      type: "FETCH_SLIDER_VIEW_REQUEST",
      payload: {
        page: page,
        limit: 3,
      },
    });
  };
  // console.log(SliderViewData);

  const products = list3.filter(
    (prod) => prod.id === 1 || prod.id === 2 || prod.id === 3
  );
  const [scrollX, setScrollX] = useState(0);
  const scrl = useRef(null);

  useEffect(() => {
    if (scrl.current) {
      scrl.current.scrollLeft = 0;
      scrl.current.style.transition = "transition 4s";
    }
  }, []);
  const slideswipe = window.innerWidth / 2;
  console.log(slideswipe);

  // const slide = (shift) => {
  //   if (scrl.current) {
  //     let targetScroll = scrl.current.scrollLeft + shift;

  //     const totalWidth = scrl.current.scrollWidth;
  //     const containerWidth = scrl.current.clientWidth;

  //     // if (targetScroll < 0) {
  //     //   targetScroll = totalWidth - containerWidth;
  //     // } else if (targetScroll + containerWidth > totalWidth) {
  //     //   targetScroll = shift;
  //     // }
  //     if (targetScroll < 0) {
  //       // If scrolling left past the start, wrap around to the end
  //       targetScroll = totalWidth - containerWidth;
  //     } else if (targetScroll + containerWidth > totalWidth) {
  //       // If scrolling right past the end, wrap around to the start
  //       targetScroll = 0;
  //     }

  //     scrl.current.scrollTo({
  //       left: targetScroll,
  //       behavior: "smooth",
  //     });

  //     setScrollX(targetScroll);
  //   }
  // };

  // const slide = (shift) => {
  //   if (scrl.current) {
  //     const totalWidth = scrl.current.scrollWidth;
  //     const containerWidth = scrl.current.clientWidth;
  //     let targetScroll = scrl.current.scrollLeft + shift;

  //     if (targetScroll < 0) {
  //       // If scrolling left past the start, wrap around to the end
  //       targetScroll = totalWidth - containerWidth + (targetScroll % totalWidth);
  //     } else if (targetScroll + containerWidth > totalWidth) {
  //       // If scrolling right past the end, wrap around to the start
  //       targetScroll = targetScroll % totalWidth;
  //     }

  //     scrl.current.scrollTo({
  //       left: targetScroll,
  //       behavior: "smooth",
  //     });

  //     setScrollX(targetScroll);
  //   }
  // };

  const slide = (shift) => {
    if (scrl.current) {
      let targetScroll = scrl.current.scrollLeft + shift;

      // scrl.current.scrollIntoView({ behavior: 'smooth' });
      const totalWidth = scrl.current.scrollWidth;
      const containerWidth = scrl.current.clientWidth;
      const children = scrl.current.children;
      const firstChild = children[0];
      const lastChild = children[children.length - 1];

      if (targetScroll < 0) {
        // If scrolling left past the start, move the last child to the beginning
        scrl.current.insertBefore(lastChild, firstChild);
        targetScroll += lastChild.offsetWidth;
      } else if (targetScroll + containerWidth > totalWidth) {
        // If scrolling right past the end, move the first child to the end
        scrl.current.appendChild(firstChild);
        targetScroll -= firstChild.offsetWidth;
      }
      scrl.current.style.transition = "all 3s";
      scrl.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      

      setScrollX(targetScroll);
    }
  };

  // **********************************
  // for mobile

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // const handleTouchStart = (e) => {
  //   setTouchStart(e.targetTouches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   setTouchEnd(e.targetTouches[0].clientX);
  // };

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 100) {
  //     // the user swiped left
  //     slide(120);
  //   }

  //   if (touchStart - touchEnd < -100) {
  //     // the user swiped right
  //     slide(-190);
  //   }
  // };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 60) {
  //     // the user swiped left
  //     const firstChild = scrl.current.firstChild;
  //     scrl.current.appendChild(firstChild);
  //     scrl.current.scrollTo({
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   }

  //   if (touchStart - touchEnd < -60) {
  //     // the user swiped right
  //     const lastChild = scrl.current.lastChild;
  //     scrl.current.insertBefore(lastChild, scrl.current.firstChild);
  //     scrl.current.scrollTo({
  //       left: scrl.current.scrollWidth - scrl.current.clientWidth,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > slideswipe) {
      // the user swiped left
      const firstChild = scrl.current.firstChild;
      const clone = firstChild.cloneNode(true);
      scrl.current.appendChild(clone);
      scrl.current.removeChild(firstChild);
      scrl.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }

    if (touchStart - touchEnd < slideswipe) {
      // the user swiped right
      const lastChild = scrl.current.lastChild;
      const clone = lastChild.cloneNode(true);
      scrl.current.insertBefore(clone, scrl.current.firstChild);
      scrl.current.removeChild(lastChild);
      scrl.current.scrollTo({
        left: scrl.current.scrollWidth - scrl.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // const [startX, setStartX] = useState(0);
  // const [scrollLefts, setScrollLefts] = useState(0);

  // const startTouch = (e) => {
  //   setStartX(e.touches[0].pageX);
  //   setScrollLefts(scrl.current.scrollLefts);
  // };

  // const moveTouch = (e) => {
  //   e.preventDefault();
  //   const x = e.touches[0].pageX;
  //   const walk = (startX - x) * 3; // scroll-fast
  //   scrl.current.scrollLefts = scrollLefts + walk;
  // };

  // const startTouch = (e) => {
  //   setStartX(e.touches[0].pageX);
  //   setScrollLefts(scrl.current.scrollLeft);
  // };

  // const moveTouch = (e) => {
  //   if (!startX) return;
  //   // e.preventDefault();
  //   const x = e.touches[0].pageX;
  //   const deltaX = startX - x;
  //   // scrl.current.scrollLeft = scrollLefts + deltaX;
  //   scrl.current.scrollTo({
  //     left: scrollLefts+deltaX,
  //     behavior:"auto"
  //   });
  // };
  // const endTouch=()=>{
  //   setStartX(0)
  //   setScrollLefts(0)
  // }

  //**************************

  // ! slider interval

  useEffect(() => {
    const slideInterval = setInterval(() => {
      slide(slideswipe);
    }, 10000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [slideswipe]);

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
  console.log(window.innerWidth);

  return (
    <div className="slider-container">
      <div className="arrow-left z-20" onClick={() => slide(-slideswipe)}>
        {!isMobile && <BsArrowLeftCircleFill className="arrow-nav" />}
      </div>
      <div
        className="slider-cont"
        id="my-slider-container"
        ref={scrl}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        // onTouchStart={startTouch}
        // onTouchMove={moveTouch}
        // onTouchEnd={endTouch}
      >
        {/* <div className="slider-cont" ref={scrl}> */}
        {products.map((prod, i) => (
          <div key={i}>
            <div className="circle-container relative items-center justify-center flex sd">
              <img className="sd rounded-sm" src={prod.imgSrc} alt="Product" />
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
                     ${circle.top > 75 ? "top-condition" : ""} ${
                      circle.left > 65 ? "left-condition" : ""
                    }
                    `}
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-col basis-3/4 w-36 flex-grow relative -ml-1">
                        <h2 className="font-bold pt-1 pr-2">
                          {circle.productTitle}
                        </h2>
                        <p className="font-normal">{circle.productCategory}</p>
                        <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                          ₹ {circle.price}
                        </p>
                        <br />
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
        {/* </div> */}
      </div>
      <div className="arrow-rightS z-20" onClick={() => slide(+slideswipe)}>
        {!isMobile && <BsArrowRightCircleFill className="arrow-nav" />}
      </div>
    </div>
  );
}

export default MainSlider;
