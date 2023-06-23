import React from 'react'
import { NavbarEspecifico } from '../../IU/components/NavbarEspecifico'
import { Route, Routes } from 'react-router-dom'
import { LandingDocentePage } from '../pages/LandingDocentePage'

export const DocenteRoutes = () => {
  return (
    <>
      <NavbarEspecifico />
      <Routes>
        <Route path='/home' element={<LandingDocentePage/>} />
        
      </Routes>
    </>
  )
}
