import React, { useEffect, useState } from 'react';
import './Signup.css';
import ScrollReveal from 'scrollreveal';
import {Link,useNavigate} from 'react-router-dom'


const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const Navigate = useNavigate()
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
 const HandleSignUp = async()=>{
  try{

  
    const response = await fetch('http://localhost:3000/users',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({name,email,password})
    })
    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('users',JSON.stringify(data))
      Navigate('/')
      alert('Sign up successful!');
    } else {
      alert('Sign up failed');
    }
  }catch(error){
    console.log("Error",error)
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
        <button onClick={HandleSignUp}>Continue</button>
        <p className="signup-login">Already have an account? <span><Link to="/login">Sign up here</Link></span></p>
        <div className="signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
