import { useContext , useState } from "react";
import { useNavigate } from "react-router";
import WhatsappSidebar from "../../Components/WhatsappSidebar/WhatsappSidebar";
import "./NewContactScreen.css";
import { ContactContext } from "../../Context/ContactContext";

function NewContactScreen() {
    const { addNewContact } = useContext(ContactContext);
    const navigate = useNavigate();
    const [nombre , setNombre ] = useState("");
    const [apellido , setApellido ] = useState("");
    const [usuario,setUsuario] = useState("");
    const [pais , setPais] = useState("");
    const [telefono , setTelefono] = useState("");
    return (
        <div className="wa-app-layout wa-new-contact-layout">
            <WhatsappSidebar />

            <main className="wa-new-contact-screen">

                <div className="new-contact-container">

                    <div className="new-contact-header">
                        <button 
                            type="button"
                            className="new-contact-back"
                            onClick={() => navigate("/home")}
                            title="Volver"
                        >
                            ←
                        </button>

                        <h1>Nuevo contacto</h1>
                    </div>

                    <form className="new-contact-form"
                    onSubmit={handleSubmit}
                    >

                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Apellido</label>
                            <input
                                type="text"
                                placeholder="Apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Nombre de usuario</label>
                            <input
                                type="text"
                                placeholder="Nombre de usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>País</label>

                            <select
                                value={pais}
                                onChange={(e) => setPais(e.target.value)}
                            >
                                <option value="Argentina">🇦🇷 Argentina</option>
                                <option value="Brasil">🇧🇷 Brasil</option>
                                <option value="Uruguay">🇺🇾 Uruguay</option>
                                <option value="Chile">🇨🇱 Chile</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Número de teléfono</label>
                            <input
                                type="tel"
                                placeholder="Número de teléfono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>

                        <div className="new-contact-actions">
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={() => navigate("/home")}
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="btn-save"
                            >
                                Guardar
                            </button>
                        </div>

                    </form>

                </div>

            </main>
        </div>
    );

    function handleSubmit(e) {
        e.preventDefault();
        const newContact = {
            name: nombre,
            lastName: apellido,
            username: usuario,
            country: pais,
            phone: telefono
        };

        addNewContact(newContact);
        navigate("/home");
        setNombre("");
        setApellido("");
        setUsuario("");
        setPais("Argentina");
        setTelefono("");
    }
}

export default NewContactScreen;
