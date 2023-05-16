import { Link } from "react-router-dom";
import { Context } from "../store/context";
import { useContext } from "react";

const Card = (props) => {
  const { actions, store } = useContext(Context);
  const { cart } = store;

  const handleSubmit = () => {
    const product = {
      nombre: props.nombre,
      id: props.id,
      precio: props.precio,
    };
    actions.addCart(product);
  };

  const handleRemove = () => {
    const product = {
      nombre: props.nombre,
      id: props.id,
      precio: props.precio,
    };
    actions.removeFromCart(product);
  };

  // Verificar si existe un producto en el carrito con el mismo ID
  const isProductInCart = cart.some((product) => product.id === props.id);
  const buttonClassName = isProductInCart
    ? "btn btn-danger shadow"
    : "btn btn-warning shadow";
  const onClickFunction = isProductInCart ? handleRemove : handleSubmit;
  const bottonIcon = isProductInCart ? <i class="bi bi-cart-dash-fill"></i> : <i className="bi bi-cart-plus"></i>;

  return (
    <div
      className="card m-2 col-md-3 col-12 shadow-lg p-2"
      style={{ width: "18rem", backgroundColor: "#212529" }}
    >
      <h4 className="card-title text-center text-white bg-secondary shadow">
        {props.nombre}
      </h4>
      <hr />
      <div className="card-img shadow">
        <img src={props.url} className="card-img-top" alt={props.nombre} />
      </div>
      <hr />
      <h4 className="card-title text-center text-white bg-danger shadow">
        $ {props.precio}
      </h4>
      <div className="d-flex justify-content-between">
        <Link to={"product/" + props.id} className="btn btn-secondary shadow">
          Leer más...
        </Link>
        <button onClick={onClickFunction} href="#" className={buttonClassName}>
          {bottonIcon}
        </button>
      </div>
    </div>
  );
};

export default Card;


