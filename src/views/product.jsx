import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/context.js";
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const { store } = useContext(Context);
  const { products } = store;
  const [product, setProduct] = useState({});

  useEffect(() => {
    productSelected();
  });
  useEffect(() => {}, [product]);

  const productSelected = () => {
    const productId = parseInt(id);
    const qwerty = products.find((product) => product.id === productId);
    if (qwerty) {
      setProduct(qwerty);
    } else {
      console.log("producto no encontrado");
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="container py-5">
      <div className="row col-12 shadow-lg bg-light">
        <div className="col-md-6 col-12 px-0">
          <Carousel
            first={product.first}
            second={product.second}
            third={product.third}
          />
        </div>
        <div className="col-md-6 col-12 ">
          <div className="py-5">
            <h1>{product.name}</h1>
            <hr />
            <h3>Marca: {product.brand}</h3>
            <hr />
            <h5>Descripción:</h5>
            <h5>{product.description}</h5>
            <br />
            <hr />
            <div className="pt-5 mt-5">
              <h2>Valor: ${product.price}</h2>
              <br />
              <Link target="blank" to={product.url}>
                <img
                  src="https://www.flow.cl/img/botones/btn-pagar-negro.png"
                  alt="https://www.flow.cl/img/botones/btn-pagar-negro.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
