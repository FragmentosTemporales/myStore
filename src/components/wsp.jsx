import { Link } from "react-router-dom";
import '../App.css'
const Whatsapp = () => {
  return (
    <div
      className="wsp"
      style={{
        position: "fixed",
        width: "55px",
        height: "55px",
        lineHeight: "55px",
        bottom: "30px",
        right: "30px",
        background: "#0df053",
        color: "#fff",
        borderRadius: "50px",
        textAlign: "center",
        fontSize: "30px",
        zIndex: "1",
      }}
    >
      <Link
        to="https://api.whatsapp.com/send?phone=56956172015&text=Hola, vengo del sitio Erre Import y tengo una consulta..."
        target="blank"
      >
        <i class="text-white bi bi-whatsapp"></i>
      </Link>
    </div>
  );
};

export default Whatsapp;
