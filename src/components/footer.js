import MapView from "../components/mapa/MapView";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#393939" }}
    >
      <div className="container flex-column p-4">
        <div className="row border col-12">
        <div className="p-4 col-12 col-md-6 border">
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
        <div className="p-4 col-12 col-md-6 border">
          <h4 className="text-white text-center">¿Dónde encontrarnos?</h4>
          <div className="border">
            <MapView />
          </div>
        </div>
        </div>
        <div className="row border col-12">
        <div className="p-4 col-12 col-md-6 border">
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
        <div className="p-4 col-12 col-md-6 border">
          <h4 className="text-white text-center">¿Dónde encontrarnos?</h4>
          <div className="border">
            <MapView />
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
