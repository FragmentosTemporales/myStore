import Dispatch from "../components/dispatch";
import Offer from "../components/offer";
import ToStore from "../components/toStore";
import "../App.css"

const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh", background:"#f8f8f8"}}
          className="col-md-10 col-10 p-4 shadow m-2 bg-light"
        >
          <ToStore/>
          <hr></hr>
          <h1 className="text-center bg-danger text-white shadow banner py-3">
            EN SU MEJOR PRECIO
          </h1>
          <hr></hr>
          <Offer />
          <hr></hr>
          <Dispatch/>
        </div>
      </div>
  );
};
export default Home;
