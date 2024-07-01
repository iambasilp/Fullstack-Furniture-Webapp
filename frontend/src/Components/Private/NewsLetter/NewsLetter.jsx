import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
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
