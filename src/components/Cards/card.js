import React from 'react';
import './styles.css';

import StarIcon from '../../assets/svg/star-full-icon.svg'
import Carousel from './swip';
import rev from '../../assets/rev.webp';
import PopUp from '../Reviews/PopUp';
import { useNavigate } from 'react-router-dom';

function Card(props) {

  const navigate = useNavigate();

  const handleImageClick = () => {
    props.setPopupVisible(true);
  };

  

  return (
    <>
        <div className="card m-2"style={{
          width: "100%",
          height: "100%",
        }}>
          <div className={`card-flex ${props.cssClass} `}>
            <Carousel  data={props.imgSrc} className="card-img"/>
            <div className="review-icon-container">
              <img
            
                src={rev}
                className="h-8 rounded-md cursor-pointer"
                onClick={handleImageClick}
                alt="Review Icon"
              />
            </div>
          </div>
          <div className="card-title" onClick={()=>navigate('/rooms')}> 
            <div className="card-title-desc">{props.title}</div>
            <div className="card-rating">
            <img src={StarIcon} className='w-6 h-6' alt="" />
             
              {props.rating}
            </div>
          </div>
          <div className="card-date">{props.desc}</div>
          <div className="card-price">
            <strong>₹{props.price}</strong>
          </div>
        </div>
      {props.isPopupVisible && (
        <PopUp
          isPopupVisible={props.isPopupVisible}
          closePopup={props.closePopup}
        />
      )}
    </>
  );
}

export default Card;
