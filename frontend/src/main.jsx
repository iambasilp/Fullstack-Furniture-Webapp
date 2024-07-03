import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
