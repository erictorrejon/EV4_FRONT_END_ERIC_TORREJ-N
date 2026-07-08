const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-white shadow-sm shadow-slate-200/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">Rick and Morty</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Busca tu personaje favorito</h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-800">Integrantes del grupo</p>
            <p>Eric Torrejón</p>
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
