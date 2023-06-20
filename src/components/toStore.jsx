import { Link } from "react-router-dom";
import "../App.css";
import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import Dispatch from "./dispatch";

const ToStore = () => {
  const { store } = useContext(Context);
  const { products } = store;

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    return products.map((item) => (
      <div className="carousel-item" key={item.id}>
        <img src={item.first} className="d-block w-100" alt={item.first} />
      </div>
    ));
  }
  return (
    <Link style={{ textDecoration: "none" }} to="/store">
      <Dispatch text="MIRA NUESTRA TIENDA..." />      
    </Link>
  );
};
export default ToStore;
