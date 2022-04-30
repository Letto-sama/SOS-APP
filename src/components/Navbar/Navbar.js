import { NavLink, Link } from "react-router-dom";
import NavbarLogin from './NavbarLogin'

//SE IMPORTAN PARA OBTENER EL OBJETO CONTEXTO(INFORMACION DEL USUARIO) Y SABER SI ESTA LOGUEADO O NO
import { useAuth } from '../../context/authContext'

import logo from '../../logo.png'
import '../../App.css'
import '../../styles/Navbar.css'
import Button from '@mui/material/Button';

console.log(logo)

const Navbar = () => {
    //ESTA CONTASTANTE ES DONDE COLOCAREMOS LOS VALORES DEL OBJETO CONTEXTO
    const { user } = useAuth()
    console.log(user)

    if (user) return <NavbarLogin />
    return (
        <nav className="navbar_container">
            <div className="navbar">
                <div className="navbar_elemento1" >
                    <Link to="/" >
                        <img src={logo} alt="Logo" className="App-logo" />
                    </Link>
                </div>
                <div className="navbar_elemento2 ">
                    <Link to="/" className="px-5">
                        Inicio
                    </Link>
                    <Link to="/" className="px-5">
                        Cómo funciona
                    </Link>
                    <Link to="/" className="px-5">
                        Postula
                    </Link>
                    <Link to="/" className="px-5">
                        Preguntas frecuentes
                    </Link>
                </div>
                <div className="navbar_elemento3" >
                    <NavLink to="/Login" className="px-3" >
                        <button>Iniciar sesión</button>

                    </NavLink>
                    <NavLink to="/Register" className="px-3">
                        <Button variant="contained">Registrate</Button>
                    </NavLink>
                </div>
            </div>

        </nav >

    )
}

export default Navbar