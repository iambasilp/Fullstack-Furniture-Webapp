import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Offers.css';
import exclusive_image from '../../../assets/Offers/exclusive_image.png';

const Offers = () => {
  useEffect(() => {
    // Initialize ScrollReveal for offers-left
    ScrollReveal().reveal('.offer-left', {
      duration: 1000,
      origin: 'left',
      distance: '20px',
      delay: 300,
      easing: 'ease',
    });

    // Initialize ScrollReveal for offers-right
    ScrollReveal().reveal('.offer-right', {
      duration: 1000,
      origin: 'right',
      distance: '20px',
      delay: 300,
      easing: 'ease',
    });
  }, []);

  return (
    <div className='offers'>
      <div className="offers-left offer-left">
        <h1>Special</h1>
        <h1>Furniture Offers</h1>
        <p>Discover our exclusive deals on premium furniture</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right offer-right">
        <div className='offer-img'>
          <img src={exclusive_image} alt="Furniture Offers" />
        </div>
      </div>
    </div>
  );
}

export default Offers;
