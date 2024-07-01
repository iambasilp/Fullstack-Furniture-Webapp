import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './NewsLetter.css';

const NewsLetter = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.newsletter', {
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      delay: 300,
      easing: 'ease',
    });
  }, []);

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Furniture Offers</h1>
      <p>Subscribe to our newsletter and stay updated with the latest furniture trends and offers!</p>
      <div className="newsletter-form">
        <input type="email" placeholder='Your Email Address' />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
