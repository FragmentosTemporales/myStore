import { Link } from "react-router-dom";
const Target = (props) => {
  return (
    <div
      className="container m-2 col-md-12 col-12 shadow-lg p-2"
      style={{ width: "18rem;" }}
    >
      <div className="row">
        <div id="carouselExample" className="carousel slide col-md-5 col-12">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329398052_9744171245608822_2643052707542626726_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHpeXrvlI-ugijoiIkceSP_Wd5CKrXdUxNZ3kIqtd1TE0KMQoJ6CsNAqbZZau97eEMNiBB62e8keB2oBC7JHWwx&_nc_ohc=LMzjLd79WRQAX8g8DbZ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9leJ57Xe7yWKDzXKre2CHbO7Dm-oQULUfvdiR7_MPCQ&oe=6465EA07"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329728077_5898131300299484_497858422900834979_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEfMB0Ghj8dHDgd14DL2djrtmVt-5652f-2ZW37nrnZ_6pl9kCycBlpmqb2_U1WtS1LVvtQttJC1jzHgcZhnfEs&_nc_ohc=nKJWA16V3l8AX8Qb1uF&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9n1pZazQ536l8IiTe414c9m7o8M1QM2t3p9FZcprjhA&oe=6465AF45"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329231974_6195951457116246_3049513051746012957_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHZOU19yaOcb-SqFxXpwShm0trnKH-wI-jS2ucof7Aj6MrN433inleHvq7ANdSLWk0DqS-Soc0puKEPDfBhacc5&_nc_ohc=X-HPjm7MCNwAX_ql8tz&_nc_ht=scontent.fscl14-1.fna&oh=00_AfC2I11DV5MZ-vEg3sl8C2wRMGz4mCWXX6YbInjVGKk55g&oe=646585E1"
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
          className="card-body col-md-6 col-12"
        >
          <h2 className="card-title">EJEAS v6 Pro</h2>
          <br></br>
          <h5 className="card-title">$ 50.000</h5>
          <br></br>
          <h6>Intercomunicador v6 Pro, paquete unitario.</h6>
          <h6>Alcance: 1200 mts</h6>
          <h6>Bateria: 850mh</h6>
          <h6>Cámara: no</h6>
          <h6>Intercom: si</h6>
          <Link to="https://www.flow.cl/app/web/pagarBtnPago.php?token=6tmgwar">
          <img src="https://www.flow.cl/img/botones/btn-pagar-celeste.png" alt="pay"></img>
          </Link>

          <div className="d-flex justify-content-between">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
