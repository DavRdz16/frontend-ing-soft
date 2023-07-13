import React from 'react';
import { useNavigate } from "react-router-dom";

export const SolicitudEstudiantePage = () => {
    const navigate = useNavigate();

  const SolicitudCarmbioCarrera = () => {
    navigate("../SolicitudPage",{ state: { tipoSolicitud: 'Cambio de Carrera' } });
  };

  const SolicitudCancelacionExcepcional = () => {
    navigate("../SolicitudPage",{ state: { tipoSolicitud: 'Cancelacion Excepcional' } });
  };

  const SolicitudCambioCentro = () => {
    navigate("../SolicitudPage",{ state: { tipoSolicitud: 'Cambio de Centro' } });
  };

  const SolicitudPagoReposicion = () => {
    navigate("../SolicitudPage",{ state: { tipoSolicitud: 'Pago Reposicion' } });
  };
  const VerSolicitudes = () => {
  
  };

  return (
    <>
    <h3>Solicitudes </h3>
    <br />
      <button  className="btn btn-primary" onClick={SolicitudCarmbioCarrera}>Solicitar Cambio de carrera</button><br /><br />
      
      <button className="btn btn-primary" onClick={SolicitudCancelacionExcepcional}>Solicitar cancelación excepcional</button><br /><br />
      <button className="btn btn-primary" onClick={SolicitudCambioCentro}>Solicitar cambio de centro</button><br /><br />
      <button className="btn btn-primary" onClick={SolicitudPagoReposicion}>Solicitar pago de reposición</button><br /><br />
      <button className="btn btn-primary" onClick={VerSolicitudes}>Ver Solicitudes </button><br /><br />
    </>
  );
}
