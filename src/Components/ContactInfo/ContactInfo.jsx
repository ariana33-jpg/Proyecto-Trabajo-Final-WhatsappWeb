import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import {
    IconClose,
    IconPhone,
    IconVideo,
    IconSearch,
    IconMedia,
    IconBell,
    IconLock,
    IconBlock,
    IconThumbsDown,
    IconTrash,
    IconChevronRight
} from "../Icons";
import "./ContactInfo.css";

function ContactInfo({ onClose }) {
    const { contact_selected, deleteAllMessages } = useContext(ContactContext);

    if (!contact_selected) return null;

    const initial = contact_selected.name
        ? contact_selected.name.charAt(0).toUpperCase()
        : "C";

    const defaultPhone = contact_selected.telefono || "+54 9 11 3456-7890";

    return (
        <aside className="wa-contact-info-panel">
            {/* Panel Header */}
            <div className="wa-contact-info-header">
                <button
                    className="wa-contact-info-close-btn"
                    onClick={onClose}
                    title="Cerrar info del contacto"
                >
                    <IconClose />
                </button>
                <h2>Info. del contacto</h2>
            </div>

            {/* Content Body */}
            <div className="wa-contact-info-content">
                {/* Profile Card */}
                <div className="wa-info-card wa-profile-card">
                    <div className="wa-profile-avatar-wrapper">
                        {contact_selected.avatarUrl ? (
                            <img
                                src={contact_selected.avatarUrl}
                                alt={contact_selected.name}
                                className="wa-profile-avatar-img"
                            />
                        ) : (
                            <div className="wa-profile-avatar-fallback">{initial}</div>
                        )}
                    </div>

                    <h1 className="wa-profile-name">{contact_selected.name}</h1>
                    <p className="wa-profile-phone">{defaultPhone}</p>

                    {/* Quick action buttons */}
                    <div className="wa-profile-quick-actions">
                        <button className="wa-action-circle-btn" title="Audio">
                            <IconPhone />
                            <span>Audio</span>
                        </button>
                        <button className="wa-action-circle-btn" title="Video">
                            <IconVideo />
                            <span>Video</span>
                        </button>
                        <button className="wa-action-circle-btn" title="Buscar">
                            <IconSearch size={20} />
                            <span>Buscar</span>
                        </button>
                    </div>
                </div>

                {/* Status and Info Card */}
                <div className="wa-info-card">
                    <div className="wa-info-item">
                        <span className="wa-info-item-label">Info.</span>
                        <p className="wa-info-item-value">{contact_selected.info || "¡Hola! Estoy usando WhatsApp."}</p>
                    </div>
                    <div className="wa-info-divider" />
                    <div className="wa-info-item">
                        <span className="wa-info-item-label">Número de teléfono</span>
                        <p className="wa-info-item-value">{defaultPhone}</p>
                        {contact_selected.pais && (
                            <span className="wa-info-item-sub">{contact_selected.pais}</span>
                        )}
                    </div>
                </div>

                {/* Media, links and docs Card */}
                <div className="wa-info-card wa-clickable-card">
                    <div className="wa-card-row">
                        <div className="wa-card-row-title">
                            <IconMedia />
                            <span>Archivos multimedia, enlaces y docs</span>
                        </div>
                        <div className="wa-card-row-right">
                            <span className="wa-count-badge">0</span>
                            <IconChevronRight />
                        </div>
                    </div>
                </div>

                {/* Options & Privacy Card */}
                <div className="wa-info-card">
                    <div className="wa-card-row wa-clickable-row">
                        <div className="wa-card-row-title">
                            <IconBell />
                            <span>Silenciar notificaciones</span>
                        </div>
                        <IconChevronRight />
                    </div>
                    <div className="wa-info-divider" />
                    <div className="wa-card-row wa-clickable-row">
                        <div className="wa-card-row-title">
                            <IconLock />
                            <div>
                                <span className="wa-row-main-text">Cifrado</span>
                                <p className="wa-row-sub-text">Los mensajes y las llamadas están cifrados de extremo a extremo.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Actions Card (Destructive) */}
                <div className="wa-info-card wa-danger-card">
                    <button className="wa-danger-row">
                        <IconBlock />
                        <span>Bloquear a {contact_selected.name}</span>
                    </button>
                    <div className="wa-info-divider" />
                    <button className="wa-danger-row">
                        <IconThumbsDown />
                        <span>Reportar a {contact_selected.name}</span>
                    </button>
                    <div className="wa-info-divider" />
                    <button className="wa-danger-row" onClick={deleteAllMessages}>
                        <IconTrash />
                        <span>Eliminar chat</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default ContactInfo;
