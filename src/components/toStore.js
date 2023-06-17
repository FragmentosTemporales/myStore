import { Link } from "react-router-dom";
import "../App.css";
import { useContext, useEffect } from "react";
import { Context } from "../store/context";

const ToStore = () => {
  const { store } = useContext(Context);
  const { products } = store;

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    return products.map((item) => (
      <div className="carousel-item" key={item.id}>
        <img
          src={item.first}
          className="d-block w-100"
          alt={item.first}
        />
      </div>
    ));
  }
  return (
    <Link 
    style={{ textDecoration: "none"}} to="/store">
      <h1 className="text-center text-white banner py-3">VISITA NUESTRA TIENDA</h1>
      <div className="container col-md-6 col-12  d-flex justify-content-center my-4">
      <div
        id="carouselStore"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.postimg.cc/vT83NGGJ/1000011617-ca13d3c9cd1371c7512a1d8844e9e3a1-9-3-2023-17-36-34.jpg"
              className="d-block w-100"
              alt="https://i.postimg.cc/vT83NGGJ/1000011617-ca13d3c9cd1371c7512a1d8844e9e3a1-9-3-2023-17-36-34.jpg"
            />
          </div>
          {getProducts()}
        </div>

      </div>
    </div>
    </Link>
  );
};
export default ToStore;
