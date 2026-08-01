/* Icons centralizados (SVG inline estilo Lucide) para toda la app.
   Cada icono acepta un prop opcional `size` para ajustar sus dimensiones. */

const baseProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
}

export const IconChats = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
)

export const IconCalls = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

export const IconStatus = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <circle cx="12" cy="12" r="9" strokeDasharray="14 6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
)

export const IconChannels = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
)

export const IconCommunities = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

export const IconArchived = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
)

export const IconNewChat = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
)

export const IconMenu = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <circle cx="12" cy="5" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="19" r="1.5" fill="currentColor" />
    </svg>
)

export const IconSearch = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
)

export const IconMute = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <path d="M18.63 13A17.89 17.89 0 0 0 18 8" />
        <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
)

export const IconDoubleCheck = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M18 6L7 17l-5-5" />
        <path d="M22 10l-7.5 7.5L13 16" />
    </svg>
)

export const IconGroupAdd = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="16" y1="11" x2="22" y2="11" />
    </svg>
)

export const IconStar = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

export const IconSelectChats = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
)

export const IconMarkRead = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
        <polyline points="22 7 12 13 2 7" />
        <polyline points="16 19 18 21 22 17" />
    </svg>
)

export const IconLockApp = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

export const IconBell = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
)

export const IconLock = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
)

export const IconLogout = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
)

export const IconChevronRight = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

export const IconTheme = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
)

export const IconMoon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)

export const IconClose = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

export const IconPhone = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

export const IconVideo = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
)

export const IconMedia = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
)

export const IconBlock = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
)

export const IconThumbsDown = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
    </svg>
)

export const IconTrash = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
)

export const IconSend = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
)
