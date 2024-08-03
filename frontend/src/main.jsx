import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import ProductContextProvider from "./Context/ProductContext.jsx";
import CartContextProvider from "./Context/CartContext.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </CartContextProvider>
        </UserContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
