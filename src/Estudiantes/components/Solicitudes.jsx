import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Solicitudes = () => {
const location = useLocation();
const { tipoSolicitud } = location.state;
const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
const [justificacion, setDescripcion] = useState('');
const num_cuenta = localStorage.getItem("id");
  

  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleCrearSolicitud = () => {
    
    const nuevaSolicitud = {
        tipo_solicitud: tipoSolicitud,
        num_cuenta: num_cuenta, 
        justificacion: justificacion
      };
  
      fetch('http://localhost:8081/Crear_Solicitud', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaSolicitud)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Solicitud creada:', data);
        })
        .catch(error => {
          console.error('Error al crear la solicitud:', error);
        });
  };

  const handleCancelar = () => {

   
  };


  
  return (
    <>
      <h3>Solicitud de {tipoSolicitud }</h3>
      <div>
       

        {tipoSolicitud === 'Cambio de Centro' && (
          <>
            <label htmlFor="opcion">Seleccione un centro:</label>
            <select id="opcion" value={opcionSeleccionada} onChange={handleOpcionChange}>
              
                  <option value="UNAH-CU">UNAH - Ciudad Universitaria</option>
                  <option value="UNAH-VS">UNAH - Valle de Sula</option>
                  <option value="UNAH-CURC">UNAH-CURC</option>
                  <option value="UNAH-CURLA">UNAH-CURLA</option>
                  <option value="UNAH-CURLP">UNAH-CURLP</option>
                  <option value="UNAH-CUROC">UNAH-CUROC</option>
                  <option value="UNAH-CURNO">UNAH-CURNO</option>
                  <option value="UNAH-TEC Danli">UNAH-TEC Danli</option>
                  <option value="UNAH-TEC AGUÁN">UNAH-TEC AGUÁN</option>
            </select>
          </>
        )}

        {tipoSolicitud === 'Cambio de Carrera' && (
          <>
            <label htmlFor="opcion">Seleccione la carrera a la que desea cambiar</label>
            <select id="opcion" value={opcionSeleccionada} onChange={handleOpcionChange}>
              <option value="">-- Carreras --</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
             
            </select>
          </>
        )}
        {tipoSolicitud === 'Cancelacion Excepcional' && (
          <>
            <label htmlFor="opcion">Seleccione la clase para la que desea hacer la solicitud </label>
            <select id="opcion" value={opcionSeleccionada} onChange={handleOpcionChange}>
              <option value="">-- Clases --</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
             
            </select>
          </>
        )}
        {tipoSolicitud === 'Pago Reposicion' && (
          <>
           
            
          </>
        )}

        <label htmlFor="descripcion">Justificacion:</label>
        <textarea id="justificacion" value={justificacion} onChange={handleDescripcionChange} />

        <button onClick={handleCrearSolicitud}>Crear Solicitud</button>
        <button onClick={handleCancelar}>Cancelar</button>
      </div>
    </>
  );
};
