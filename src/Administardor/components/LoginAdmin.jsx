import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css'
// import axios from 'axios'
// import { postData } from './helpers/fetchApi'
import { Link, useNavigate } from "react-router-dom";
// import { validation } from './LoginValidation'
import "../../Assets/styles/styles-forms/Forms-styles.css";
import "../../Assets/styles/styles-landing/Footer-styles.css";

export const LoginAdmin = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // setError(validation(values))
    navigate("/home/administrador");
    // axios.post('http://localhost:8081/login', { email, password })
    // .then( navigate('/home/administrador'))
    // .catch(err => console.log(err));
    // postData(email, password);
  };

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center bg-primary ">
        <div className="form">
          <br />
          <h2>Inicio de Sesión de Administrador</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Correo Electrónico</strong>
              </label>
              <input
                type="email"
                placeholder="ejemplo@gmail.com"
                className="rounded-0 form-control"
                name="email"
                onChange={handleInput}
              />
              {error.email && (
                <span className="text-danger">{error.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Contraseña</strong>
              </label>
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                className="rounded-0 form-control"
                name="password"
                onChange={handleInput}
              />
              {error.password && (
                <span className="text-danger">{error.password}</span>
              )}
            </div>
            <p>
              Recuerda que si eres docente o administrador <br /> tu correo
              termina en @unah.edu.hn
            </p>
            <button type="submit" className="btn btn-success form-control">
              Iniciar Sesión
            </button>
            <br />
            <br />
            <p>
              Al hacer click estas aceptando nuestros términos y condiciones
            </p>
            <Link
              to="/signup"
              className="btn btn-default border w-100 bg-light text-decoration-none"
            >
              Regístrate
            </Link>
          </form>
        </div>

        <div className="footer z-n1 position-absolute bottom-0 start-50 translate-middle-x">
          <img src="../src/Assets/img/footer-bg.png" alt="" />
        </div>
      </div>
    </>
  );
};
