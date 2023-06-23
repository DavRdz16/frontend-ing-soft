import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/styles/styles-admin/Admin-home.css";

export const LandingAdministradorPage = () => {
  const navigate = useNavigate();
  const onNavRegistroDocente = () => {
    navigate("/administrador/RegistroDocente");
  };
  const onNavRegistroEstudiante = () => {
    navigate("/administrador/RegistroEstudiante");
  };
  return (
    <>
      <div className="mt-6 d-flex flex-column align-items-center justify-content-center">
        <div className="btn'group">
          <div>
            <button
              className="btn btn-primary m-1"
              onClick={onNavRegistroDocente}
            >
              Registrar docentes
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary m-1"
              onClick={onNavRegistroEstudiante}
            >
              Registrar Estudiantes
            </button>
          </div>
          <div>
            <button className="btn btn-primary m-1">
              {" "}
              Seleccionar jefe de departamento
            </button>
          </div>
          <div>
            <button className="btn btn-primary m-1">
              {" "}
              Seleccionar coordinador de carrera
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
