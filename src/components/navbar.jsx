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
            style={{ background: "#2b3651", color: "white", borderRadius:"0" }}
            className="btn shadow dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            MENU
          </button>
          <ul 
          style={{borderRadius:"0", minWidth:"300px"}}
          className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                style={{ textDecoration: "none" }}
                to="/"
              >
                <h6>INICIO</h6>
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                style={{ textDecoration: "none" }}
                to="/store"
              >
                <h6>TIENDA</h6>
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                style={{ textDecoration: "none" }}
                to="/about"
              >
                <h6>INFORMACION</h6>
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
