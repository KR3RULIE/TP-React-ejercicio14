# 🥗 Frontend de Recetas de Cocina

Este proyecto es la interfaz de usuario para la aplicación de **Recetas de Cocina**, desarrollada con **React**.  
Permite a los usuarios registrarse, iniciar sesión, explorar recetas, crear nuevas y gestionarlas de forma sencilla e intuitiva.

---

## 👨‍💻 Autor

**Marcos Joel Tebis**

---

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) — Biblioteca principal para la construcción de la interfaz.
- [React DOM](https://react.dev/) — Renderizado de la aplicación en el navegador.
- [React Router](https://reactrouter.com/) — Navegación entre páginas.
- [React Hook Form](https://react-hook-form.com/) — Manejo de formularios y validaciones.
- [Bootstrap](https://getbootstrap.com/) — Framework de estilos CSS.
- [React Bootstrap](https://react-bootstrap.github.io/) — Componentes de Bootstrap adaptados a React.
- [SweetAlert2](https://sweetalert2.github.io/) — Alertas y notificaciones atractivas para el usuario.

---

## 📦 Instalación

Clona este repositorio e instala las dependencias:

```bash
    git clone https://github.com/KR3RULIE/TP-React-ejercicio14.git
    npm install
```

## Variables de entorno

Debes crear el archivo (.env) a la altura del index.html o pachage.json y agregar lo siguiente.

```bash
    VITE_API_EMAIL=admin@gmail.com
    VITE_API_PW=Qw123!56
    VITE_API_RECETAS=http://localhost:3000/api/recetas
    VITE_API_USUARIOS=http://localhost:3000/api/usuarios
```

## Como iniciar el FrontEnd?

Para poder iniciar el proyecto y que se conecte a la base de datos, debes tener instalado Postman, ademas tener el proyecto de la base de datos [Backend](https://github.com/KR3RULIE/tp-backend-ejercicio05.git) iniciado y conectado a postman, finalmente usar el siguiente comando en la terminal:

NOTA: (sugiero ver algun video tutorial de como crear las: POST - GET - DELETE - PUT en Postman)

```bash
    npm run dev
```