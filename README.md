# WhatsApp Web Clone

Clon de **WhatsApp Web** hecho con React, presentado como Trabajo Final de la materia Frontend. Intenté replicar lo más parecido posible la interfaz y las funciones principales del WhatsApp Web real, así que me guié en el diseño oficial.

## Qué incluye

- **Lista de chats** con la barra de navegación lateral (iconos), buscador de chats y filtros: Todos, No leídos, Favoritos y Grupos.
- **Sala de chat** donde se pueden mandar mensajes, ver la hora y el doble check, y borrar mensajes individuales.
- **Info del contacto**: acá se ve la foto, el estado, el número de teléfono y opciones como silenciar, bloquear, reportar o eliminar el chat.
- **Ajustes / Perfil**: desde mi foto de perfil se abre el panel con mis datos y algunas opciones de cuenta.
- **Nuevo contacto** con un formulario completo (nombre, apellido, usuario, país y teléfono).
- **Modo claro/oscuro** que se queda guardado para la próxima visita.
- **Emojis**: un panel chico de emojis para acompañar los mensajes.

## Qué usé

- **React** para toda la interfaz y el manejo de componentes.
- **React Router** para la navegación entre las páginas (`/`, `/home`, `/new-contact` y `/contact/:contact_id`).
- **Vite** como entorno de desarrollo y para el build.
- **oxlint** para mantener el código ordenado.
- **Vercel** para el deploy final.

## Cómo se organiza el código

```
src/
├── App.jsx                  # Rutas y aplicación del tema (data-theme)
├── index.css                # Variables de diseño (tema oscuro/claro)
├── Components/
│   ├── Icons.jsx            # Iconos SVG centralizados (para no repetirlos)
│   ├── WhatsappSidebar/     # Rail + lista de chats + ajustes/perfil
│   ├── Messages/            # Sala de chat + lista de mensajes + emojis
│   └── ContactInfo/         # Panel "Info. del contacto"
├── Context/
│   ├── ContactContext.jsx   # Contactos, mensajes y acciones del chat
│   └── ThemeContext.jsx     # Tema claro/oscuro persistente
└── Screens/
    ├── HomeScreen/          # Página de inicio
    ├── ContactChatScreen/   # Chat con un contacto
    └── NewContactScreen/    # Formulario de nuevo contacto
```


## Deploy

Dejé el `vercel.json` con los rewrites para que funcione como SPA en **Vercel**. Al conectar el repositorio de GitHub, cada push a `main` se despliega solo.

## Dificultades que fui encontrando

- **La responsividad (320px a 2000px)**: tuve que ir ajustando los media queries para que el rail, la lista de chats, la sala de chat y los paneles laterales (info de contacto y ajustes) no se rompan en ningún tamaño de pantalla.
- **El modo claro/oscuro**: al principio los colores estaban fijos en cada CSS, así que tuve que pasarlos todos a variables (`--wa-*`) en `index.css` y definir el bloque `[data-theme="light"]`. Me gustó que la barra lateral izquierda quedara oscura en los dos temas, como en el WhatsApp de verdad.
- **Guardar el tema elegido**: lo resolví con `localStorage` para que al recargar la página no se pierda.
- **No repetir código**: los mismos iconos (campana, candado, buscar, teléfono, etc.) estaban copiados en varios componentes, así que los junté todos en `Components/Icons.jsx` para reutilizarlos.
