import React from "react";
import { useState, useEffect } from "react";

export const RolDocente = () => {

    const [centroSeleccionado, setCentroSeleccionado] = useState(0);
    const [opcionDeCarrera, setOpcionDeCarrera] = useState(null);

    const handleCentro = (event) => {
        setCentroSeleccionado(event.target.value);
    };

    const opcionCarrera = (nombreCarrera) => {
        setOpcionDeCarrera(nombreCarrera)
    };

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', paddingTop: '90px' }}>

            <div style={{ display: 'block', width: '30%' }}>

                <div style={{ height: '20%', backgroundColor: '#0000ff69' }}>
                    <label htmlFor="lang">Centro: </label>
                    <select name="centros" id="lang" value={centroSeleccionado} onChange={handleCentro}>
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
                </div>

                <div style={{ height: '80%', backgroundColor: '#00800070', overflow: 'auto' }}>
                    <ListaDeCarreras centro={centroSeleccionado} opcion={opcionCarrera} />
                </div>

            </div>

            <div style={{ width: '70%', backgroundColor: '#ff000047' }}>
                <ListaDocentes carrera={opcionDeCarrera} centro={centroSeleccionado} />

            </div>

        </div>
    )
}

const ListaDeCarreras = ({ centro, opcion }) => {

    const [carreras, setCarreras] = useState(null);
    const [cargaDeCarreras, setCargaDeCarreras] = useState(true);
    {/* datos de prueba*/ }
    useEffect(() => {
        const fetchCarrera = async () => {
            try {
                const response = await fetch(`http://localhost:8081/carreras/${centro}`);
                const jsonData = await response.json();
                setCarreras(jsonData);
                setCargaDeCarreras(false)

            } catch (error) {
                console.log('Error:', error);
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
            {
                cargaDeCarreras ? (<p>Cargando carreras</p>) :

                    (
                        carreras.map((carrera,index) => (
                            <p key={index}
                                onClick={() => opcionDeCarrera(carrera.nombre)}
                            >{carrera.nombre}</p>
                        )
                        )
                    )}

        </>
    )
}

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

            const response = await fetch(`http://localhost:8081/docentes/${value}/${numEmpleado}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    num_empleado: numEmpleado,
                    cargo: value,
                }),
            });
            if (response.ok) {
            } else {
                console.log('Error al actualizar');
            }
        } catch (error) {
            console.log('Error:', error);
        } finally {
            setTimeout(() => {
                setActualizando(false);
            }, 1000);
        }

    };

    useEffect(() => {
        const fetchDocente = async () => {
            try {
                const response = await fetch(`http://localhost:8081/docente/${carrera}/${centro}`);
                const jsonData = await response.json();
                setDocentes(jsonData);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchDocente();
    }, [carrera]);

    {/*estilos etmporales */ }

    return (
        <>
            {/* spiner para simular el tiempo de actialización */}
            <div style={{ position: 'relative' }}>
                {actualizando && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontWeight: 'bold',
                            zIndex: 1,
                        }}
                    >
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <span style={{ marginLeft: '10px' }}>Actualizando</span>
                    </div>
                )}


                <table style={{ border: '1px solid black', width: '80%', margin: '30px' }}>
                    <thead>
                        <tr>
                            <th>Docentes</th>
                            <th>Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            docentes && docentes.length > 0 && (
                                docentes.map((dato) => (
                                    <tr key={dato.num_empleado} style={{ border: '1px solid black' }}>
                                        <td>
                                            {dato.nombres}
                                        </td>
                                        <td>
                                            <div style={{ height: '20%', position: 'relative' }}>

                                                <select
                                                    name="docentes" id="lang"
                                                    value={rolSeleccionado[dato.num_empleado]}
                                                    onChange={(event) => handleRol(event, dato.num_empleado)}
                                                >
                                                    <option value={dato.cargo}>{dato.cargo}</option>
                                                    {dato.cargo !== 'Docente' && (
                                                        <option value="Docente">Docente</option>
                                                    )}
                                                    {dato.cargo !== 'Coordinador' && (
                                                        <option value="Coordinador">Coordinador</option>
                                                    )}
                                                    {dato.cargo !== 'Jefe de departamento' && (
                                                        <option value="Jefe de departamento">Jefe de departamento</option>
                                                    )}
                                                </select>

                                            </div>

                                        </td>
                                    </tr>
                                ))
                            )
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}


