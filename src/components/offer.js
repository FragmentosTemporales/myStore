import { Link } from "react-router-dom";
const Offer = () => {
    return (
      <div 
        style={{ borderRadius: "5px",  background:"#212529" }}
        className="shadow d-flex justify-content-center">
            <div id="carouselExample" 
            className="carousel slide col-md-5 col-12">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Link to="/product"><img
                    src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329728077_5898131300299484_497858422900834979_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEfMB0Ghj8dHDgd14DL2djrtmVt-5652f-2ZW37nrnZ_6pl9kCycBlpmqb2_U1WtS1LVvtQttJC1jzHgcZhnfEs&_nc_ohc=nKJWA16V3l8AX8Qb1uF&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9n1pZazQ536l8IiTe414c9m7o8M1QM2t3p9FZcprjhA&oe=6465AF45"
                    className="d-block w-100"
                    alt="v6"
                  /></Link>
                </div>
                <div class="carousel-item">
                  <Link to="/product2"><img
                    src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329212775_5902133703205841_5193839040139355012_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEGT6_tmiCvtvmg-s8DmM1g1ZQWu9abjnrVlBa71puOep9D6S42-XOxz_yPud9EhVoNgn_IrPXn-1RloV5AcPI-&_nc_ohc=GHYwhrnBvCcAX93Lh-s&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA-UIBmrRlSV1FfYXsGkkTZCkkpmbKlW6O5fqgZCyA3fA&oe=646671F3"
                    className="d-block w-100"
                    alt="v6 kit"
                  /></Link>
                </div>
                <div class="carousel-item">
                <Link to="/product3"><img
                    src="https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341545530_6080935218650485_3929791252879881754_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGAw34cz9O72RB59RRdLmIH1nHxDvb2CejWcfEO9vYJ6PGQu7bvB6zX-w62W1FzNH7FI9oYq1WeZHNel_O_7ES-&_nc_ohc=raBxKeZoFTgAX-dGqBu&_nc_ht=scontent.fscl14-1.fna&oh=00_AfDqpMtT1Inkch1aiLAPYuboRWEAPUjPZcMQVy2VWSTvBw&oe=64658EC9"
                    className="d-block w-100"
                    alt="v6 kit"
                  /></Link>
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
            </div>
    );
  };
  export default Offer;
  