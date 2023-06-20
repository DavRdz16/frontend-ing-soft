import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-top">

            <Link
                className="navbar-brand"
                to="/"
            >
                UNAH
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/sobre"
                    >
                        Sobre
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        // className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        className="nav-item nav-link"
                        to="/log/admin"
                    >
                        Administrador
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/log/docente"
                    >
                        Docente
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/log/estudiante"
                    >
                        Estudiante
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
