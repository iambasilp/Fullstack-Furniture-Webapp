import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import ScrollReveal from 'scrollreveal';
import { UserContext } from '../../../Context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const {Login} = useContext(UserContext)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("") 
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
  const Navigate = useNavigate()
  const handleLogin = async()=>{
   const result =  await Login(email,password)
   if(result.success){
    alert(result.message)
    Navigate('/')
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
        <button onClick={handleLogin}>Login</button>
        <p className="login-signup">Don't have an account? <span><Link to="/signup">Sign up here</Link></span></p>
      </div>
    </div>
  );
};

export default Login;