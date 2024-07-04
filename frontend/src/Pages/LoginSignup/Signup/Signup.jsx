import React, { useContext, useEffect, useState } from 'react';
import './Signup.css';
import ScrollReveal from 'scrollreveal';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';

const Signup = () => {
  const {Signup} = useContext(UserContext)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
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
  const Navigate =useNavigate()
  const handleClick = async()=>{
    const result = await Signup(name,email,password)
    console.log(result);
    if(result.success){
      alert(result.message)
      Navigate("/login")
    }
  }

  return (
    <div className='signup'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Your Name' />
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address' />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        </div>
        <button onClick={handleClick}>Continue</button>
        <p className="signup-login">Already have an account? <span><Link to="/login">Login here</Link></span></p>
        <div className="signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;