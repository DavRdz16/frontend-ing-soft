import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../IU/pages/LandingPage'
import { Navbar } from '../IU/components/Navbar'
import { LoginAdminPage } from '../Administardor/pages/LoginAdminPage'
import { LoginDocentePage } from '../Docentes/pages/LoginDocentePage'
import { LoginEstudiantePage } from '../Estudiantes/pages/LoginEstudiantePage'
import { SobrePage } from '../IU/pages/SobrePage'
import { AdministradorPage } from '../Administardor/pages/AdministradorPage'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='landing' element={<LandingPage />} />
        <Route path='/sobre' element={<SobrePage />} />

        <Route path='/log/admin' element={<LoginAdminPage/>} />
        <Route path='/home/administrador' element={<AdministradorPage/>} />

        <Route path='/log/docente' element={<LoginDocentePage />} />
        <Route path='/log/estudiante' element={<LoginEstudiantePage />} />

        <Route path='/' element={<Navigate to="/landing" />} />
      </Routes>
    </>
  )
}
