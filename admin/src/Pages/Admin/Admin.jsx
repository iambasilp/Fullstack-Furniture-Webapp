import React from "react";
import './Admin.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Routes,Route} from 'react-router-dom'
import ListProduct from "../../Components/ProductList/ListProduct";
import UserList from "../../Components/UserList/UserList";
const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default Admin;
