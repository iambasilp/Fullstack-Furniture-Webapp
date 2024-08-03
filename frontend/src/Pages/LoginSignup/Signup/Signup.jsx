import React, { useContext, useEffect, useState } from 'react';
import { signupUser } from '../../../Redux/Slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Signup.css';
import ScrollReveal from 'scrollreveal';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';

const Signup = () => {
  const disptach = useDispatch()
  const navigate = useNavigate()
  const { newUser, error, isLoading } = useSelector((state) => state.users);
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



  const handleSubmit = (e)=>{
    console.log(e);
    e.preventDefault()
    disptach(signupUser({name,email,password}))
    navigate('/login')
  }

  return (
    <div className='signup'>
      <form className="signup-container" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Your Name' />
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address' />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        </div>
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type='submit' disabled={isLoading}>Continue</button>
        <p className="signup-login">Already have an account? <span><Link to="/login">Login here</Link></span></p>
        <div className="signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  );
};

export default Signup;