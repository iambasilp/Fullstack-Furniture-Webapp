import React from 'react';
import './Offers.css';
import exclusive_image from '../../../assets/Offers/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Special</h1>
        <h1>Furniture Offers</h1>
        <p>Discover our exclusive deals on premium furniture</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <div className='offer-img'>
        <img  src={exclusive_image} alt="Furniture Offers" />
        </div>
       
      </div>
    </div>
  )
}

export default Offers;
