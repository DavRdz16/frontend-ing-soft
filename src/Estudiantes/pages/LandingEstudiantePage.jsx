import "../../Assets/styles/styles-landing/Landin-styles.css";
import { useNavigate } from "react-router-dom";

export const LandingEstudiantePage = () => {

  const navigate = useNavigate();
  const onNavPerfilEstudiante = () => {
    navigate("../PerfilEstudiante");
  };

  return (
    <>
      <button style={{ marginTop: '200px' }} className="btn btn-primary"
        onClick={onNavPerfilEstudiante}
      >Perfil</button>
    </>
  );
};
