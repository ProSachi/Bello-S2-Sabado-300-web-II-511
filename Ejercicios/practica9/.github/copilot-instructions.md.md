Actúa como un desarrollador Frontend Senior experto en React, Vite y JavaScript. Necesito que generes el código completo y estructurado para una aplicación web de adopción de mascotas para un albergue, aprovechando la ocasión de Amor y Am amistad. 

### Contexto y Requisitos Técnicos
- **Entorno:** React con Vite y JavaScript (las dependencias ya están instaladas).
- **Estilos:** Formatea el estilo por defecto que trae Vite. Los archivos de estilos deben estar separados de los componentes (archivos CSS independientes por componente o por vista).
- **Base de Datos:** Simula una base de datos local (puede ser un archivo con datos mock guardados y persistidos en `localStorage` para que las solicitudes y vistas se actualicen).
- **Arquitectura y Enrutamiento (React Router):**
  - Utiliza componentes modulares para separar responsabilidades y vistas.
  - Implementa un `Layout` con `<Outlet />` para las vistas que **deben** tener siempre la barra de navegación y el footer (Catálogo, Formulario de Adopción, etc.).
  - Las vistas que **NO** deben llevar la barra de navegación ni el footer son exclusivamente: **Login**, **Registro** y **Contáctenos**.
- **Buenas Prácticas:** 
  - Uso correcto de Hooks (`useState`, `useEffect`, `useNavigate`, etc.).
  - Uso de `props` para las tarjetas de mascotas.
  - Validación de formularios utilizando **Regex** (correo electrónico, contraseñas, teléfonos, etc.).

### Funcionalidades Específicas
1. **Barra de Navegación y Footer:** 
   - Navegación fluida entre opciones (según la regla del layout).
   - Footer con los datos de contacto del albergue.
2. **Catálogo de Mascotas:**
   - Visualización en tarjetas reutilizables utilizando `props`.
   - **Sistema de métricas y ordenamiento inteligente:** Cada mascota debe tener un contador de visitas y un registro de solicitudes de adopción. El orden de visualización de las tarjetas debe priorizar en la parte superior a las mascotas que tengan **menos vistas y menos solicitudes de adopción**.
   - Al hacer clic en una mascota, se debe poder ver su detalle o iniciar el proceso de adopción.
3. **Autenticación (Login y Registro):**
   - Vistas independientes sin barra de navegación ni footer.
   - Validación robusta con Regex en los campos.
   - Simulación de sesión para permitir una adopción responsable (usuario identificado).
4. **Formulario de Adopción:**
   - Se accede tras seleccionar una mascota del catálogo y estar autenticado.
   - El formulario debe precargar o relacionar la mascota seleccionada.
   - Al enviar el formulario, debe registrar formalmente que dicha mascota cuenta con una nueva solicitud de adopción en la base de datos local (`localStorage`), actualizando las métricas de ordenamiento.

Por favor, entrega la estructura de carpetas sugerida y el código completo de los componentes principales, rutas, estilos y manejo de estado local.