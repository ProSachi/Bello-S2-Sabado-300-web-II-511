import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const initialNoticias = [
  {
    id: 1,
    title: 'Lanzamiento del Nuevo Portal Web II',
    category: 'Tecnología',
    snippet: 'Presentamos la nueva plataforma interactiva desarrollada con React y Vite.',
    content: 'La nueva plataforma cuenta con arquitectura modular, sistema de rutas optimizado, control de temas claro/oscuro y validación estricta en formularios.',
    date: '2026-10-01',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'Actualización en Métodos de Autenticación',
    category: 'Seguridad',
    snippet: 'Implementación de formulaciones controladas con Regex y diseño animado interactivo.',
    content: 'Se integró una experiencia fluida entre Iniciar Sesión y Registrarse mediante transiciones animadas avanzadas.',
    date: '2026-10-02',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    title: 'Próxima Entrega: Módulo Simulador',
    category: 'Proyectos',
    snippet: 'El simulador avanzado se encuentra listo en fase de prototipado inicial.',
    content: 'El componente Simulador está alojado bajo el sistema de rutas principales para su posterior expansión lógica.',
    date: '2026-10-03',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60'
  }
];

const initialCarousel = [
  {
    id: 1,
    title: 'Desarrollo Web de Alta Eficiencia',
    description: 'Construido con React, Vite y arquitecturas por componentes reutilizables.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
    tag: 'Innovación'
  },
  {
    id: 2,
    title: 'Modos Claro y Oscuro Personalizables',
    description: 'Gestión global del tema mediante React Context Provider.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    tag: 'Experiencia UX'
  },
  {
    id: 3,
    title: 'Formularios Seguros y Validados',
    description: 'Componentes controlados y validaciones dinámicas con expresiones regulares (Regex).',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
    tag: 'Seguridad'
  }
];

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-theme') || 'dark';
  });

  // Auth state
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('app-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isLoggedIn = Boolean(user);

  // Noticias state
  const [noticias, setNoticias] = useState(() => {
    const saved = localStorage.getItem('app-noticias');
    return saved ? JSON.parse(saved) : initialNoticias;
  });

  // Carousel images state
  const [carouselImages, setCarouselImages] = useState(() => {
    const saved = localStorage.getItem('app-carousel');
    return saved ? JSON.parse(saved) : initialCarousel;
  });

  // Apply theme class to <html> tag
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  // Save noticias to localStorage
  useEffect(() => {
    localStorage.setItem('app-noticias', JSON.stringify(noticias));
  }, [noticias]);

  // Save carousel to localStorage
  useEffect(() => {
    localStorage.setItem('app-carousel', JSON.stringify(carouselImages));
  }, [carouselImages]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('app-user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app-user');
  };

  // Noticias handlers
  const addNoticia = (newNoticia) => {
    setNoticias(prev => [{ ...newNoticia, id: Date.now() }, ...prev]);
  };

  const updateNoticia = (id, updatedData) => {
    setNoticias(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const deleteNoticia = (id) => {
    setNoticias(prev => prev.filter(item => item.id !== id));
  };

  // Carousel handlers
  const addCarouselImage = (newImage) => {
    setCarouselImages(prev => [{ ...newImage, id: Date.now() }, ...prev]);
  };

  const updateCarouselImage = (id, updatedData) => {
    setCarouselImages(prev => prev.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  const deleteCarouselImage = (id) => {
    setCarouselImages(prev => prev.filter(item => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        isLoggedIn,
        login,
        logout,
        noticias,
        addNoticia,
        updateNoticia,
        deleteNoticia,
        carouselImages,
        addCarouselImage,
        updateCarouselImage,
        deleteCarouselImage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};
