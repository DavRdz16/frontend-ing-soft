import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import axios from 'axios'
// import { postData } from './helpers/fetchApi'
import { Link, useNavigate } from 'react-router-dom'
// import { validation } from './LoginValidation'




export const LoginEstudiante = () => {
    const navigate = useNavigate();


    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/estudiante/home')

        // setError(validation(values))

        // axios.post('http://localhost:8081/login', { email, password })
        //     .then( navgiate('/home'))
        //     .catch(err => console.log(err));
        // postData(email, password);
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary '>
            <div className='p-3 bg-white w-25 '>
                <h2>Inicio sesión de estudiantes</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email"
                            placeholder='ejemplo@gmail.com'
                            className='rounded-0 form-control'
                            name='email'
                            onChange={handleInput} />
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password"
                            placeholder='Ingrese su contraseña'
                            className='rounded-0 form-control'
                            name='password'
                            onChange={handleInput} />
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <button
                        type='submit'
                        className='btn btn-success form-control'>
                        Log In
                    </button>
                    <p>You are agree to aour terms and polices</p>
                    <Link to="/signup"
                        className='btn btn-default border w-100 bg-light text-decoration-none'>
                        Create acount
                    </Link>
                </form>
            </div>
        </div>
    )
}