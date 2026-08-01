import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import './WhatsappSidebar.css'

// Inline SVG Icon components matching WhatsApp Web UI precisely
const IconChats = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
)

const IconCalls = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
)

const IconStatus = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" strokeDasharray="14 6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
)

const IconChannels = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
)

const IconCommunities = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const IconArchived = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
)

const IconNewChat = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
)

const IconMenu = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="19" r="1.5" fill="currentColor" />
    </svg>
)

const IconSearch = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
)

const IconMute = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <path d="M18.63 13A17.89 17.89 0 0 0 18 8" />
        <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
)

const IconDoubleCheck = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L7 17l-5-5" />
        <path d="M22 10l-7.5 7.5L13 16" />
    </svg>
)

const IconGroupAdd = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="16" y1="11" x2="22" y2="11" />
    </svg>
)

const IconStar = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const IconSelectChats = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
)

const IconMarkRead = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
        <polyline points="22 7 12 13 2 7" />
        <polyline points="16 19 18 21 22 17" />
    </svg>
)

const IconLockApp = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

const IconBell = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
)

const IconLock = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

const IconLogout = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
)

const IconChevronRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

const WhatsappSidebar = () => {
    const { contacts } = useContext(ContactContext)
    const { contact_id } = useParams()
    const [searchTerm, setSearchTerm] = useState('')
    const [activeFilter, setActiveFilter] = useState('Todos')
    const [activeRailTab, setActiveRailTab] = useState('chats')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showProfileDrawer, setShowProfileDrawer] = useState(false)
    const [profileImgError, setProfileImgError] = useState(false)

    // Calculate total unread messages across contacts
    const totalUnread = contacts ? contacts.reduce((acc, c) => acc + (c.unreadCount || 0), 0) : 0

    // Filter contacts based on search & filter chips
    const filteredContacts = (contacts || []).filter((contact) => {
        const matchesSearch =
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (contact.lastMessage && contact.lastMessage.toLowerCase().includes(searchTerm.toLowerCase()))

        if (!matchesSearch) return false

        if (activeFilter === 'No leídos') {
            return (contact.unreadCount || 0) > 0
        }
        if (activeFilter === 'Favoritos') {
            return contact.isFavorite === true
        }
        if (activeFilter === 'Grupos') {
            return contact.isGroup === true
        }
        return true
    })

    return (
        <aside className="wa-sidebar-container">
            {/* Far-left Vertical Icon Rail */}
            <div className="wa-nav-rail">
                <div className="wa-rail-top">
                    <button
                        className={`wa-rail-btn ${activeRailTab === 'chats' && !showProfileDrawer ? 'active' : ''}`}
                        title="Chats"
                        onClick={() => {
                            setActiveRailTab('chats')
                            setShowProfileDrawer(false)
                        }}
                    >
                        <IconChats />
                        {totalUnread > 0 && <span className="wa-rail-badge">{totalUnread > 99 ? '99+' : totalUnread}</span>}
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'calls' && !showProfileDrawer ? 'active' : ''}`}
                        title="Llamadas"
                        onClick={() => {
                            setActiveRailTab('calls')
                            setShowProfileDrawer(false)
                        }}
                    >
                        <IconCalls />
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'status' && !showProfileDrawer ? 'active' : ''}`}
                        title="Estado"
                        onClick={() => {
                            setActiveRailTab('status')
                            setShowProfileDrawer(false)
                        }}
                    >
                        <IconStatus />
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'channels' && !showProfileDrawer ? 'active' : ''}`}
                        title="Canales"
                        onClick={() => {
                            setActiveRailTab('channels')
                            setShowProfileDrawer(false)
                        }}
                    >
                        <IconChannels />
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'communities' && !showProfileDrawer ? 'active' : ''}`}
                        title="Comunidades"
                        onClick={() => {
                            setActiveRailTab('communities')
                            setShowProfileDrawer(false)
                        }}
                    >
                        <IconCommunities />
                    </button>

                    <button className="wa-rail-btn" title="Pregúntale a Meta AI">
                        <div className="wa-meta-ai-icon">✨</div>
                    </button>
                </div>

                <div className="wa-rail-bottom">
                    <button className="wa-rail-btn" title="Archivados">
                        <IconArchived />
                    </button>

                    <div
                        className={`wa-rail-profile ${showProfileDrawer ? 'active' : ''}`}
                        title="Ajustes / Perfil"
                        onClick={() => setShowProfileDrawer(prev => !prev)}
                    >
                        <img
                            src="/avatars/perfil.jpg"
                            alt="Perfil"
                        />
                    </div>
                </div>
            </div>

            {/* Main Sidebar Content Area */}
            <div className="wa-sidebar-panel">
                {showProfileDrawer ? (
                    <div className="wa-profile-drawer">
                        {/* Header */}
                        <div className="wa-profile-drawer-header">
                            <button
                                className="wa-profile-back-btn"
                                onClick={() => setShowProfileDrawer(false)}
                                title="Volver a los chats"
                            >
                                ←
                            </button>
                            <h2>Ajustes</h2>
                        </div>

                        {/* Profile Content */}
                        <div className="wa-profile-drawer-body">
                            {/* Profile Hero */}
                            <div className="wa-profile-hero">
                                <div className="wa-profile-avatar-container">
                                <div className="wa-profile-avatar-box">
                                    {profileImgError ? (
                                        <div className="wa-profile-avatar-fallback">U</div>
                                    ) : (
                                        <img
                                            src="/avatars/perfil.jpg"
                                            alt="Tu Perfil"
                                            className="wa-profile-large-img"
                                            onError={() => setProfileImgError(true)}
                                        />
                                    )}
                                    <div className="wa-avatar-hover-overlay">
                                        <span className="wa-camera-icon">📷</span>
                                        <span>CAMBIAR FOTO DE PERFIL</span>
                                    </div>
                                </div>
                                </div>
                                <h1 className="wa-profile-hero-name">Ariana</h1>
                                <p className="wa-profile-hero-phone">+54 9 11 3456-7890</p>
                            </div>

                            {/* Contact Info Card */}
                            <div className="wa-profile-card-info">
                                <div className="wa-profile-info-item">
                                    <span className="wa-profile-info-label">Tu nombre</span>
                                    <p className="wa-profile-info-value">Ariana</p>
                                </div>
                                <div className="wa-profile-info-divider" />
                                <div className="wa-profile-info-item">
                                    <span className="wa-profile-info-label">Info.</span>
                                    <p className="wa-profile-info-value">¡Hola! Estoy usando WhatsApp.</p>
                                </div>
                                <div className="wa-profile-info-divider" />
                                <div className="wa-profile-info-item">
                                    <span className="wa-profile-info-label">Número de teléfono</span>
                                    <p className="wa-profile-info-value">+54 9 11 3456-7890</p>
                                </div>
                            </div>

                            {/* Settings Card */}
                            <div className="wa-profile-settings-card">
                                <div className="wa-profile-setting-row">
                                    <div className="wa-profile-setting-title">
                                        <IconBell />
                                        <span>Notificaciones</span>
                                    </div>
                                    <IconChevronRight />
                                </div>
                                <div className="wa-profile-info-divider" />
                                <div className="wa-profile-setting-row">
                                    <div className="wa-profile-setting-title">
                                        <IconLock />
                                        <span>Privacidad y seguridad</span>
                                    </div>
                                    <IconChevronRight />
                                </div>
                                <div className="wa-profile-info-divider" />
                                <div className="wa-profile-setting-row">
                                    <div className="wa-profile-setting-title">
                                        <IconLockApp />
                                        <span>Bloqueo de aplicación</span>
                                    </div>
                                    <IconChevronRight />
                                </div>
                                <div className="wa-profile-info-divider" />
                                <div className="wa-profile-setting-row wa-profile-setting-static">
                                    <div className="wa-profile-setting-title">
                                        <IconLock />
                                        <div>
                                            <span className="wa-profile-setting-main">Cifrado</span>
                                            <p className="wa-profile-setting-sub">Los mensajes y las llamadas están cifrados de extremo a extremo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Danger Card */}
                            <div className="wa-profile-danger-card">
                                <button className="wa-profile-danger-row">
                                    <IconLogout />
                                    <span>Cerrar sesión</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                {/* Header */}
                <div className="wa-sidebar-header">
                    <h2 className="wa-sidebar-title">WhatsApp</h2>
                    <div className="wa-header-actions" style={{ position: 'relative' }}>
                        <button className="wa-icon-btn" title="Nuevo chat">
                            <IconNewChat />
                        </button>
                        <button
                            className="wa-icon-btn"
                            title="Menú"
                            onClick={() => setIsMenuOpen(prev => !prev)}
                        >
                            <IconMenu />
                        </button>

                        {isMenuOpen && (
                            <div className="wa-dropdown-menu">
                                <button className="wa-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    <IconGroupAdd />
                                    <span>Nuevo grupo</span>
                                </button>
                                <button className="wa-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    <IconStar />
                                    <span>Mensajes destacados</span>
                                </button>
                                <button className="wa-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    <IconSelectChats />
                                    <span>Seleccionar chats</span>
                                </button>
                                <button className="wa-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    <IconMarkRead />
                                    <span>Marcar todos como leídos</span>
                                </button>

                                <div className="wa-dropdown-divider" />

                                <button className="wa-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    <IconLockApp />
                                    <span>Bloqueo de aplicación</span>
                                </button>
                                <button className="wa-dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                    <IconLogout />
                                    <span>Cerrar sesión</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="wa-search-section">
                    <div className="wa-search-box">
                        <span className="wa-search-icon">
                            <IconSearch />
                        </span>
                        <input
                            type="text"
                            className="wa-search-input"
                            placeholder="Buscar un chat o iniciar uno nuevo"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button className="wa-search-clear" onClick={() => setSearchTerm('')}>
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Filter Chips Row */}
                <div className="wa-filter-chips">
                    <button
                        className={`wa-chip ${activeFilter === 'Todos' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('Todos')}
                    >
                        Todos
                    </button>
                    <button
                        className={`wa-chip ${activeFilter === 'No leídos' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('No leídos')}
                    >
                        No leídos {totalUnread > 0 ? totalUnread : ''}
                    </button>
                    <button
                        className={`wa-chip ${activeFilter === 'Favoritos' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('Favoritos')}
                    >
                        Favoritos
                    </button>
                    <button
                        className={`wa-chip ${activeFilter === 'Grupos' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('Grupos')}
                    >
                        Grupos
                    </button>
                    <button className="wa-chip wa-chip-add" title="Añadir filtro">
                        +
                    </button>
                </div>

                {/* Contacts List */}
                <div className="wa-contacts-list">
                    {filteredContacts.length > 0 ? (
                        filteredContacts.map((contact) => {
                            const isSelected = Number(contact_id) === contact.id
                            const initial = contact.name ? contact.name.charAt(0).toUpperCase() : 'C'

                            return (
                                <Link
                                    to={`/contact/${contact.id}`}
                                    key={contact.id}
                                    className={`wa-contact-card ${isSelected ? 'active' : ''}`}
                                >
                                    <div className="wa-avatar-wrapper">
                                        {contact.avatarUrl ? (
                                            <img
                                                src={contact.avatarUrl}
                                                alt={contact.name}
                                                className="wa-avatar-img"
                                            />
                                        ) : (
                                            <div className="wa-avatar-img">{initial}</div>
                                        )}
                                    </div>

                                    <div className="wa-contact-info">
                                        <div className="wa-contact-header">
                                            <span className="wa-contact-name">{contact.name}</span>
                                            <span className={`wa-contact-time ${contact.unreadCount > 0 ? 'unread' : ''}`}>
                                                {contact.time}
                                            </span>
                                        </div>

                                        <div className="wa-contact-body">
                                            <div className="wa-last-msg-container">
                                                {contact.senderPrefix === '✓✓ ' ? (
                                                    <span className="wa-check-icon">
                                                        <IconDoubleCheck />
                                                    </span>
                                                ) : (
                                                    contact.senderPrefix && (
                                                        <span className="wa-sender-prefix">{contact.senderPrefix}</span>
                                                    )
                                                )}
                                                <span className="wa-last-msg-text">
                                                    {contact.lastMessage || 'Sin mensajes'}
                                                </span>
                                            </div>

                                            <div className="wa-contact-meta">
                                                {contact.isMuted && (
                                                    <span className="wa-mute-icon" title="Silenciado">
                                                        <IconMute />
                                                    </span>
                                                )}
                                                {contact.unreadCount > 0 && (
                                                    <span className="wa-unread-badge">{contact.unreadCount}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    ) : (
                        <div className="wa-no-contacts">No se encontraron chats</div>
                    )}
                </div>
            </>
        )}
    </div>
</aside>
    )
}

export default WhatsappSidebar