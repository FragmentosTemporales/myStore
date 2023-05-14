import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

function NavBar() {
  const { store } = useContext(Context);
  const { cart } = store;

  return (
    <div className="row sticky-top" id="navbar">
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-center shadow"
        style={{ backgroundColor: "#393939" }}
      >
        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="text-white">MiStore</h1>
          </Link>
          <div className="container d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                id="btn-navbar"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-cart-fill"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {cart.length === 0 ? (
                  <div className="dropdown-item">Carro vacío</div>
                ) : (
                  cart.map((item) => (
                    <div key={item.nombre} className="dropdown-item">
                      <span className="p-1">{item.nombre}</span>
                      <span className="p-1">{item.precio}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
