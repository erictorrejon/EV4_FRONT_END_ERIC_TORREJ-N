import { useState } from 'react'
import CharacterGrid from './components/CharacterGrid'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [blocked, setBlocked] = useState([])

  const toggleFavorite = (character) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some((item) => item.id === character.id)

      if (alreadyFavorite) {
        // Si ya está como favorito, lo removemos del arreglo.
        return currentFavorites.filter((item) => item.id !== character.id)
      }

      // Si no existe aún, lo añadimos al listado.
      return [...currentFavorites, character]
    })
  }

  const blockCharacter = (character) => {
    setBlocked((currentBlocked) => {
      const alreadyBlocked = currentBlocked.some((item) => item.id === character.id)
      if (alreadyBlocked) return currentBlocked
      return [...currentBlocked, character]
    })

    // Regla crítica de negocio: si el personaje está en favoritos, lo quitamos al bloquearlo.
    setFavorites((currentFavorites) => currentFavorites.filter((item) => item.id !== character.id))
  }

  const unblockCharacter = (characterId) => {
    setBlocked((currentBlocked) => currentBlocked.filter((item) => item.id !== characterId))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="mx-auto grid gap-8 px-4 py-10 sm:px-6 lg:max-w-7xl lg:grid-cols-[1.5fr,0.9fr] lg:gap-10 lg:px-8">
        <CharacterGrid
          searchTerm={searchTerm}
          favorites={favorites}
          blocked={blocked}
          toggleFavorite={toggleFavorite}
          blockCharacter={blockCharacter}
        />
        <Sidebar
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          blocked={blocked}
          unblockCharacter={unblockCharacter}
        />
      </div>
    </div>
  )
}

export default App
