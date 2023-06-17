import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {

  return (
    <div className="row sticky-top" id="navbar">
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-center shadow"
        style={{ backgroundColor: "#a6a6a6" }}
      >
        <div className="d-flex justify-content-center">
          <Link to="/" style={{ textDecoration: "none" }}>
          <img style={{maxHeight: "80px"}} src="https://i.postimg.cc/8cm2dg2n/logo-Peque-a.png" alt="logo"/>
          </Link>
        </div>
        <div>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
