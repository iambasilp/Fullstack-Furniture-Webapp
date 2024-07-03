import React, { useEffect, useState } from 'react';
import './Login.css';
import ScrollReveal from 'scrollreveal';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Navigate = useNavigate()

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
  const HandleLogin = async()=>{
    try{
    const response = await fetch ('http://localhost:3000/users')
    const users = await response.json()
    const user = users.find((user)=>user.email===email && user.password===password)
    if(user){
      alert("Login Successfully")
      localStorage.setItem('currentUser',JSON.stringify(user))
      Navigate("/")

    }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address' />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        </div>
        <button onClick={HandleLogin}>Login</button>
        <p className="login-signup">Don't have an account? <span><Link to="/signup">Sign up here</Link></span></p>
      </div>
    </div>
  );
};

export default Login;
