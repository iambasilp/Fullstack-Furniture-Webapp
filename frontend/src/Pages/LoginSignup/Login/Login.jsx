import React, { useContext, useEffect, useState } from "react";
import { loginUser } from "../../../Redux/Slices/UserSlice";
import "./Login.css";
import ScrollReveal from "scrollreveal";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, error, isLoading } = useSelector((state) => state.users);
  console.log(currentUser);
  

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".login-container", {
      delay: 200,
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      distance: "50px",
      interval: 150,
    });

    ScrollReveal().reveal(".login-fields input, .login-fields button", {
      delay: 200,
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      distance: "30px",
      interval: 100,
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    navigate("/")
  };
  return (
    <div className="login">
      <form className="login-container" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit" disabled={isLoading}>Login</button>
        
        <p className="login-signup">
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up here</Link>
          </span>
        </p>
       
      </form>
     
    </div>
  );
};

export default Login;
