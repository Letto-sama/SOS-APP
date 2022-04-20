import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { Navbar } from './Navbar/Navbar'

export function Home() {
    const { user, logout, loading } = useAuth()
    console.log(user)
    const navigate = useNavigate()
    const handleLogout = async () => {

        try {
            await logout()
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    if (loading) return <h1>Loading</h1>
    return (
        <div>
            <Navbar />
            <div className='w-full max-w-xs m-auto text-black'>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className='text-xl mb-4'>Welcome {user.displayName || user.email}</p>
                    <button type='button' onClick={handleLogout} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black">Cerrar sesión</button>
                </div>
            </div>
        </div>


    )
}