import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LandingJefePage = () => {
    const navigate = useNavigate();
    const onReinicioClave = () => {
        navigate("/docente/recupeacion");
    };
    return (
        <>
            <div className="mt-6 d-flex vh-100 flex-column align-items-center bg-primary ">
                <h3 className="mt-6">Bienvenido Jefe de Departamento</h3>
                {/* <ul className="z-0 position-absolute top-50 start-50 translate-middle">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                
                <button
                    className="btn btn-w btn-h btn-primary m-1 form-control"
                    onClick={onReinicioClave}
                >Reiniciar Clave de Docente
                </button>
            </div>
        </>
    )
}
