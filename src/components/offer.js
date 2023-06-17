import { useContext, useEffect } from "react";
import { Context } from "../store/context";

const Offer = () => {
  const { store } = useContext(Context);
  const { onSale } = store;

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    return onSale.map((item) => (
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
    <div className="container col-md-6 col-12  d-flex justify-content-center my-4">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.postimg.cc/8cm2dg2n/logo-Peque-a.png"
              className="d-block w-100"
              alt="https://i.postimg.cc/8cm2dg2n/logo-Peque-a.png"
            />
          </div>
          {getProducts()}
        </div>
      </div>
    </div>
  );
};

export default Offer;
