import { Link } from "react-router-dom";
import "../App.css";

const Product3 = () => {
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
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341545530_6080935218650485_3929791252879881754_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGAw34cz9O72RB59RRdLmIH1nHxDvb2CejWcfEO9vYJ6PGQu7bvB6zX-w62W1FzNH7FI9oYq1WeZHNel_O_7ES-&_nc_ohc=raBxKeZoFTgAX-dGqBu&_nc_ht=scontent.fscl14-1.fna&oh=00_AfDqpMtT1Inkch1aiLAPYuboRWEAPUjPZcMQVy2VWSTvBw&oe=64658EC9"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/340502102_5916823648439364_670102641550302299_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEEmpkIXdkcvyX0oOv6Wtxi2keO-S9NafraR475L01p-h_kQuULndWjRzWRnDK7tgBREzfQwWUF-LuDhtRhq2Fe&_nc_ohc=PPBEoY45NaAAX8cWbpA&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA6PkFy9Aun-0yG7dkYsEviYJ-paIGtBqSaMBC7_BgLCA&oe=6466BE3F"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341944766_6144985798913105_5494203014352520525_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFTY2lsY31A4s5nCRRHm9F1luEyZs904s2W4TJmz3TizVi17SSER4gAAEl6nhQ_1eru2GrCBWmncC-kCvotdH6G&_nc_ohc=YYyrPPrl9l4AX_Bm0tm&_nc_ht=scontent.fscl14-1.fna&oh=00_AfBaMoX58ieq6ck8rRxary7u_ytd_WDLFebZ2PtaxrAZbg&oe=6466D8B5"
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
                <h2 className="card-title">V7</h2>
                <h3>EJEAS</h3>
                <br></br>
                <h5>Valor unitario:</h5>
                <h5 className="card-title">$ 50.000</h5>
                <br></br>
                <h6>Kit de intercomunicadores v7, paquete unitario.</h6>
                <h6>Alcance: 700 mts</h6>
                <h6>Bateria: 750mh</h6>
                <h6>Intercom: si</h6>
                <Link to="https://www.flow.cl/btn.php?token=ayi93no">
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

export default Product3;