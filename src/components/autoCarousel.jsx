
export default function autoCarousel() {
    return (
        <div>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={props.first}
                  className="d-block w-100"
                  alt={props.first}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.second}
                  className="d-block w-100"
                  alt={props.second}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.third}
                  className="d-block w-100"
                  alt={props.third}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );
}
