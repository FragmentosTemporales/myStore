import { Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div
      className="card m-2 col-md-3 col-12 shadow-lg p-2"
      style={{ width: "18rem;" }}
    >
      <div className="card-img"><img src={props.url} className="card-img-top" alt={props.nombre} /></div>
      
      <div style={{ borderRadius: "5px" }} className="card-body text-center">
        <h5 className="card-title">{props.nombre}</h5>
        <h5 className="card-title">$ {props.precio}</h5>
        <div className="d-flex justify-content-between">
          <Link to={"product/" + props.id} className="btn btn-secondary shadow">
            Leer más...
          </Link>
          <button href="#" className="btn btn-warning shadow">
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

