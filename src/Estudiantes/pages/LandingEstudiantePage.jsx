import "../../Assets/styles/styles-landing/Landin-styles.css";
import { useNavigate } from "react-router-dom";

export const LandingEstudiantePage = () => {
  const navigate = useNavigate();
  const onNavPerfilEstudiante = () => {
    navigate("../PerfilEstudiante");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <br />
        <br />
        <br />
        <br />
        <h3>Bienvenido Estudiante</h3>
        <br />
        <button className="btn btn-primary" onClick={onNavPerfilEstudiante}>
          Perfil
        </button>
      </div>
      <div className="footer z-n1 position-absolute bottom-0 start-50 translate-middle-x">
        <img src="../src/Assets/img/footer-bg.png" alt="" />
      </div>
    </>
  );
};
