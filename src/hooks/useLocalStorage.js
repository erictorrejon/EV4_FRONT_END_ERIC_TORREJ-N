import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  // Inicializamos el estado leyendo localStorage de forma segura.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Si ocurre un error durante el parseo, usamos el valor inicial
      console.warn(`Error leyendo localStorage para la clave "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.warn(`Error guardando en localStorage para la clave "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
