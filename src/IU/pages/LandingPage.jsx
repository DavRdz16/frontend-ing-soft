import React from 'react'
import "../../Assets/styles/styles-landing/Landin-styles.css";
import "../../Assets/styles/styles-landing/Footer-styles.css";
export const LandingPage = () => {
  return (
    <>
      <div className="mt-6 d-flex vh-100 flex-column align-items-center bg-primary ">
      <h3 className="mt-6">En proceso de construcción</h3>
        <ul className="z-0 position-absolute top-50 start-50 translate-middle">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="footer z-n1 position-absolute bottom-0 start-50 translate-middle-x">
        <img src="../src/Assets/img/footer-bg.png" alt="" />
      </div>
    </>
  )
}
