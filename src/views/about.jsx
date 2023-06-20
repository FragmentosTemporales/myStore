import MapView from "../components/map/MapView";
import Payment from "../components/payment";
import DispatchOptions from "../components/dispatchOptions";
const About = () => {
  

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-md-12 col-12 p-4 border shadow m-2 bg-white">
          <h1 className="text-center">PREGUNTAS FRECUENTES</h1>
          <hr />
          <div className="container col-10 pt-3 pb-3">
            <h4>¿QUIÉNES SOMOS?</h4>
            <h6 style={{ textAlign: "justify" }}>
              Erre Import es una empresa fundada en 2020 que se especializa en
              la venta de accesorios para motociclistas, destacándose en
              intercomunicadores y sus repuestos. Ofrecemos productos de alta
              calidad a precios competitivos, y trabajamos con las principales
              marcas del mercado. Además, contamos con un equipo de
              profesionales experimentados en el sector de la motocicleta, lo
              que nos permite brindar un servicio personalizado y de alta
              calidad a nuestros clientes. En Erre Import, estamos comprometidos
              con la satisfacción de nuestros clientes y nos esforzamos por
              ofrecer la mejor experiencia de compra posible.
            </h6>
          </div>
          <hr className="border border-dark"></hr>
          <div className="container col-10 pt-3 pb-3">
            <h4>¿DÓNDE ESTAMOS UBICADOS?</h4>
            <h6 style={{ textAlign: "justify" }}>
              Estamos ubicados en la comuna de San Miguel, Región Metropolitana.
              Las estaciones de Metro más cercanas son "San Miguel" y "El
              Llano", a continuación un mapa de referencia:
            </h6>
            <MapView />
          </div>
          <hr className="border border-dark"></hr>
          <div className="container col-10 pt-3 pb-3">
            <h4>¿QUÉ MEDIOS DE PAGO ACEPTAMOS?</h4>
            <h6 style={{ textAlign: "justify" }}>
              Tenemos implementado el sistema de pago en efectivo y
              transferencia de manera presencial. FLOW, Crédito o débito sólo en
              página web.
            </h6>
            <Payment/>
          </div>
          <hr className="border border-dark"></hr>
          <div className="container col-10 pt-3 pb-3">
            <h4>¿COMO REALIZAMOS LAS ENTREGAS?</h4>
            <h6 style={{ textAlign: "justify" }}>
              Las entregas fuera de Santiago se realizan 2 veces a la semana,
              Martes y Viernes. Se utiliza Starken o Chilexpress, dentro de la
              Región Metropolitana se puede gestionar la entrega directamente
              con el asistente de venta.
            </h6>
            <DispatchOptions/>
          </div>
      </div>
    </div>
  );
};
export default About;
