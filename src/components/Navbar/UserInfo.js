import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useAuth } from '../../context/authContext'
//IMPORTADO PARA USAR EL METODO CERRAR SESIÓN
import { useNavigate } from 'react-router-dom'

import userPhotoPredetermined from '../../img/user.png'

import '../../styles/NavbarLogin.css'


export default function UserInfo() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //ASIGNANDO EL CONTEXTO A UNA CONSTANTE
    const { user, logout } = useAuth()

    //OBTNENER Y VALIDAR EL NOMBRE DE USUARIO
    let UserName
    if (user.displayName) {
        UserName = (user.displayName).split(" ")[0]
    } else {
        UserName = "Usuario"
    }
    //VALIRDAR LA IMAGEN DE PERFIL
    let userImage
    if (user.photoURL) {
        userImage = user.photoURL
    } else {
        userImage = userPhotoPredetermined
    }
    //METODO PARA CERRAR SESIÓN
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: "white", alignItems: "flex-end" }}
            >
                <div className='UserInfo'>
                    <div>
                        <h1>¡Hola, {UserName}!</h1>
                    </div>
                    <div>
                        <img src={userImage} alt="userphotoPredetermined" style={{ width: "50px", borderRadius: "22px" }} />
                    </div>
                </div>

            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
            </Menu>
        </div>
    );
}
