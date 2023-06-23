import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { validation } from './LoginValidation'
import axios from 'axios'
import { validacionRegisto } from '../helpers/ValidacionRegistro';

export const RegistroDocete = () => {

    const [values, setValues] = useState({
        nombres: '',
        apellidos: '',
        identidad: '',
        email: '',
        password: '',
        foto: '',
        centro: ''
    });

    const navigate = useNavigate()

    const [error, setError] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(validacionRegisto(values));
        const { nombres, apellidos, identidad, email, password, foto, centro } = values
        

        if (error.email === '' || error.email === undefined) {
            if (error.password === '' || error.password === undefined) {
                axios.post('http://localhost:8081/crear/docente', { nombres, apellidos, identidad, email, password, foto, centro })
                    .then(res => {
                        console.log({'Usuario agregado': res.config.data});
                        alert('Registrado con exito')
                        navigate('/administrador/home')
                    })
                    .catch(err => {
                        alert('Registrado Fallido')
                        console.log(err)
                    });
            }
        }

    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary '>
            <div className='p-3 bg-white w-25 '>
                <h2>Registro de Docentes</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="nombres"><strong>Nombres</strong></label>
                        <input type="text"
                            placeholder='Ingrese sus nombres'
                            className='rounded-0 form-control'
                            name='nombres'
                            onChange={handleInput}
                        />
                        {/* {error.name && <span className='text-danger'>{error.name}</span>} */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="apellidos"><strong>Apellidos</strong></label>
                        <input type="text"
                            placeholder='Ingrese sus apellidos'
                            className='rounded-0 form-control'
                            name='apellidos'
                            onChange={handleInput}
                        />
                        {/* {error.name && <span className='text-danger'>{error.name}</span>} */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="identidad"><strong>Numero de Identidad</strong></label>
                        <input type="text"
                            placeholder='Ingrese el numero de identidad'
                            className='rounded-0 form-control'
                            name='identidad'
                            onChange={handleInput}
                        />
                        {/* {error.name && <span className='text-danger'>{error.name}</span>} */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Correo Electronico</strong></label>
                        <input type="email"
                            placeholder='ejemplo@ejemplo.com'
                            className='rounded-0 form-control'
                            name='email'
                            onChange={handleInput}
                        />
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input type="password"
                            placeholder='Ingrese su contraseña'
                            className='rounded-0 form-control'
                            name='password'
                            onChange={handleInput}
                        />
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="foto"><strong>Foto</strong></label>
                        <input type="text"
                            placeholder='Ingrese una foto'
                            className='rounded-0 form-control'
                            name='foto'
                            onChange={handleInput}
                        />
                        {/* {error.name && <span className='text-danger'>{error.name}</span>} */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="centro"><strong>Centro</strong></label>
                        <input type="text"
                            placeholder='Ingrese centro asignado'
                            className='rounded-0 form-control'
                            name='centro'
                            onChange={handleInput}
                        />
                        {/* {error.name && <span className='text-danger'>{error.name}</span>} */}
                    </div>
                    <button
                        type='submit'
                        className='btn btn-success form-control'>
                        Registrar
                    </button>

                </form>
            </div>
        </div>
    )
}