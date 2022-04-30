import { Link } from "react-router-dom";
import { useAuth } from '../../context/authContext'

import '../../styles/Footer.css'

const Footer = () => {
    const { user } = useAuth()
    if (!user)
        return (
            <footer className="footer_container">
                <div className="footer">
                    <div className="footer_01">
                        @ 2022 SOS APP
                    </div>
                    <div>
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
                </div>
            </footer>

        )
}
export default Footer