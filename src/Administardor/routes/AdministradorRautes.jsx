import React from 'react'
import { LandingAdministradorPage } from '../pages/LandingAdministradorPage'
import { Route, Routes } from 'react-router-dom'
import { NavbarEspecifico } from '../../IU/components/NavbarEspecifico'

export const AdministradorRautes = () => {
  return (
    <>
      <NavbarEspecifico />
      <Routes>
        <Route path='/home' element={<LandingAdministradorPage />} />
      </Routes>
    </>
  )
}
