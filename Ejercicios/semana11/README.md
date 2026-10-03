# Semana 11 - React + Vite por componentes

Base de aplicacion con:

- **Ruteo centralizado** en `src/routes/appRouter.jsx`.
- **Dos layouts**:
  - `MainLayout`: siempre muestra navbar y footer.
  - `AuthLayout`: no muestra navbar ni footer.
- **Provider global** (`AppProvider`) para:
  - estado de autenticacion;
  - tema claro/oscuro;
  - datos administrables de noticias y carrusel.
- **Formularios controlados con validacion regex** (login, registro, recuperar contrasena, admin noticias y admin carrusel).

## Rutas

- `/` -> homepage con 6 componentes visuales (1-6)
- `/auth` -> login + registro en la misma vista con animacion
- `/recuperar-contrasena` -> formulario de recuperacion
- `/simulador` -> placeholder para proxima implementacion (protegido)
- `/admin-noticias` -> administracion de noticias para el componente 4 (protegido)
- `/admin-carrousel` -> administracion de imagenes del carrusel (protegido)

## Scripts

- `npm run dev` inicia entorno local.
- `npm run lint` ejecuta ESLint.
- `npm run build` genera build de produccion.
