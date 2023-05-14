
import Card from "../components/card";
import { useContext } from "react";
import { Context } from "../store/context";
import '../App.css'

const Store = () => {
  const { store } = useContext(Context);
  const { intercomunicadores, repuestos, cascos, chaquetas, guantes } = store;
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh" }}
          className="col-md-10 col-12 p-4 border shadow m-2 bg-light"
        >
          <div className="row banner">
            <div className="col align-self-center">
            <h1 className="text-center text-white">TIENDA</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-around mt-4">
            <h4 className="bg-dark text-white">INTERCOMUNICADORES</h4>
            <hr className="border border-dark"></hr>
            {intercomunicadores.length > 0 ? (
              intercomunicadores.map((item) => (
                <Card
                  key={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  descripcion={item.descripcion}
                  id={item.id}
                  url={item.url}
                />
              ))
            ) : (
              <p>No hay productos para mostrar.</p>
            )}
          </div>
          <div className="row d-flex justify-content-around mt-4">
            <h4 className="bg-dark text-white">CASCOS</h4>
            <hr className="border border-dark"></hr>
            {cascos.length > 0 ? (
              cascos.map((item) => (
                <Card
                  key={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  descripcion={item.descripcion}
                  id={item.id}
                  url={item.url}
                />
              ))
            ) : (
              <p>No hay productos para mostrar.</p>
            )}
          </div>
          <div className="row d-flex justify-content-around mt-4">
            <h4 className="bg-dark text-white">REPUESTOS</h4>
            <hr className="border border-dark"></hr>
            {repuestos.length > 0 ? (
              repuestos.map((item) => (
                <Card
                  key={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  descripcion={item.descripcion}
                  id={item.id}
                  url={item.url}
                />
              ))
            ) : (
              <p>No hay productos para mostrar.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;