import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Swiper from '../../../pages/Swiper' // Import the Star icon from Material-UI

const CustomStar = ({ color, ...props }) => (
  <StarIcon style={{ color, fontSize: "16px" }} {...props} />
);

const Reviews = () => {
  return (
    <>
    <div className="py-12 border-t border-b mb-12">
      <h3 className="mb-1 text-xl font-semibold">2 reviews</h3>
      <span className="font-normal text-sm text-gray-500">
        Average rating will appear after 3 reviews
      </span>
      <div className="reviews-container mt-6 grid sm:grid-cols-2 grids-col-1 grid-rows-1 gap-4 mx-auto">
        <div className="sm:mr-12 m-0 sm:block ">
          <div className="review-header flex">
            <div className="w-[48px] h-[48px] mr-4">
              <img
                className="w-full h-full"
                src="https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=M&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[16px]">Manas</span>
              <span className="font-normal text-[14px] text-gray-500">
                India
              </span>
            </div>
          </div>
          <div className="ratings flex mt-3">
            <Rating
              name="read-only"
              value={5}
              readOnly
              icon={<CustomStar color="black" />}
            />
            <span className="text-sm font-semibold ml-2">October 2023</span>
          </div>
          <div className="review mt-2">
            <p className="text-gray-600 font-[16px] leading-6	mb-6 sm:w-auto text-justify w-[80vw]">
              We really had an amazing experience. Totally worth the money paid.
              Amazing food and service. The care takers were very very helpful
              and didn't say no to anything. Must visit.
            </p>
          </div>
        </div>

        <div  className="mr-12">
          <div className="review-header flex">
            <div className="w-[48px] h-[48px] mr-4">
              <img
                className="w-full h-full"
                src="https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=N&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[16px]">Nikhil</span>
              <span className="font-normal text-[14px] text-gray-500">
                India
              </span>
            </div>
          </div>
          <div className="ratings flex mt-3">
            <Rating
              name="read-only"
              value={5}
              readOnly
              icon={<CustomStar color="black" />}
            />
            <span className="text-sm font-semibold ml-2">April 2023</span>
          </div>
          <div className="review mt-2">
            <p className="text-gray-600 font-[16px] leading-6	mb-6 text-justify sm:w-auto w-[80vw]">
              We really had an amazing experience. Totally worth the money paid.
              Amazing food and service. The care takers were very very helpful
              and didn't say no to anything. Must visit.
            </p>
          </div>
        </div>
       
      </div>
    </div>
    <Swiper/>
    </>
  );
};

export default Reviews;
