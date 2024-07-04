import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { json } from "react-router-dom";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [NewUser, setNewUser] = useState(null);
  const [CurrentUser,setCurrentUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('CurrentUser')
    setCurrentUser(JSON.parse(stored))
  }, []);
  const Login = async (email, password) => {
    try {
      console.log(email, password);
      const response = await fetch("http://localhost:3000/users");
      const Users = await response.json();
      const user = Users.find(
        (user) => user.email === email && user.password === password
      );
      if(user){
        localStorage.setItem('CurrentUser',JSON.stringify(user))
        setCurrentUser(user)
        return {success:true,message:"Login Successfully Completed"}
      }else{
        return {success:false,message:"Login Failed"}
      }
    } catch (error) {
      console.log("Fetch Error", error);
    }
  };
  const Signup = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        const NewUser = await response.json();
        localStorage.setItem("NewUser", JSON.stringify(NewUser));
        setNewUser(NewUser);
        return { success: true, message: "Sign Up SuccessFully" };
      } else {
        return { success: false, message: "Sign Up Failed" };
      }
    } catch (error) {
      console.log("Fetch Error", error);
    }
  };
  const handleLogout = ()=>{
    alert("Are you sure you need to Logout")
    localStorage.removeItem('CurrentUser')
    setCurrentUser(null)
  }
  return (
    <UserContext.Provider value={{ Signup, Login, CurrentUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
