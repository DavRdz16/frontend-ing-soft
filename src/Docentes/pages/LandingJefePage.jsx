import { useNavigate } from "react-router-dom";

export const LandingJefePage = () => {
  const navigate = useNavigate();
  const onReinicioClave = () => {
    navigate("/docente/recupeacion");
  };
  return (
    <>
      <div className="mt-6 d-flex vh-100 flex-column align-items-center bg-primary ">
        <br />
        <br />
        <br />
        <br />
        <h3 className="mt-6">Bienvenido Jefe de Departamento</h3>
        {/* <ul className="z-0 position-absolute top-50 start-50 translate-middle">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}

        <button
          className="btn btn-w btn-h btn-primary mt-3 form-control"
          onClick={onReinicioClave}
        >
          Reiniciar Clave de Docente
        </button>
      </div>
      <div className="footer z-n1 position-absolute bottom-0 start-50 translate-middle-x">
        <img src="../src/Assets/img/footer-bg.png" alt="" />
      </div>
    </>
  );
};
