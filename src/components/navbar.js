import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {

  return (
    <div className="row sticky-top" id="navbar">
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-center shadow"
        style={{ backgroundColor: "#393939" }}
      >
        <div className="d-flex justify-content-center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="text-white">Erre Import</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
