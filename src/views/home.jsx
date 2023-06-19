import Dispatch from "../components/dispatch";
import ToStore from "../components/toStore";
import Payment from "../components/payment";
import FlowBanner from "../components/flowBanner";
import DispatchOptions from "../components/dispatchOptions";

const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
        <div className="col-md-10 col-10 p-4 border shadow m-2 bg-white">
          <ToStore/>
          <Dispatch
          text="MEDIOS DE PAGO DIGITAL"/>
          <br></br>
          <FlowBanner/>
          <hr></hr>
          <Payment/>
          <br></br>
          <Dispatch
          text="DESPACHO A TODO CHILE"/>
          <DispatchOptions/>
        </div>
      </div>
  );
};
export default Home;
