import { Link } from "react-router-dom";
import Card from "../components/card";
import { useContext } from "react";
import { Context } from "../store/context";

const Store = () => {
  const { store } = useContext(Context);
  const { intercomunicadores, repuestos, cascos, chaquetas, guantes } = store;
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('https://free4kwallpapers.com/uploads/originals/2019/02/15/beautiful-highway-wallpaper.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh" }}
          className="col-md-10 col-12 p-4 border shadow m-2 bg-light"
        >
          <h1 className="text-center">TIENDA</h1>
          <div className="row d-flex justify-content-around mt-4">
            <h4 className="text-center">Intercomunicadores</h4>
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
            <h4 className="text-center">Repuestos</h4>
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
          <div className="row d-flex justify-content-around mt-4">
            <h4 className="text-center">Cascos</h4>
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
            <h4 className="text-center">Chaquetas</h4>
            <hr className="border border-dark"></hr>
            {chaquetas.length > 0 ? (
              chaquetas.map((item) => (
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
            <h4 className="text-center">Guantes</h4>
            <hr className="border border-dark"></hr>
            {guantes.length > 0 ? (
              guantes.map((item) => (
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
