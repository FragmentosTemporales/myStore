function Carousel(props) {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
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
      </div>
    </div>
  );
}
export default Carousel;
