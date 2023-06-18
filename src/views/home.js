import Dispatch from "../components/dispatch";
import ToStore from "../components/toStore";
import "../App.css"
import Payment from "../components/payment";
import FlowBanner from "../components/flowBanner";
import DispatchOptions from "../components/dispatchOptions";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
        <div
          style={{ borderRadius: "5px", minHeight: "60vh"}}
          className="col-md-10 col-10 p-4 shadow m-2 bg-white"
        >
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
