import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import Home from "./views/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import About from "./views/about";
import Product from "./views/product";
import NewStore from "./views/newStore";


function App() {
  return (
    <div
    style={{background: "#595959"}}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<NewStore />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/product/:id" element={<Product/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
