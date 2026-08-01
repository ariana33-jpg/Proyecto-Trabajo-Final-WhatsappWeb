import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import { ThemeContext } from '../../Context/ThemeContext'
import {
    IconChats,
    IconCalls,
    IconStatus,
    IconChannels,
    IconCommunities,
    IconArchived,
    IconNewChat,
    IconMenu,
    IconSearch,
    IconMute,
    IconDoubleCheck,
    IconGroupAdd,
    IconStar,
    IconSelectChats,
    IconMarkRead,
    IconLockApp,
    IconBell,
    IconLock,
    IconLogout,
    IconChevronRight,
    IconTheme,
    IconMoon
} from '../Icons'
import './WhatsappSidebar.css'

const WhatsappSidebar = () => {
    const { contacts } = useContext(ContactContext)
    const { theme, toggleTheme } = useContext(ThemeContext)
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
                        <button
                            className="wa-icon-btn"
                            title={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? <IconTheme /> : <IconMoon />}
                        </button>
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