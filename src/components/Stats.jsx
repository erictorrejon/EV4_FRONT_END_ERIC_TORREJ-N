const Stats = ({ totalCharacters, totalFavorites, totalBlocked }) => {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-[2rem] bg-white/90 p-6 shadow-lg shadow-slate-200/40 ring-1 ring-slate-100">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Personajes visibles</p>
          <p className="mt-4 text-5xl font-extrabold text-slate-900">{totalCharacters}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">Total de personajes que hay en pantalla según el filtro actual.</p>
        </article>

        <article className="rounded-[2rem] bg-cyan-50/90 p-6 shadow-lg shadow-cyan-200/40 ring-1 ring-cyan-100">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">Favoritos</p>
          <p className="mt-4 text-5xl font-extrabold text-cyan-900">{totalFavorites}</p>
          <p className="mt-3 text-sm leading-6 text-cyan-700/80">Personajes que guardaste como favoritos y se mantienen en localStorage.</p>
        </article>

        <article className="rounded-[2rem] bg-rose-50/90 p-6 shadow-lg shadow-rose-200/40 ring-1 ring-rose-100">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-700">Bloqueados</p>
          <p className="mt-4 text-5xl font-extrabold text-rose-900">{totalBlocked}</p>
          <p className="mt-3 text-sm leading-6 text-rose-700/80">Personajes bloqueados que no se muestran en la grilla principal.</p>
        </article>
      </div>
    </section>
  )
}

export default Stats
