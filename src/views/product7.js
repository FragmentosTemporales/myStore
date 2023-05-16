import { Link } from "react-router-dom";
import "../App.css";

const Product7 = () => {
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
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333734850_6141141112610358_7165301101975818749_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHVQ_NR0UGU4SF5f042elQcN4TPqKl2rEg3hM-oqXasSCRrud18Fz2lGoSxpMf4FQzXFaXWn7I9GkIHqoLOKVjQ&_nc_ohc=9I2MxANrcEAAX8V4cMY&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA3OhYaU8nV67LSLf0iXd7ZeGGI2s_0G2ZNO641IZp-wA&oe=64658489"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333734850_6141141112610358_7165301101975818749_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHVQ_NR0UGU4SF5f042elQcN4TPqKl2rEg3hM-oqXasSCRrud18Fz2lGoSxpMf4FQzXFaXWn7I9GkIHqoLOKVjQ&_nc_ohc=9I2MxANrcEAAX8V4cMY&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA3OhYaU8nV67LSLf0iXd7ZeGGI2s_0G2ZNO641IZp-wA&oe=64658489"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333734850_6141141112610358_7165301101975818749_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHVQ_NR0UGU4SF5f042elQcN4TPqKl2rEg3hM-oqXasSCRrud18Fz2lGoSxpMf4FQzXFaXWn7I9GkIHqoLOKVjQ&_nc_ohc=9I2MxANrcEAAX8V4cMY&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA3OhYaU8nV67LSLf0iXd7ZeGGI2s_0G2ZNO641IZp-wA&oe=64658489"
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
                <h2 className="card-title">PINZA V6 PRO</h2>
                <h3>EJEAS</h3>
                <br></br>
                <h5>Valor unitario:</h5>
                <h5 className="card-title">$ 7.000</h5>
                <br></br>
                <h6>Repuesto v6 Pro.</h6>
                <Link to="https://www.flow.cl/btn.php?token=crpzrdu">
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

export default Product7;