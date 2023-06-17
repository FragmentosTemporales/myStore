import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Store from "./views/store";
import About from "./views/about";
import Product from "./views/product";

function App() {
  return (
    <div
    style={{background: "#595959"}}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/product/:id" element={<Product/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
