import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LandingAdministradorPage = () => {

    const navigate = useNavigate()
    const onNavRegistroDocente = () => {
        navigate('/administrador/RegistroDocente')
    }
    const onNavRegistroEstudiante = () => {
        navigate('/administrador/RegistroEstudiante')
    }
    return (

        <>
        <h1>Necesito que bajes la informacion porque se esconde en el navbar</h1>
        <h1>Bienvenido al modulo de administrador</h1>
        
            <div>
                <button onClick={onNavRegistroDocente}>Registrar docentes</button>
                <hr />
            </div>
            <div>
                <button onClick={onNavRegistroEstudiante}>Registrar Estudiantes</button>
                <hr />
            </div>
            <div>
                <button> Seleccionar jefe de departamento</button>
                <hr />
            </div>
            <div>
                <button> Seleccionar coordinador de carrera</button>
                <hr />
            </div>
        </>
    )
}
