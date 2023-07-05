import "../../Assets/styles/styles-landing/Landin-styles.css";

export const LandingCoordiPage = () => {
  return (
    <>
      <div className="mt-6 d-flex vh-100 flex-column align-items-center bg-primary ">
        <h3 className="mt-5">Bienvenido coordinador</h3>
        <ul
          id="cargar"
          className="z-0 position-absolute top-50 start-50 translate-middle"
        >
          <li id="li1"></li>
          <li id="li2"></li>
          <li id="li3"></li>
        </ul>
      </div>
    </>
  );
};
