import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url('https://i.ytimg.com/vi/l9ok5TVhHes/maxresdefault.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container d-flex">
        <div className="row"></div>
        <div className="col-md-3 col-3 p-4 border shadow m-2 bg-light">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h6 className="border shadow p-2">QUIENES SOMOS</h6>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h6 className="border shadow p-2">ACCESORIOS MOTOCICLISTAS</h6>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h6 className="border shadow p-2">INFORMACIÓN DE DESPACHO</h6>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h6 className="border shadow p-2">FORMAS DE PAGO</h6>
          </Link>
        </div>
        <div
          style={{ borderRadius: "5px", minHeight: "60vh" }}
          className="col-md-9 col-9 p-4 border shadow m-2 bg-light"
        >
          <h1 className="text-center">HOME</h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
