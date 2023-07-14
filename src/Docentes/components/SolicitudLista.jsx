import React, { useEffect, useState } from 'react';

export const ListaSolicitudes = ({ numEmpleado }) => {
  const [solicitudes, setSolicitudes] = useState([]);
  const num_empleado = localStorage.getItem("id");
  useEffect(() => {
   

    obtenerSolicitudes();

    async function obtenerSolicitudes() {
      try {
        const response = await fetch(`http://localhost:8081/Solicitudes_Coordinador?num_empleado=${num_empleado}`);
        const data = await response.json();
        setSolicitudes(data);
        console.log('Solicitudes obtenidas:', data);
      } catch (error) {
        console.error('Error al obtener las solicitudes del coordinador:', error);
      }
    }
  }, [numEmpleado]);

  const aceptarSolicitud = (solicitudId) => {
    console.log(`Solicitud ${solicitudId} aceptada`);
   
  };

  const rechazarSolicitud = (solicitudId) => {
    console.log(`Solicitud ${solicitudId} rechazada`);
   
  };

  return (
    <div>
      <h2>Solicitudes del coordinador</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo de solicitud</th>
            <th>Estado</th>
            <th>Jutificacion</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id}>
              <td>{solicitud.tipo_solicitud}</td>
              <td>{solicitud.estado}</td>
              <td>{solicitud.justificacion}</td>
             
              <td>
                <button onClick={() => aceptarSolicitud(solicitud.id)}>Aceptar</button>
                <button onClick={() => rechazarSolicitud(solicitud.id)}>Rechazar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
};



