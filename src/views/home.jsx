import ToStore from "../components/toStore";
import Payment from "../components/payment";
import DispatchOptions from "../components/dispatchOptions";

const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <div className="col-md-12 col-12 p-4 shadow m-2 bg-white">
          <ToStore/>
          <hr />
          <h1 className="text-center">MEDIOS DE PAGO DIGITAL</h1>
          <hr />
          <Payment/>
          <br></br>
          <hr />
          <h1 className="text-center">DESPACHO A TODO CHILE</h1>
          <hr />
          <DispatchOptions/>
        </div>
      </div>
  );
};
export default Home;
