import { Link } from "react-router-dom";
import "../App.css";

const Product2 = () => {
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center">
        <div
          style={{
            borderRadius: "5px",
            minHeight: "60vh",
            background: "#f8f8f8",
          }}
          className="col-md-10 col-10 p-4 shadow m-2 bg-light"
        >
          <div className="row banner">
            <div className="col align-self-center">
              <h1 className="text-center text-white">INFORMACIÓN PRODUCTO</h1>
            </div>
          </div>

          <div className="container d-flex justify-content-center pt-4">
            <div className="row">
              <div
                id="carouselExample"
                className="carousel slide col-md-6 col-12"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329212775_5902133703205841_5193839040139355012_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEGT6_tmiCvtvmg-s8DmM1g1ZQWu9abjnrVlBa71puOep9D6S42-XOxz_yPud9EhVoNgn_IrPXn-1RloV5AcPI-&_nc_ohc=GHYwhrnBvCcAX93Lh-s&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA-UIBmrRlSV1FfYXsGkkTZCkkpmbKlW6O5fqgZCyA3fA&oe=646671F3"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329410550_5859531184128304_7472004959463933633_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGNsLgG2aqnUm99CN1-d6uBRSgcNr4Uf81FKBw2vhR_zQM85fSjGuDYZRG-KsM04kZKYmExTpDV9HP5vwBaaSKt&_nc_ohc=w-1zn5_WZrYAX8FH4Uo&_nc_ht=scontent.fscl14-1.fna&oh=00_AfCQ1MvXQ24FIbtVuIZKN1jGosENOv8DCSd2BkQeXjklbQ&oe=64666BD2"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329674670_5145406055562389_6500725580204664977_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGt79nkDaQQrNVdgZpTyN8uTDDFldyVMZZMMMWV3JUxlvpATTJKN8vS_EnFG8K-VkXboY3NprV0iVHhbY9M8mY2&_nc_ohc=7euF8fQ7u-wAX_-ccN0&_nc_ht=scontent.fscl14-1.fna&oh=00_AfCIYiev86kPSZi2cGWcuIzi0vUaw86BeHOu_IrK4nn6GA&oe=64669177"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div
                style={{ borderRadius: "5px" }}
                className="card-body col-md-6 col-12 p-3"
              >
                <h2 className="card-title">V6 Pro Kit</h2>
                <h3>EJEAS</h3>
                <br></br>
                <h5>Valor unitario:</h5>
                <h5 className="card-title">$ 80.000</h5>
                <br></br>
                <h6>Kit de intercomunicadores v6 Pro, paquete con dos unidades.</h6>
                <h6>Alcance: 1200 mts</h6>
                <h6>Bateria: 850mh</h6>
                <h6>Intercom: si</h6>
                <Link to="https://www.flow.cl/btn.php?token=2njsahq">
                  <img
                    src="https://www.flow.cl/img/botones/btn-pagar-celeste.png"
                    alt="pay"
                  ></img>
                </Link>

                <div className="d-flex justify-content-between"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;