import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container col-lg-4 my-2 col-12 d-flex justify-content-center">
      <div className="card p-2 col-10 shadow">
        <h4 className="card-title text-center text-white bg-secondary">
          {props.name}
        </h4>
        <hr />
        <div className="card-img shadow">
          <img src={props.first} className="card-img-top" alt={props.name} />
        </div>
        <hr />
        <h4 className="text-center text-white">{props.brand}</h4>
        <h4 className="card-title text-center text-white bg-danger shadow">
          $ {props.price}
        </h4>
        <div className="d-flex justify-content-between">
          <Link
            to={props.url}
            target="blank"
            className="btn btn-secondary shadow col-5"
          >
            Comprar
          </Link>
          <Link to={"product/" + props.id} className="btn btn-success col-5">
            Leer más...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
