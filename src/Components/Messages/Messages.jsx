import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import MessagesList from "./MessagesList"
import { ContactContext } from "../../Context/ContactContext"
import ContactInfo from "../ContactInfo/ContactInfo"
import { IconVideo, IconPhone, IconSearch, IconTrash, IconSend } from "../Icons"
import "./Messages.css"

const emojis = [
    '😀', '😄', '😁', '😆', '😅', '😂', '🤣', '😊',
    '😇', '🙂', '😉', '😍', '🥰', '😘', '😋', '😎',
    '🤩', '🥳', '😢', '😭', '😡', '🤯', '😴', '🤔',
    '🙄', '😬', '🤗', '🤭', '🤫', '🥺', '😳', '😜',
    '👍', '👎', '👏', '🙏', '🤝', '💪', '✌️', '🤞',
    '👋', '🤙', '👀', '🧠', '❤️', '🧡', '💛', '💚',
    '💙', '💜', '🖤', '💯', '🔥', '✨', '🎉', '🎂',
    '🌹', '☕', '🍕', '⚽', '🎮', '🚀', '⭐', '🎯'
]

function Messages() {
    const { contact_selected, deleteAllMessages, createMessage } = useContext(ContactContext)
    const [inputValue, setInputValue] = useState('')
    const [showContactInfo, setShowContactInfo] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const navigate = useNavigate()

    function handleCreateMessage(event) {
        event.preventDefault()
        const messageText = inputValue.trim()
        if (!messageText) return

        createMessage(messageText, true)
        setInputValue('')
        setShowEmojiPicker(false)
    }

    function handleEmojiClick(emoji) {
        setInputValue(prev => prev + emoji)
    }

    if (!contact_selected) return null

    const initial = contact_selected.name ? contact_selected.name.charAt(0).toUpperCase() : 'C'

    return (
        <div className="wa-chat-container">
            {/* Area principal del chat */}
            <div className="wa-chat-main">
                {/* Encabezado */}
                <div className="wa-chat-header">
                    <div
                        className="wa-chat-header-user"
                        onClick={() => setShowContactInfo(prev => !prev)}
                        title="Ver información del contacto"
                    >
                        <button
                            type="button"
                            className="wa-mobile-back-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate("/home");
                            }}
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
                            <IconPhone size={18} />
                        </button>
                        <button className="wa-chat-action-btn" title="Buscar en el chat">
                            <IconSearch />
                        </button>
                        <button
                            className="wa-chat-action-btn"
                            title="Eliminar historial de mensajes"
                            onClick={deleteAllMessages}
                        >
                            <IconTrash size={18} />
                        </button>
                    </div>
                </div>

                {/* Area de la lista de mensajes */}
                <MessagesList />

                {showEmojiPicker && (
                    <div className="wa-emoji-picker">
                        <div className="wa-emoji-grid">
                            {emojis.map((emoji) => (
                                <button
                                    key={emoji}
                                    type="button"
                                    className="wa-emoji-item"
                                    onClick={() => handleEmojiClick(emoji)}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Formulario de pie de pagina de entrada del chat */}
                <div className="wa-chat-footer">
                    <form onSubmit={handleCreateMessage} className="wa-chat-form">
                        <button
                            type="button"
                            className={`wa-footer-icon-btn ${showEmojiPicker ? 'active' : ''}`}
                            title="Emojis"
                            onClick={() => setShowEmojiPicker(prev => !prev)}
                        >
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

            {/* Informacion del contacto */}
            {showContactInfo && (
                <ContactInfo onClose={() => setShowContactInfo(false)} />
            )}
        </div>
    )
}

export default Messages
