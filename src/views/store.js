
import Card from "../components/card";
import { useContext } from "react";
import { Context } from "../store/context";
import '../App.css'

const Store = () => {
  const { store } = useContext(Context);
  const { products } = store;
  console.log(products)
  return (
    <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh", background:"#f8f8f8" }}
          className="col-12 p-4 shadow m-2"
        >
          <div className="row banner">
            <div className="col align-self-center">
            <h1 className="text-center text-white">TIENDA</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-around  mt-4">
            <h4 className="text-dark">PRODUCTOS</h4>
            <hr className="border border-dark"></hr>
            {products.length > 0 ? (
              products.map((item) => (
                <Card
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  id={item.id}
                  first={item.first}
                  brand={item.brand}
                  url={item.url}
                  
                />
              ))
            ) : (
              <p>No hay productos para mostrar.</p>
            )}
          </div>
        </div>
      </div>
  );
};
export default Store;