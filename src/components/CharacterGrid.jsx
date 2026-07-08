import { useState } from 'react'
import CharacterCard from './CharacterCard'

const CharacterGrid = ({ characters, favorites, toggleFavorite, blockCharacter, loading, error }) => {
  const [selectedId, setSelectedId] = useState(null)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
        <div className="inline-flex items-center gap-3 rounded-3xl border border-zinc-800 bg-zinc-900/80 px-6 py-5 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-100 font-medium">Cargando personajes...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
        <div className="max-w-xl rounded-3xl border border-rose-500/20 bg-zinc-900/90 p-6 text-white shadow-[0_20px_80px_rgba(139,92,246,0.18)]">
          <h2 className="text-2xl font-semibold">Error al cargar personajes</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {error}
          </p>
          <p className="mt-4 text-sm text-rose-300/90">Intenta recargar la página o revisa tu conexión a internet.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="character-grid min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">Rick and Morty API</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Explora la tripulación espacial
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          Desliza entre personajes cargados desde la API, selecciona tu favorito y bloquea a los que quieres dejar fuera.
        </p>
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_10px_30px_rgba(14,165,233,0.12)] backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Haz clic en una tarjeta para resaltarla en la cuadrícula
        </div>
      </header>

      <section className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters?.length ? (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              selected={selectedId === character.id}
              onSelect={() => setSelectedId(character.id)}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              blockCharacter={blockCharacter}
            />
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-slate-700 bg-zinc-950/90 p-8 text-center text-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h2 className="text-xl font-semibold text-white">No se encontraron personajes</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No se encontraron personajes que coincidan con la búsqueda.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default CharacterGrid
