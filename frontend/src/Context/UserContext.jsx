import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { json } from "react-router-dom";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('CurrentUser')
    setUser(JSON.parse(stored))
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
        setUser(user)
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
        setUser(NewUser);
        return { success: true, message: "Sign Up SuccessFully" };
      } else {
        return { success: false, message: "Sign Up Failed" };
      }
    } catch (error) {
      console.log("Fetch Error", error);
    }
  };
  return (
    <UserContext.Provider value={{ Signup, Login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
