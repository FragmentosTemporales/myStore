import { Link } from "react-router-dom";
import "../App.css";

const Product4 = () => {
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
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/332872833_6066070313470002_912978183887780328_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGPBD6ZX8Civr6UeDWiJJJiaE_E3bmFFXFoT8TduYUVcSW4UYxTotLTjE3EvVrPcod-opTQKwGGUHSItzsb5PTv&_nc_ohc=jRvC-nUu5tIAX8aX2VQ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfB1OKS5OQm99Tq3oDXmkIKCE0uHm22pnn9_YdJxIkel7A&oe=6464A07D"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333918888_5917321388363931_5446062080632748778_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEb2lTZaDgUxKTw94SS4PZADUP3_bkFDxINQ_f9uQUPErJwLUoa3cjIEuSkBG_TIqBhOgZ4bV80NEv4_WILNDIh&_nc_ohc=beAcBmZ1MmEAX_5VJ9n&_nc_ht=scontent.fscl14-1.fna&oh=00_AfAkcy05xahNZLi7qwOxW0xuGmSXn9DlDcRMD4QV6kcuKg&oe=64668A4C"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333802502_8976655512409163_5722556285993626055_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeH5XZPbKXLy-36DF85ZLDqtrL0GwCFTGTqsvQbAIVMZOgQpXXJVUaeJWmiGpehMrgpb8wJP0rPUSnmUhatzR1r8&_nc_ohc=ZvrKPbPdGuYAX8MHhGj&_nc_ht=scontent.fscl14-1.fna&oh=00_AfB_VpprLC5sHBSNxk9nCb85SwyKoUnRB9gmtlfJk556sw&oe=646679AB"
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
                <h2 className="card-title">R1 PLUS</h2>
                <h3>FREEDCON</h3>
                <br></br>
                <h5>Valor unitario:</h5>
                <h5 className="card-title">$ 120.000</h5>
                <br></br>
                <h6>Intercomunicador R1 Plus, paquete unitario.</h6>
                <h6>Alcance: 1000 mts</h6>
                <h6>Bateria: 1500mh</h6>
                <h6>Cámara: Si</h6>
                <h6>Intercom: Si</h6>
                <Link to="https://www.flow.cl/btn.php?token=exri4ni">
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

export default Product4;