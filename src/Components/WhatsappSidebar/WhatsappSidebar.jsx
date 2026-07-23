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

const WhatsappSidebar = () => {
    const { contacts } = useContext(ContactContext)
    const { contact_id } = useParams()
    const [searchTerm, setSearchTerm] = useState('')
    const [activeFilter, setActiveFilter] = useState('Todos')
    const [activeRailTab, setActiveRailTab] = useState('chats')

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
                        className={`wa-rail-btn ${activeRailTab === 'chats' ? 'active' : ''}`}
                        title="Chats"
                        onClick={() => setActiveRailTab('chats')}
                    >
                        <IconChats />
                        {totalUnread > 0 && <span className="wa-rail-badge">{totalUnread > 99 ? '99+' : totalUnread}</span>}
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'calls' ? 'active' : ''}`}
                        title="Llamadas"
                        onClick={() => setActiveRailTab('calls')}
                    >
                        <IconCalls />
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'status' ? 'active' : ''}`}
                        title="Estado"
                        onClick={() => setActiveRailTab('status')}
                    >
                        <IconStatus />
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'channels' ? 'active' : ''}`}
                        title="Canales"
                        onClick={() => setActiveRailTab('channels')}
                    >
                        <IconChannels />
                    </button>

                    <button
                        className={`wa-rail-btn ${activeRailTab === 'communities' ? 'active' : ''}`}
                        title="Comunidades"
                        onClick={() => setActiveRailTab('communities')}
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

                    <div className="wa-rail-profile" title="Ajustes / Perfil">
                        <img
                            src="/avatars/perfil.jpg"
                            alt="Perfil"
                        />
                    </div>
                </div>
            </div>

            {/* Main Sidebar Content Area */}
            <div className="wa-sidebar-panel">
                {/* Header */}
                <div className="wa-sidebar-header">
                    <h2 className="wa-sidebar-title">WhatsApp</h2>
                    <div className="wa-header-actions">
                        <button className="wa-icon-btn" title="Nuevo chat">
                            <IconNewChat />
                        </button>
                        <button className="wa-icon-btn" title="Menú">
                            <IconMenu />
                        </button>
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
                                                {contact.time || '12:00 p. m.'}
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
            </div>
        </aside>
    )
}

export default WhatsappSidebar