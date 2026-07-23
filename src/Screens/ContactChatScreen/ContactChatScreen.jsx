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
        <div className="wa-app-layout">
            <WhatsappSidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#0b141a' }}>
                <header style={{
                    height: 60,
                    padding: '10px 16px',
                    backgroundColor: '#202c33',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid var(--wa-border)'
                }}>
                    <h2 style={{ fontSize: 16, fontWeight: 500, color: 'var(--wa-text-primary)' }}>
                        {contact_selected.name}
                    </h2>
                </header>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Messages />
                </div>
            </div>
        </div>
    )
}

export default ContactChatScreen