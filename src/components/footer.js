import { Link } from "react-router-dom";
import Whatsapp from "./wsp";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#a6a6a6" }}
    >
      <div className="container flex-column p-4">
        <div className="row col-12">
          <div className="col-12 col-md-6">
            <h4 className="text-white">Contáctanos</h4>
            <div className="col-1 d-flex">
              <Link to="https://www.instagram.com/erre_import/" target="blank">
                <i className="text-white bi bi-instagram"></i>
              </Link>
            </div>
            <div className="col-1 d-flex">
              <Link
                to="https://www.facebook.com/fragmentos.temporales"
                target="blank"
              >
                <i className="text-white bi bi-facebook"></i>
              </Link>
            </div>
            <div className="col-1 d-flex">
              <Link
                to="https://www.facebook.com/fragmentos.temporales"
                target="blank"
              >
                <i className="text-white bi bi-tiktok"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-white">Enlaces</h4>
            <div>
              <Link
                className="text-white"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Inicio
              </Link>
            </div>
            <div>
              <Link
                className="text-white"
                style={{ textDecoration: "none" }}
                to="/store"
              >
                Tienda
              </Link>
            </div>
            <div>
              <Link
                className="text-white"
                style={{ textDecoration: "none" }}
                to="/about"
              >
                Sobre nosotros
              </Link>
            </div>
          </div>
        </div>
        <div className="row col-12">
          <div className="col-12 col-md-12 py-2 text-center">
            <p className="text-white">
              Erre Import. - San Miguel 851 - Tel. 56 9 56172015
            </p>
          </div>
        </div>
      </div>
      <Whatsapp />
    </nav>
  );
};

export default Footer;
