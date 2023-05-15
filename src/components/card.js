import { Link } from "react-router-dom";
import {Context} from '../store/context'
import { useContext } from "react";

const Card = (props) => {
  
const {actions, store} = useContext(Context);
const handleSubmit = () => {
  const product = {
    nombre: props.nombre,
    id: props.id,
    precio: props.precio
  };
  actions.addCart(product);
};

  return (
    <div
      className="card m-2 col-md-3 col-12 shadow-lg p-2"
      style={{ width: "18rem;", backgroundColor: "#212529" }}
    >
      <h4 className="card-title text-center text-white bg-secondary shadow">
        {props.nombre}
      </h4>
      <hr></hr>
      <div className="card-img shadow">
        <img src={props.url} className="card-img-top" alt={props.nombre} />
      </div>
      <hr></hr>
      <h4 className="card-title text-center text-white bg-danger shadow">
        $ {props.precio}
      </h4>
      <div className="d-flex justify-content-between">
        <Link to={"product/" + props.id} className="btn btn-secondary shadow">
          Leer más...
        </Link>
        <button 
        onClick={handleSubmit}
        href="#" className="btn btn-warning shadow">
          <i className="bi bi-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
