
import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../IU/pages/LandingPage'
import { NavbarGeneral } from '../IU/components/NavbarGeneral'
import { LoginAdminPage } from '../Administardor/pages/LoginAdminPage'
import { LoginDocentePage } from '../Docentes/pages/LoginDocentePage'
import { LoginEstudiantePage } from '../Estudiantes/pages/LoginEstudiantePage'
import { SobrePage } from '../IU/pages/SobrePage'
import { AdministradorRautes } from '../Administardor/routes/AdministradorRautes'
import { DocenteRoutes } from '../Docentes/routes/DocenteRoutes'
import { EstudianteRoutes } from '../Estudiantes/routes/EstudianteRoutes'

export const AppRouter = () => {
  return (
    <>
      <NavbarGeneral />
      <Routes>

        {/* rutas publicas */}
        <Route path='landing' element={<LandingPage />} />
        <Route path='/sobre' element={<SobrePage />} />
        <Route path='/log/admin' element={<LoginAdminPage/>} />
        <Route path='/log/docente' element={<LoginDocentePage />} />
        <Route path='/log/estudiante' element={<LoginEstudiantePage />} />

        {/* rutas privadas */}
        <Route path='/administrador/*' element={<AdministradorRautes />} />
        <Route path='/docente/*' element={<DocenteRoutes />} />
        <Route path='/estudiante/*' element={<EstudianteRoutes />} />

        <Route path='/' element={<Navigate to="/landing" />} />
      </Routes>
    </>
  )
}
