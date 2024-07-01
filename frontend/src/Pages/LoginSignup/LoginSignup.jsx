import React, { useEffect } from 'react';
import './LoginSignup.css';
import ScrollReveal from 'scrollreveal';

const LoginSignup = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.loginsignup-container', {
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '50px',
      interval: 150,
    });

    ScrollReveal().reveal('.loginsignup-fields input, .loginsignup-fields button, .loginsignup-agree input, .loginsignup-agree p', {
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '30px',
      interval: 100,
    });

  }, []);

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
