import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";
import "../App.css";

function NavBar() {
  const { store, actions } = useContext(Context);
  const { cart } = store;
  const { clearCart } = actions;

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
                className="btn btn-warning dropdown-toggle position-relative"
                id="btn-navbar"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-cart-fill"></i>
                {cart.length === 0 ? (<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>) : (<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>)}

                
              </button>
              <div
                style={{ minWidth: "300px" }}
                className="dropdown-menu dropdown-menu-end"
              >
                {cart.length === 0 ? (
                  <div className="dropdown-item text-center">Carro vacío</div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="dropdown-item container d-flex justify-content-between shadow pt-2"
                    >
                      <h6>{item.nombre}</h6> <h6> $ {item.precio}</h6>
                    </div>
                  ))
                )}
                <hr></hr>
                <div className="container d-flex justify-content-end">
                  <button className="btn btn-danger" onClick={clearCart}>
                    <i class="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
