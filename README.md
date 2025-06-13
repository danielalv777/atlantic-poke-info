# 🧩 Pokémon Explorer App

Aplicación web creada con **React + TypeScript** que consume la [PokeAPI](https://pokeapi.co/) para mostrar una lista de Pokémon con imágenes, datos de detalle, y navegación por páginas. Incluye un sistema básico de autenticación.

### 🔗 Demo desplegada en Vercel:
👉 [https://atlantic-poke-info.vercel.app/](https://atlantic-poke-info.vercel.app/)

---

## 📺 Funcionalidades

- 🔐 **Login** con validación local de usuario.
- 👤 Acceso como **usuario registrado o invitado**.
- 📄 **Dashboard** con listado paginado de Pokémon.
- 📃 **Pantalla de detalle** para ver nombre, imagen, experiencia y movimientos.
- 📱 Diseño **responsive** (grid adaptable hasta 1 columna en móvil).
- 🌐 Despliegue automático en **Vercel**.

---

## 🔑 Credenciales de acceso

Podés usar alguno de estos usuarios o ingresar como "invitado":

```ts
export const CREDENCIALES_VALIDAS = [
  { user: 'charmander777', password: '123456' },
  { user: 'larvesta123', password: '123456' },
  { user: 'lucarioSNK', password: '123456' },
];

```

---

## ⚙️ Cómo ejecutar el proyecto localmente

1. Clonar el repositorio

```ts
git clone https://github.com/danielalv777/atlantic-poke-info.git
cd tu-repo

```
2. Instalar dependencias y Ejecutar el entorno de desarrollo

```ts
npm install
npm run dev
```

---

## 🧪 Tecnologías utilizadas

  - ⚛️ React + Vite
  - 💅 SCSS Modules
  - 🪝 React Hooks
  - 🧠 Zustand (manejo de estado global)
  - 📡 Fetch API
  - 🧪 TypeScript

## 📦 Estructura del proyecto

```ts
src/
├── app/               # Configuración global (zustand, rutas)
├── features/          # Login, dashboard, info de pokémon
├── services/          # Llamadas a la API
├── assets/            # Imágenes y recursos estáticos
├── types/             # Tipado de interfaces
└── App.tsx            # Componente principal
```
---

## ✨ Autor

Desarrollado por Jahil Alvarez como proyecto de práctica con la PokéAPI.