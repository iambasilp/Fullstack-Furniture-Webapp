import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Components/Shared/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
