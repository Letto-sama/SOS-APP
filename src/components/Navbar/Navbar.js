import { NavLink } from 'react-router-dom'

export function Navbar() {
    return (
        <nav>
            <div>

            </div>
            <div>

            </div>
            <div>
                <div>
                    <NavLink to="/Login" className="nav-link">Iniciar sesión</NavLink >
                </div>
                <div>
                    <NavLink to="Register" className="nav-link" >Registrarse</NavLink>
                </div>
            </div>
        </nav>
    )
}
