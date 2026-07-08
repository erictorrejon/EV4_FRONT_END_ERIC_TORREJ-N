const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-slate-950 shadow-sm shadow-slate-900/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Rick and Morty</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Busca tu personaje favorito</h2>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/95 px-4 py-3 text-sm text-slate-300 shadow-md shadow-slate-950/40">
            <p className="font-semibold text-slate-100">Proyecto desarrollado por</p>
            <p className="mt-1 text-white">Eric Torrejón</p>
            <p className="mt-2 text-xs text-slate-400">Responsivo, usable y optimizado para evaluación final.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="w-full">
            <span className="sr-only">Buscar personajes</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Escribe el nombre de un personaje..."
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            />
          </label>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Filtra la lista en tiempo real. La búsqueda no distingue entre mayúsculas y minúsculas.
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
