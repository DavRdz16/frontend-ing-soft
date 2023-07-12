import "../../Assets/styles/styles-landing/Landin-styles.css";
import { LandingDocente } from "../components/LandingDocente";
import { Link } from "react-router-dom";
export const LandingDocentePage = () => {
  return (
    <>
    <Link to = '../perfil'><button>Perfil</button></Link>
  
      <LandingDocente />
    </>
  );
};
