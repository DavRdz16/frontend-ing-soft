import { NavbarEspecifico } from '../../IU/components/NavbarEspecifico'
import { Route, Routes } from 'react-router-dom'
// import { LandingDocentePage } from '../pages/LandingDocentePage'
import { LandingPreviusPage } from '../pages/LandingPreviusPage'
import { RecuperacionDocentePage } from '../pages/RecuperacionDocentePage'
import { RestablePassDocentePage } from '../pages/RestablePassDocentePage'
import { SolicitudListaCoord } from '../pages/SolicitudListaCoord'
export const DocenteRoutes = () => {
  return (
    <>
      <NavbarEspecifico />
      <Routes>
        <Route path='/home' element={<LandingPreviusPage/>} />
        <Route path='/recupeacion' element={<RecuperacionDocentePage/>} />
        <Route path='/reset-password/:token' element={<RestablePassDocentePage />} />
        <Route path='/ListaSolicitud' element={<SolicitudListaCoord/>} />
      </Routes>
    </>
  )
}
