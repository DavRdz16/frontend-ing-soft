import { useState } from "react";
import { empleados } from "./data";
import { DocenteCard } from "../components/DocenteCard";
import "../../Assets/styles/styles-docentes/Docente-lista.css";

// ESTO NO LO ESTILES AUN
// ESTO NO LO ESTILES AUN
// ESTO NO LO ESTILES AUN
// ESTO NO LO ESTILES AUN
// ESTO NO LO ESTILES AUN

export const RecuperacionDocentePage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const docentes = empleados;

  //Aqui necesito hacer una funcion con un useEffect que traiga todos los docentes
  //del depto al que pertenece el jefe

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8081/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        setMessage("Error al enviar la solicitud.");
        console.error(error);
      });
  };

  return (
    <>
      <div className="">
        <ul id="card-doc" >
          {docentes.map((docente) => (
            <DocenteCard key={docente.identidad} docente={docente} />
          ))}
        </ul>
      </div>
    </>
  );
};
