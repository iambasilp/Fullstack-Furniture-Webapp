import React, { useEffect } from 'react';
import './Login.css';
import ScrollReveal from 'scrollreveal';

const Login = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.login-container', {
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '50px',
      interval: 150,
    });

    ScrollReveal().reveal('.login-fields input, .login-fields button', {
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '30px',
      interval: 100,
    });

  }, []);

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Login</button>
        <p className="login-signup">Don't have an account? <span>Sign up here</span></p>
      </div>
    </div>
  );
};

export default Login;