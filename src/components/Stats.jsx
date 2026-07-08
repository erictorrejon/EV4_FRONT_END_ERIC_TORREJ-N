const Stats = ({ totalCharacters, totalFavorites, totalBlocked }) => {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-[2rem] bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Personajes visibles</p>
          <p className="mt-4 text-5xl font-extrabold text-white">{totalCharacters}</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">Total de personajes que hay en pantalla según el filtro actual.</p>
        </article>

        <article className="rounded-[2rem] bg-emerald-950/95 p-6 shadow-2xl shadow-emerald-950/40 ring-1 ring-emerald-700 transition-all duration-300 hover:-translate-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Favoritos</p>
          <p className="mt-4 text-5xl font-extrabold text-emerald-100">{totalFavorites}</p>
          <p className="mt-3 text-sm leading-6 text-emerald-200/80">Personajes que guardaste como favoritos y se mantienen en localStorage.</p>
        </article>

        <article className="rounded-[2rem] bg-violet-950/95 p-6 shadow-2xl shadow-violet-950/40 ring-1 ring-violet-700 transition-all duration-300 hover:-translate-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">Bloqueados</p>
          <p className="mt-4 text-5xl font-extrabold text-violet-100">{totalBlocked}</p>
          <p className="mt-3 text-sm leading-6 text-violet-200/80">Personajes bloqueados que no se muestran en la grilla principal.</p>
        </article>
      </div>
    </section>
  )
}

export default Stats
