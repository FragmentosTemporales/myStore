import MapView from "../components/mapa/MapView";
import { Link } from "react-router-dom";
import Whatsapp from "./wsp";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#393939" }}
    >
      <div className="container flex-column p-4">
        <div className="row  col-12">
          <div className="p-4 col-12 col-md-3 ">
            <h4 className="text-white">Contáctanos</h4>
            <div className="col-3">
              <Link
                to="https://www.instagram.com/fragmentos_temporales/"
                target="blank"
              >
                <i className="text-white bi bi-instagram"></i>
              </Link>
            </div>
            <div className="col-3">
              <Link
                to="https://www.facebook.com/fragmentos.temporales"
                target="blank"
              >
                <i className="text-white bi bi-facebook"></i>
              </Link>
            </div>
            <div className="col-3">
              <Link to="https://github.com/FragmentosTemporales"
              target="blank"
              >
                <i class="text-white bi bi-github" />
              </Link>
            </div>
          </div>
          <div className="p-4 col-12 col-md-3 ">
            <h4 className="text-white">Más sobre nosotros</h4>
            <div>
              <p className="text-white">Texto con enlace</p>
            </div>
            <div>
              <p className="text-white">Texto con enlace</p>
            </div>
            <div>
              <p className="text-white">Texto con enlace</p>
            </div>
            <div>
              <p className="text-white">Texto con enlace</p>
            </div>
          </div>
          <div className="p-4 col-12 col-md-6 ">
            <h4 className="text-white">¿Dónde encontrarnos?</h4>
            <div className="">
              <MapView />
            </div>
          </div>
        </div>
        <div className="row  col-12">
          <div className="p-4 col-12 col-md-12  text-center">
            <p className="text-white">
              MiStore Ltda. - San Miguel 851 - Tel. 56963410066
            </p>
          </div>
        </div>
      </div>
      <Whatsapp />
    </nav>
  );
};

export default Footer;