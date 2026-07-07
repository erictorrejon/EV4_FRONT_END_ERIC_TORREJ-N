import CharacterCard from './CharacterCard'
import useFetch from '../hooks/useFetch'

const API_URL = 'https://rickandmortyapi.com/api/character'

const CharacterGrid = () => {
  const { data, loading, error } = useFetch(API_URL)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-lg shadow-slate-200/80">
          <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-slate-700 font-medium">Cargando personajes...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-xl rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-900 shadow-lg shadow-rose-200/50">
          <h2 className="text-2xl font-semibold">Error al cargar personajes</h2>
          <p className="mt-3 text-sm leading-6">
            {error}
          </p>
          <p className="mt-4 text-sm text-rose-700/90">Intenta recargar la página o revisa tu conexión a internet.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">Rick and Morty API</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Listado de personajes
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Consumimos datos públicos desde la API de Rick and Morty y mostramos cada personaje con su imagen, estado y especie.
        </p>
      </header>

      <section className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.length ? (
          data.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-700 shadow-lg shadow-slate-200/80">
            No se encontraron personajes en este momento.
          </div>
        )}
      </section>
    </main>
  )
}

export default CharacterGrid
