import { Link } from "react-router-dom";
import Whatsapp from "./wsp";
import "../App.css"

const Footer = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#a6a6a6" }}
    >
      <div className="container flex-column ">
        <div className="row col-12 text-center">
          <h2 className="text-white">Contáctanos</h2>
          <div className="col-12 d-flex justify-content-center">
            <div className="mx-4 social">
              <Link to="https://www.instagram.com/erre_import/" target="blank">
                <i className="text-white bi bi-instagram"></i>
              </Link>
            </div>
            <div className="mx-4 social">
              <Link
                to="https://www.facebook.com/fragmentos.temporales"
                target="blank"
              >
                <i className="text-white bi bi-facebook"></i>
              </Link>
            </div>
            <div className="mx-4 social">
              <Link
                to="https://www.facebook.com/fragmentos.temporales"
                target="blank"
              >
                <i className="text-white bi bi-tiktok"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row col-12">
          <div className="col-12 col-md-12 pt-4 text-center">
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
