import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Components/Shared/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product/Product";

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
          <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
