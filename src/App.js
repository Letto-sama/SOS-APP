import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { AuthProvider } from './context/authContext'

import Navbar from './components/Navbar/Navbar'
// import NavbarLogin from './components/Navbar/NavbarLogin'
import Footer from './components/Footer/Footer'
import HowItWorks from './components/Home/HowItWorks'
import Postulate from './components/Home/Postulate'
import OurTeam from './components/Home/OurTeam'
import Postulacion from './components/Logged/Postulacion'


function App() {

  return (
    // IMPORTANDO RUTAS DE LA CARPETA COMPONENT
    //ES ESENCIAL QUE LAS RUTAS QUE DESEEN OBTENER INFORMACIÓN DEL CONTAXTO, DEBAN ESTAN DENTRO DEL AUTHPROVIDER
    <div>
      <AuthProvider>
        <div className='App'>
          <Navbar />
        </div>

        <Routes>
          <Route path='/' element={<HomeWithOutLog />} />
          <Route path='/Home' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Postulacion' element={<Postulacion />} />
        </Routes>
        <div >
          <Footer />
        </div>
      </AuthProvider>
    </div>
  )
}
const HomeWithOutLog = () => {
  return (
    <div>
      <HowItWorks />
      <OurTeam />
      <Postulate />

    </div>
  )
}

export default App