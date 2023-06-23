import React from 'react'
import { NavbarEspecifico } from '../../IU/components/NavbarEspecifico'
import { Route, Routes } from 'react-router-dom'
import { LandingEstudiantePage } from '../pages/LandingEstudiantePage'

export const EstudianteRoutes = () => {
  return (
    <>
      <NavbarEspecifico />
      <Routes>
        <Route path='/home' element={<LandingEstudiantePage/>} />
      </Routes>
    </>
  )
}
