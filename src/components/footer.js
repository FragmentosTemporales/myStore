import MapView from "../components/mapa/MapView";

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
          <div>
            <i className="text-white bi bi-instagram"></i>
          </div>
          <div>
            <i className="text-white bi bi-facebook"></i>
          </div>
          <div>
            <i className="text-white bi bi-github"></i>
          </div>
          <div>
            <i className="text-white bi bi-google"></i>
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
          <h4 className="text-white text-center">¿Dónde encontrarnos?</h4>
          <div className="">
            <MapView />
          </div>
        </div>
        </div>
        <div className="row  col-12">
        <div className="p-4 col-12 col-md-12  text-center">
          <h6 className="text-white">Copyright FragmentosTemporales 2023</h6>
          
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
