import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Components/Shared/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/LoginSignup/Login/Login";
import Signup from "./Pages/LoginSignup/Signup/Signup";
import Payment from "./Components/Private/Payment/Payment";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/livingroom"
            element={<ShopCategory category="livingroom" />}
          />
          <Route
            path="/bedroom"
            element={<ShopCategory category="bedroom" />}
          />
          <Route path="/dining" element={<ShopCategory category="dining" />} />
          <Route path="/decor" element={<ShopCategory category="decor" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="payment" element={<Payment />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
