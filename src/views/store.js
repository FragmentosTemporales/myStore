
import Card from "../components/card";
import { useContext } from "react";
import { Context } from "../store/context";
import '../App.css'

const Store = () => {
  const { store } = useContext(Context);
  const { productos } = store;
  return (
    <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh", background:"#f8f8f8" }}
          className="col-md-10 col-12 p-4 shadow m-2"
        >
          <div className="row banner">
            <div className="col align-self-center">
            <h1 className="text-center text-white">TIENDA</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-4">
            <h4 className="text-dark">PRODUCTOS</h4>
            <hr className="border border-dark"></hr>
            {productos.length > 0 ? (
              productos.map((item) => (
                <Card
                  key={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  descripcion={item.descripcion}
                  id={item.id}
                  url={item.url}
                  marca={item.marca}
                  path={item.path}
                  flow={item.flowurl}
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