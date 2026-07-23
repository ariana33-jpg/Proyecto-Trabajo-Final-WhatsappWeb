import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"

const IconDoubleCheck = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L7 17l-5-5" />
        <path d="M22 10l-7.5 7.5L13 16" />
    </svg>
)

function MessagesList() {
    const { contact_selected, deleteMessageById } = useContext(ContactContext)

    if (!contact_selected || !contact_selected.messages || contact_selected.messages.length === 0) {
        return (
            <div className="wa-empty-chat">
                <span>Aún no hay historial de mensajes</span>
            </div>
        )
    }

    return (
        <div className="wa-messages-body">
            {contact_selected.messages.map((message) => {
                const isMe = message.sendByMe

                return (
                    <div key={message.id} className={`wa-msg-wrapper ${isMe ? 'sent' : 'received'}`}>
                        <div className="wa-msg-bubble">
                            <button
                                className="wa-msg-delete-btn"
                                title="Eliminar mensaje"
                                onClick={() => deleteMessageById(message.id)}
                            >
                                ✕
                            </button>

                            {!isMe && (
                                <span className="wa-msg-sender-title">{contact_selected.name}</span>
                            )}

                            <p className="wa-msg-content">{message.content}</p>

                            <div className="wa-msg-footer">
                                <span>{message.time}</span>
                                {isMe && (
                                    <span className="wa-check-blue">
                                        <IconDoubleCheck />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MessagesList