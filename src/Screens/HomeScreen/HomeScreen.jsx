import WhatsappSidebar from "../../Components/WhatsappSidebar/WhatsappSidebar"
import "./HomeScreen.css"
import { useNavigate } from "react-router"

function HomeScreen() {
    const navigate = useNavigate()

    return (
        <div className="wa-app-layout wa-home-layout">
            <WhatsappSidebar />

            <main className="wa-welcome-screen">
                <div className="wa-welcome-card">
                    <div className="wa-welcome-illustration">
                        <svg width="120" height="96" viewBox="0 0 120 96" fill="none">
                            <rect x="15" y="10" width="90" height="60" rx="8" fill="#1c2b33" stroke="#222d34" strokeWidth="2" />
                            <rect x="25" y="18" width="70" height="44" rx="4" fill="#0b141a" />
                            <rect x="35" y="24" width="20" height="32" rx="2" fill="#00a884" />
                            <circle cx="72" cy="40" r="10" fill="#25d366" />
                            <path d="M68 40l3 3 6-6" stroke="#111b21" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 75h110a5 5 0 0 1 5 5v2H0v-2a5 5 0 0 1 5-5z" fill="#202c33" />
                        </svg>
                    </div>

                    <h1 className="wa-welcome-title">Descarga WhatsApp para Windows</h1>
                    <p className="wa-welcome-subtitle">
                        Obtén funciones adicionales, como llamadas y videollamadas, compartir pantalla y más.
                    </p>

                    <button className="wa-download-btn">Descargar</button>
                </div>

                <div className="wa-welcome-footer">
                    <button className="wa-footer-chip">
                        <span>📄</span> Enviar documento
                    </button>
                    <button className="wa-footer-chip" 
                    onClick={() => navigate("/new-contact")}>
                        <span>👤+</span> Añadir contacto
                    </button>
                    <button className="wa-footer-chip">
                        <span>✨</span> Pregúntale a Meta AI
                    </button>
                </div>
            </main>
        </div>
    )
}

export default HomeScreen

