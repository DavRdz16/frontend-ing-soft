import { useState, useEffect } from "react";
import "../../Assets/styles/styles-admin/Admin-asignar-rol.css";

export const RolDocente = () => {
  const [centroSeleccionado, setCentroSeleccionado] = useState(0);
  const [opcionDeCarrera, setOpcionDeCarrera] = useState(null);

  const handleCentro = (event) => {
    setCentroSeleccionado(event.target.value);
  };

  const opcionCarrera = (nombreCarrera) => {
    setOpcionDeCarrera(nombreCarrera);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center ">
        <div className="d-flex flex-column justify-content-center ">
          <div className="form">
            <h3 htmlFor="lang">Centro: </h3>
            <br />
            <select
              name="centros"
              id="lang"
              className="form-control2 w-75"
              value={centroSeleccionado}
              onChange={handleCentro}
            >
              <option value="x">Seleciona un centro</option>
              <option value="1">CU</option>
              <option value="2">UNAH-VS</option>
              <option value="3">UNAH-CURC</option>
              <option value="4">UNAH-CURLA</option>
              <option value="5">UNAH-CURLP</option>
              <option value="6">UNAH-CUROC</option>
              <option value="7">UNAH-CURNO</option>
              <option value="8">UNAH-TEC Danli</option>
              <option value="9">UNAH-TEC AGUÁN</option>
            </select>
            <br />
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center mb-6">
            <ListaDeCarreras
              centro={centroSeleccionado}
              opcion={opcionCarrera}
            />
            <br />
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className=" w-75">
            <ListaDocentes
              carrera={opcionDeCarrera}
              centro={centroSeleccionado}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ListaDeCarreras = ({ centro, opcion }) => {
  const [carreras, setCarreras] = useState(null);
  const [cargaDeCarreras, setCargaDeCarreras] = useState(true);
  {
    /* datos de prueba*/
  }
  useEffect(() => {
    const fetchCarrera = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/carreras/${centro}`
        );
        const jsonData = await response.json();
        setCarreras(jsonData);
        setCargaDeCarreras(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchCarrera();
  }, [centro]);

  useEffect(() => {
    setCarreras(null);
    setCargaDeCarreras(true);
  }, [centro]);

  const opcionDeCarrera = (NombreDeCarrera) => {
    opcion(NombreDeCarrera);
  };

  return (
    <>
      {cargaDeCarreras ? (
        <>
          <br />
          <h3>Cargando carreras</h3>
          <br />
        </>
      ) : (
        carreras.map((carrera, index) => (
          <>
            <div className="form-check">
              <input
                type="radio"
                className="form-chek"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={() => opcionDeCarrera(carrera.nombre)}
              />
              <label
                className="ms-2"
                key={index}
                onClick={() => opcionDeCarrera(carrera.nombre)}
              >
                {carrera.nombre}
              </label>
            </div>
            <br />
          </>
        ))
      )}
    </>
  );
};

const ListaDocentes = ({ carrera, centro }) => {
  const [docentes, setDocentes] = useState(null);
  const [rolSeleccionado, setRolSeleccionado] = useState({});
  const [actualizando, setActualizando] = useState(false);

  const handleRol = async (event, numEmpleado) => {
    const { value } = event.target;
    setRolSeleccionado((prevRoles) => ({
      ...prevRoles,
      [numEmpleado]: value,
    }));

    try {
      setActualizando(true);

      const response = await fetch(
        `http://localhost:8081/docentes/${value}/${numEmpleado}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            num_empleado: numEmpleado,
            cargo: value,
          }),
        }
      );
      if (response.ok) {
      } else {
        console.log("Error al actualizar");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setTimeout(() => {
        setActualizando(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchDocente = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/docente/${carrera}/${centro}`
        );
        const jsonData = await response.json();
        setDocentes(jsonData);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchDocente();
  }, [carrera]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col" className="">
                  Docentes
                </th>
                <th scope="col" className="">
                  Rol
                </th>
              </tr>
            </thead>
            <tbody>
              {docentes &&
                docentes.length > 0 &&
                docentes.map((dato) => (
                  <tr key={dato.num_empleado}>
                    <th scope="row">{dato.nombres}</th>
                    <td>
                      <div>
                        <select
                          name="docentes"
                          id="lang"
                          className="form-control2"
                          value={rolSeleccionado[dato.num_empleado]}
                          onChange={(event) =>
                            handleRol(event, dato.num_empleado)
                          }
                        >
                          <option value={dato.cargo}>{dato.cargo}</option>
                          {dato.cargo !== "Docente" && (
                            <option value="Docente">Docente</option>
                          )}
                          {dato.cargo !== "Coordinador" && (
                            <option value="Coordinador">Coordinador</option>
                          )}
                          {dato.cargo !== "Jefe de departamento" && (
                            <option value="Jefe de departamento">
                              Jefe de departamento
                            </option>
                          )}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
