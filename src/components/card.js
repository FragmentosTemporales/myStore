import { Link } from "react-router-dom";

const Card = (props) => {

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
      <h4 className="text-center text-white">{props.marca}</h4>
      <h4 className="card-title text-center text-white bg-danger shadow">
        $ {props.precio}
      </h4>
      <div className="d-flex justify-content-between">
        
        <Link to={props.path} className="btn btn-secondary shadow col-5">
          Leer más...
        </Link>
        <Link  to={props.flow} target="blank" className="btn btn-success col-5">
        Comprar
        </Link>
      </div>
    </div>
  );
};

export default Card;


