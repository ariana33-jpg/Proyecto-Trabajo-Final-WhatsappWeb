import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";

const ContactContext = createContext()

const server_contacts = [
    {
        id: 1,
        name: "Papá",
        lastMessage: "Asaditoooo",
        time: "12:02 p. m.",
        unreadCount: 0,
        isMuted: false,
        isGroup: false,
        avatarUrl: "/avatars/papa.jpg",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "hola hija , comemos algo este finde?",
                time: "11:58 a. m."
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola paa , claro que sí, cuando quieras",
                time: "12:00 p. m."
            },
            {
                id: 3,
                sendByMe: false,
                content: "Asado o pollo al disco?",
                time: "12:01 p. m."
            },
            {
                id: 4,
                sendByMe: true,
                content: "Asaditoooo",
                time: "12:02 p. m."
            }
        ]
    },
    {
        id: 2,
        name: "Amor",
        lastMessage: "Sii , amo ese plan 😍",
        time: "12:05 p. m.",
        unreadCount: 0,
        isMuted: false,
        isGroup: false,
        avatarUrl: "/avatars/amor.jpg",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hola amor, que tengas un buen día!",
                time: "11:45 a. m."
            },
            {
                id: 2,
                sendByMe: true,
                content: "Gracias amor, igualmente!",
                time: "11:47 a. m."
            },
            {
                id: 3,
                sendByMe: false,
                content: "Te parece ir a merendar a la tarde?",
                time: "12:03 p. m."
            },
            {
                id: 4,
                sendByMe: true,
                content: "Sii , amo ese plan 😍",
                time: "12:05 p. m."
            }
        ]
    },
    {
        id: 3,
        name: "Amiga",
        lastMessage: "Gracias amiga",
        time: "11:30 a. m.",
        unreadCount: 0,
        isMuted: false,
        isGroup: false,
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hola amiga , tengo que contarte algo , cuando puedas me llamas?",
                time: "11:15 a. m."
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola amiga, si , obvio , estoy en el gym ahora , te llamo en un rato",
                time: "11:20 a. m."
            },
            {
                id: 3,
                sendByMe: false,
                content: "Dale , te espero",
                time: "11:25 a. m."
            },
            {
                id: 4,
                sendByMe: true,
                content: "Gracias amiga",
                time: "11:30 a. m."
            }
        ]
    },
    {
        id: 4,
        name: "Hermanita mo",
        lastMessage: "Decime que somos hermanas sin decirme que somos hermanas",
        time: "Ayer",
        unreadCount: 0,
        isMuted: false,
        isGroup: false,
        avatarUrl: "/avatars/hermanita.jpg",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hermanitaa , que andas haciendo?",
                time: "09:10 a. m."
            },
            {
                id: 2,
                sendByMe: true,
                content: "Nadaaa , estoy en casa viendo una peli",
                time: "09:12 a. m."
            },
            {
                id: 3,
                sendByMe: false,
                content: "Jajaja sí , yo también estoy en casa viendo una peli",
                time: "09:15 a. m."
            },
            {
                id: 4,
                sendByMe: true,
                content: "Decime que somos hermanas sin decirme que somos hermanas",
                time: "09:16 a. m."
            }
        ]
    }
]

function ContactContextProvider() {
    const [contacts, setContacts] = useState(server_contacts)

    const { contact_id } = useParams()

    let contact_selected = null

    if (contact_id) {
        contact_selected = contacts.find(contact => contact.id === Number(contact_id))
    }

    function getCurrentFormattedTime() {
        return new Date().toLocaleTimeString('es-AR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    function deleteMessageById(message_id) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    const message_index = contact.messages.findIndex(message => message.id === Number(message_id))
                    if (message_index !== -1) {
                        contact.messages.splice(message_index, 1)
                        // Update lastMessage if array is modified
                        const lastMsg = contact.messages[contact.messages.length - 1]
                        contact.lastMessage = lastMsg ? lastMsg.content : ''
                    }
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function createMessage(value, sendByMe) {
        const nowFormatted = getCurrentFormattedTime()

        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    const new_message = {
                        content: value,
                        sendByMe: sendByMe,
                        id: Date.now(),
                        time: nowFormatted
                    }
                    contact.messages.push(new_message)
                    contact.lastMessage = value
                    contact.time = nowFormatted
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function deleteAllMessages() {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    contact.messages = []
                    contact.lastMessage = ''
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function addNewContact(newContact) {
        setContacts((currentContacts) => [...currentContacts,
            {
                ...newContact,
                id: Date.now(),
                lastMessage: "",
                time: "",
                unreadCount: 0,
                isMuted: false,
                isGroup: false,
                messages: []
            }
        ])
    }

    const provider_values = {
        contacts: contacts,
        contact_selected,
        deleteMessageById,
        createMessage,
        deleteAllMessages,
        addNewContact
    }
    return (
        <ContactContext.Provider value={provider_values}>
            <Outlet />
        </ContactContext.Provider>
    )
}

export { ContactContext, ContactContextProvider }
