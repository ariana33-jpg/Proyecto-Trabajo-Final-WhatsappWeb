import { useContext } from "react"
import { ContactContext } from "../../Context/ContactContext"
import { IconDoubleCheck } from "../Icons"

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
                                        <IconDoubleCheck size={15} />
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