import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { validacionRegisto } from "../helpers/ValidacionRegistro";
import "../../Assets/styles/styles-forms/Forms-styles.css";

export const LoginAdmin = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validacionRegisto(values));
    const { email, password } = values;
    axios
      .post("http://localhost:8081/login/administrador", { email, password })
      .then((res) => {
        const { login, usuario, token } = res.data;
        if (login) {
          localStorage.setItem("token", token);
          localStorage.setItem("login", login);
          console.log({ login, usuario, token });
          alert("Inicio sesion exitoso");
          navigate("/administrador/home");
        } else {
          console.log({ login, usuario });
          alert("El usuario no existe");
        }
      })
      .catch((err) => console.log(err));
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
                className="rounded-3 form-control"
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
                className="rounded-3 form-control"
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
          </form>
        </div>
      </div>
      <hr />
    </>
  );
};
