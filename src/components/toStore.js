import { Link } from "react-router-dom";
import "../App.css"

const ToStore = () => {
  return (
    <div
      style={{ borderRadius: "5px", minHeight: "10vh" }}
      className="container text-center col-md-12 col-12 shadow "
    >
      <div
        className="row banner"
      >
        <div className="col align-self-center">
          <Link style={{ textDecoration: "none" }} to="/store">
            <h1 className="text-center text-white">VISITA NUESTRA TIENDA</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ToStore;
