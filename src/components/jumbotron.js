
const Jumbotron = () => {
  let photo = {
    backgroundImage: `url('https://i.ytimg.com/vi/l9ok5TVhHes/maxresdefault.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      <div className="p-5 text-center" style={photo}>
          <div className="container py-5">
            <h1 className="text-body-emphasis text-light">Somos MiStore</h1>
            <p className="col-lg-9 mx-auto lead text-light mb-5">
              <strong>
                miStore es tu tienda de accesorios para motociclistas favorita. Creada en el año 2020, ofrecemos una amplia variedad de productos de calidad para
                mejorar tu experiencia en la carretera, desde cascos hasta
                guantes, chaquetas y más. También contamos con herramientas y
                piezas para el mantenimiento de tu moto. Nuestro personal
                experto te ayudará a encontrar todo lo que necesitas para
                disfrutar al máximo de tus aventuras en moto. Visítanos hoy
                mismo en nuestro local o en línea para ver todo lo que tenemos
                para ofrecer.
              </strong>
            </p>
          </div>
        </div>
    </div>
  );
};
export default Jumbotron;
