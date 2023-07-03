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
      <div className="d-flex flex-column align-items-center justify-content-center">
        <br />
        <h2>Bienvenido Administrador</h2>
        <br />
        <div className="btn-group d-flex align-items-center justify-content-center">
          <div>
            <button
              className="btn btn-w btn-h btn-primary m-1"
              onClick={onNavRegistroDocente}
            >
              Registrar docentes
            </button>
          </div>
          <div>
            <button
              className="btn btn-w btn-h btn-primary m-1"
              onClick={onNavRegistroEstudiante}
            >
              Registrar Estudiantes
            </button>
          </div>
          <div>
            <button className="btn btn-w btn-h btn-primary m-1">
              {" "}
              Seleccionar jefe de departamento
            </button>
          </div>
          <div>
            <button className="btn btn-w btn-h btn-primary m-1">
              {" "}
              Seleccionar coordinador de carrera
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
