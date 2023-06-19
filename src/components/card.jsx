import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container col-lg-4 my-2 col-12 d-flex justify-content-center">
      <div 
      style={{background:"#a6a6a6", borderRadius:"0"}}
      className="card p-2 col-10 shadow">
        <div className="card-img shadow">
          <img src={props.first} className="card-img-top" alt={props.name} />
        </div>
        <hr />
        <h4 className="card-title text-white">
          {props.name}
        </h4>
        <h4 className="card-title text-white">
          Precio: $ {props.price}
        </h4>
        <div className="d-flex justify-content-between">
          <Link
           style={{ background: "#e2c08d", color: "white", borderRadius:"0" }}
            to={props.url}
            target="blank"
            className="btn btn-secondary shadow col-5"
          >
            Comprar
          </Link>
          <Link 
           style={{ background: "#2b3651", color: "white", borderRadius:"0" }}
          to={"product/" + props.id} className="btn btn-success col-5">
            Leer más...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
