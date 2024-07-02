import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Components/Shared/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product/Product";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";

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
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
