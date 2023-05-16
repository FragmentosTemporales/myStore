import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Store from "./views/store";
import About from "./views/about";
import Product from "./views/product";
import Product2 from "./views/product2";
import Product3 from "./views/product3";
import Product4 from "./views/product4";
import Product5 from "./views/product5";
import Product6 from "./views/product6";
import Product7 from "./views/product7";

function App() {
  return (
    <div
    style={{
      backgroundImage: `url('https://wallpapercave.com/wp/wp5812312.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product6" element={<Product6 />} />
          <Route path="/product7" element={<Product7 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
