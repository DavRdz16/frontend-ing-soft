import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingCoordiPage = () => {
  const navigate = useNavigate();

  const onNavSolicitud = () => {
    navigate("/docente/ListaSolicitud");
  };

  return (
    <>
      <div className="mt-6 d-flex vh-100 flex-column align-items-center bg-primary ">
        <br /><br /><br /><br />
        <h3 className="mt-5">Bienvenido coordinador</h3>
        {/* <ul
          id="cargar"
          className="z-0 position-absolute top-50 start-50 translate-middle"
        >
          <li id="li1"></li>
          <li id="li2"></li>
          <li id="li3"></li>
        </ul> */
        <div>
        <button
          className="btn btn-primary"
          onClick={onNavSolicitud}
        >
          Lista de Solicitudes
        </button>
      </div>
        }
      </div>
      
      <div className="footer z-n1 position-absolute bottom-0 start-50 translate-middle-x">
        <img src="../src/Assets/img/footer-bg.png" alt="" />
      </div>
    </>
  );
};
