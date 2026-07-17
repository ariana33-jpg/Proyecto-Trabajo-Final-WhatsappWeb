import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";

const ContactContext = createContext()

const server_contacts = [
    {
        id: 1,
        name: "Papá",
        lastMessage: "Asaditoooo",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "hola hija , comemos algo este finde?"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola paa , claro que sí, cuando quieras"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Asado o pollo al disco?"
            },
            {
                id: 4,
                sendByMe: true,
                content: "Asaditoooo"
            }
        ]
    },
    {
        id: 2,
        name: "Amor",
        lastMessage: "Sii , amo ese plan 😍",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hola amor, que tengas un buen día!"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Gracias amor, igualmente!"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Te parece ir a merendar a la tarde?"
            },
            {
                id: 4,
                sendByMe: true,
                content: "Sii , amo ese plan 😍"
            }
        ]
    },
    {
        id: 3,
        name: "Amiga",
        lastMessage: "Gracias amiga",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hola amiga , tengo que contarte algo , cuando puedas me llamas?"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola amiga, si , obvio , estoy en el gym ahora , te llamo en un rato"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Dale , te espero"
            },
            {
                id: 4,
                sendByMe: true,
                content: "gracias amiga"
            }
        ]
    },
    {
        id: 4,
        name: "Hermanita mo",
        lastMessage: "Decime que somos hermanas sin decirme que somos hermanas",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hermanitaa , que andas haciendo?"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Nadaaa , estoy en casa viendo una peli"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Jajaja sí , yo también estoy en casa viendo una peli"
            },
            {
                id: 4,
                sendByMe: true,
                content: "Decime que somos hermanas sin decirme que somos hermanas"
            }
        ]
    },
]

function ContactContextProvider() {
    const [contacts, setContacts] = useState(server_contacts)

    const { contact_id } = useParams()

    let contact_selected = null

    if (contact_id) {
        contact_selected = contacts.find(contact => contact.id === Number(contact_id))
    }

    function deleteMessageById(message_id) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    const message_index = contact.messages.findIndex(message => message.id === Number(message_id))
                    contact.messages.splice(message_index, 1)
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function createMessage(value, sendByMe) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {

                    const new_message = {
                        content: value,
                        sendByMe: sendByMe,
                        id: contact.messages.length + 1
                    }
                    contact.messages.push(new_message)
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
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    /* 
    createContact
    deleteContactById
    updateContactById
    updateMessageById
    */



    const provider_values = {
        contacts: contacts,
        contact_selected,
        deleteMessageById,
        createMessage,
        deleteAllMessages
    }
    return (
        <ContactContext.Provider value={provider_values}>
            {/* 
            el outlet hace referencia a las subrutas
            */}
            <Outlet />
        </ContactContext.Provider>
    )
}


export { ContactContext, ContactContextProvider }