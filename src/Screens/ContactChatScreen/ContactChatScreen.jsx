import React, { useContext } from 'react'
import { Link } from 'react-router'
import WhatsappSidebar from '../../Components/WhatsappSidebar/WhatsappSidebar'
import Messages from '../../Components/Messages/Messages'
import { ContactContext } from '../../Context/ContactContext'
import '../HomeScreen/HomeScreen.css'

const ContactChatScreen = () => {
    const { contact_selected } = useContext(ContactContext)

    if (!contact_selected) {
        return (
            <div className="wa-app-layout">
                <WhatsappSidebar />
                <div style={{ flex: 1, padding: 40, color: 'var(--wa-text-primary)' }}>
                    <h2>Contacto no encontrado</h2>
                    <Link to="/" style={{ color: 'var(--wa-green)', marginTop: 10, display: 'inline-block' }}>
                        Volver a inicio
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="wa-app-layout wa-chat-layout">
            <WhatsappSidebar />
            <Messages />
        </div>
    )
}

export default ContactChatScreen