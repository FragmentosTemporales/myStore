import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="sticky-top" id="navbar">
      <nav
        className="navbar navbar-expand-lg container-fluid px-5 shadow"
        style={{ backgroundColor: "#a6a6a6" }}
      >
        <div className="dropdown col-6 d-flex justify-content-start">
          <button
            style={{ background: "#2b3651", color: "white" }}
            className="btn shadow dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Enlaces
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                style={{ textDecoration: "none" }}
                to="/store"
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                style={{ textDecoration: "none" }}
                to="/about"
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img
            style={{ maxHeight: "80px" }}
            src="https://i.postimg.cc/8cm2dg2n/logo-Peque-a.png"
            alt="logo"
          />
        </div>
        <div></div>
      </nav>
    </div>
  );
}

export default NavBar;
