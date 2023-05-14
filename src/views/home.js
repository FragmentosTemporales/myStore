import Offer from "../components/offer";
import ToStore from "../components/toStore";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh" }}
          className="col-md-10 col-10 p-4 shadow m-2 bg-light"
        >
          <ToStore/>
          <hr></hr>
          <h3 className="text-center bg-danger text-white shadow">
            PRODUCTOS DESTACADOS
          </h3>
          <hr></hr>
          <Offer />
        </div>
      </div>
    </div>
  );
};
export default Home;
