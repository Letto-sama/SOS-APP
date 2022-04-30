//SIRVE PARA DARLE CONTEXTO A LOS COMPONENTES Y SEPAN QUE UN USUARIO ESTA LOGUEADO
import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

export const authContext = createContext()

//LLAMAR LOS VALORES SIN IMPORTAR USECONTEXT Y CONTEXT, SOLO NECESITO EXPORTAR USEAUTH
export const useAuth = () => {
    const context = useContext(authContext)
    //SI NO HAY CONTEXTO ARROJA EL ERROR CON EL SIGUIENTE MENSAJE
    if (!context) throw new Error('There is not auth provider')
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const user2 = {
    //     login: false
    // };
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    return <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }}> {children} </authContext.Provider >

}