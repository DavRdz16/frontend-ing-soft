import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LandingDocente = () => {
  const [clases, setClases] = useState([]);

  const num_empleado = localStorage.getItem("id");

  useEffect(() => {
    const fetchClases = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/clasesdocentes/${num_empleado}`
        );
        const jsonData = await response.json();
        setClases(jsonData);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchClases();
  }, []);

  return (
    <>
      {clases &&
        clases.length > 0 &&
        clases.map((dato, index) => (
          <Link to={`../detalle-de-clase/${dato.id_clase}`} key={index}>
            <div
              style={{
                margin: "1px solid black",
                width: "300px",
                height: "100px",
              }}
              key={index}
            >
              <h4>{dato.nombre}</h4>
            </div>
          </Link>
        ))}
    </>
  );
};
