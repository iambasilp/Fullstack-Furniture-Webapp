import React, { useEffect } from 'react';
import './Signup.css';
import ScrollReveal from 'scrollreveal';

const Signup = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.signup-container', {
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '50px',
      interval: 150,
    });

    ScrollReveal().reveal('.signup-fields input, .signup-fields button, .signup-agree input, .signup-agree p', {
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '30px',
      interval: 100,
    });

  }, []);

  return (
    <div className='signup'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="signup-login">Already have an account? <span>Login here</span></p>
        <div className="signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;