import { useEffect, useMemo, useState } from 'react'
import { initialCarouselImages, initialNews } from '../data/mockData.js'
import { AppContext } from './appContext.js'

const APP_STORAGE_KEYS = {
  theme: 'app-theme',
  auth: 'app-is-authenticated',
}

const safeWindow = typeof window !== 'undefined' ? window : undefined

function getStoredBoolean(key, fallbackValue = false) {
  if (!safeWindow) {
    return fallbackValue
  }

  const value = safeWindow.localStorage.getItem(key)
  if (value === null) {
    return fallbackValue
  }

  return value === 'true'
}

function getStoredTheme() {
  if (!safeWindow) {
    return 'light'
  }

  const value = safeWindow.localStorage.getItem(APP_STORAGE_KEYS.theme)
  return value === 'dark' ? 'dark' : 'light'
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme)
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    getStoredBoolean(APP_STORAGE_KEYS.auth),
  )
  const [news, setNews] = useState(initialNews)
  const [carouselImages, setCarouselImages] = useState(initialCarouselImages)

  useEffect(() => {
    if (!safeWindow) {
      return
    }

    safeWindow.localStorage.setItem(APP_STORAGE_KEYS.theme, theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!safeWindow) {
      return
    }

    safeWindow.localStorage.setItem(
      APP_STORAGE_KEYS.auth,
      String(isAuthenticated),
    )
  }, [isAuthenticated])

  const value = useMemo(
    () => ({
      theme,
      isAuthenticated,
      news,
      carouselImages,
      login: () => setIsAuthenticated(true),
      logout: () => setIsAuthenticated(false),
      addNews: (newsItem) =>
        setNews((currentNews) => [
          { ...newsItem, id: crypto.randomUUID() },
          ...currentNews,
        ]),
      removeNews: (newsId) =>
        setNews((currentNews) =>
          currentNews.filter((currentItem) => currentItem.id !== newsId),
        ),
      addCarouselImage: (image) =>
        setCarouselImages((currentImages) => [
          ...currentImages,
          { ...image, id: crypto.randomUUID() },
        ]),
      removeCarouselImage: (imageId) =>
        setCarouselImages((currentImages) =>
          currentImages.filter((currentImage) => currentImage.id !== imageId),
        ),
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === 'light' ? 'dark' : 'light',
        ),
    }),
    [carouselImages, isAuthenticated, news, theme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
