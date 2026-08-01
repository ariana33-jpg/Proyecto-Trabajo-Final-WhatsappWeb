import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import "./ContactInfo.css";

const IconClose = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const IconPhone = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
);

const IconVideo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
);

const IconSearch = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const IconMedia = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
);

const IconBell = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const IconLock = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const IconBlock = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
);

const IconThumbsDown = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
    </svg>
);

const IconTrash = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
);

const IconChevronRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

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
                            <IconSearch />
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
