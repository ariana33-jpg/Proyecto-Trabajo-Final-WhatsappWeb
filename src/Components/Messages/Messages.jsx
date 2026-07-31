import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import MessagesList from "./MessagesList"
import { ContactContext } from "../../Context/ContactContext"
import "./Messages.css"

const IconVideo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
)

const IconPhone = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
)

const IconSearch = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
)

const IconTrash = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
)

const IconSend = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
)

function Messages() {
    const { contact_selected, deleteAllMessages, createMessage } = useContext(ContactContext)
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    function handleCreateMessage(event) {
        event.preventDefault()
        const messageText = inputValue.trim()
        if (!messageText) return

        createMessage(messageText, true)
        setInputValue('')
    }

    if (!contact_selected) return null

    const initial = contact_selected.name ? contact_selected.name.charAt(0).toUpperCase() : 'C'

    return (
        <div className="wa-chat-container">
            {/* Header */}
            <div className="wa-chat-header">
                <div className="wa-chat-header-user">
                    <button
                        type="button"
                        className="wa-mobile-back-btn"
                        onClick={() => navigate("/home")}
                        title="Volver a chats"
                    >
                        ←
                    </button>
                    {contact_selected.avatarUrl ? (
                        <img
                            src={contact_selected.avatarUrl}
                            alt={contact_selected.name}
                            className="wa-chat-avatar"
                        />
                    ) : (
                        <div className="wa-chat-avatar">{initial}</div>
                    )}
                    <div className="wa-chat-header-info">
                        <span className="wa-chat-header-name">{contact_selected.name}</span>
                        <span className="wa-chat-header-status">en línea</span>
                    </div>
                </div>

                <div className="wa-chat-header-actions">
                    <button className="wa-chat-action-btn" title="Videollamada">
                        <IconVideo />
                    </button>
                    <button className="wa-chat-action-btn" title="Llamada">
                        <IconPhone />
                    </button>
                    <button className="wa-chat-action-btn" title="Buscar en el chat">
                        <IconSearch />
                    </button>
                    <button
                        className="wa-chat-action-btn"
                        title="Eliminar historial de mensajes"
                        onClick={deleteAllMessages}
                    >
                        <IconTrash />
                    </button>
                </div>
            </div>

            {/* Messages Body */}
            <MessagesList />

            {/* Input Form Footer */}
            <div className="wa-chat-footer">
                <form onSubmit={handleCreateMessage} className="wa-chat-form">
                    <button type="button" className="wa-footer-icon-btn" title="Emojis">
                        😊
                    </button>
                    <button type="button" className="wa-footer-icon-btn" title="Adjuntar">
                        📎
                    </button>

                    <div className="wa-chat-input-wrapper">
                        <input
                            id="message"
                            name="message"
                            type="text"
                            className="wa-chat-input"
                            placeholder="Escribe un mensaje"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoComplete="off"
                        />
                    </div>

                    <button type="submit" className="wa-send-btn" title="Enviar mensaje">
                        <IconSend />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Messages
