import "../../Assets/styles/styles-admin/Admin-home.css";

export const AdministradorPage = () => {
  return (
    <>
      <div className="mt-6 d-flex flex-column align-items-center justify-content-center">
        <h3>Bienvenido al Módulo de Administrador</h3>
        <div className="btn'group">
        <button className="btn btn-primary m-1"> Registrar docentes</button>
        <button className="btn btn-primary m-1">
            {" "}
            Seleccionar jefe de departamento
          </button>
        <button className="btn btn-primary m-1">
            {" "}
            Seleccionar coordinador de carrera
          </button>
        </div>
      </div>

      <div>
      <ul className="z-0 position-absolute top-50 start-50 translate-middle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    </>
  );
};
