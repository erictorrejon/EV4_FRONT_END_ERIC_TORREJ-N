const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-white/60 border-b border-zinc-200 shadow-[0_20px_40px_rgba(2,6,23,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">Rick and Morty</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Busca tu personaje favorito</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-700">Navega entre personajes con estilo claro y legible.</p>
          </div>
          <div className="rounded-[1.75rem] border border-emerald-200/60 bg-white/60 px-6 py-3 text-sm text-slate-900 shadow-sm backdrop-blur-sm transition duration-300 hover:border-emerald-300/60">
            <p className="font-semibold uppercase tracking-[0.32em] text-emerald-700 text-xs">Crew de la Dimensión C-137</p>
            <p className="mt-2 text-base font-extrabold text-slate-900 tracking-widest">Eric Torrejón &amp; Yasser Lara</p>
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
              className="w-full rounded-[1.75rem] border border-zinc-800/80 bg-zinc-900/70 px-5 py-4 text-slate-100 shadow-lg shadow-slate-950/40 outline-none transition duration-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 backdrop-blur-md"
            />
          </label>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Filtra la lista en tiempo real. La búsqueda no distingue entre mayúsculas y minúsculas.
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
