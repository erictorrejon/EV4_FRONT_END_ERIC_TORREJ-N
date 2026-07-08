const Stats = ({ totalCharacters, totalFavorites, totalBlocked }) => {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Las tarjetas usan un tratamiento glassmorphism para reforzar el estilo futurista */}
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="glass-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_35px_rgba(16,185,129,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">Personajes visibles</p>
          <p className="mt-4 text-5xl font-extrabold text-slate-900">{totalCharacters}</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">Total de personajes que hay en pantalla según el filtro actual.</p>
        </article>

        <article className="glass-card border-emerald-200/40 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Favoritos</p>
          <p className="mt-4 text-5xl font-extrabold text-emerald-700">{totalFavorites}</p>
          <p className="mt-3 text-sm leading-6 text-emerald-700/80">Personajes que guardaste como favoritos y se mantienen en localStorage.</p>
        </article>

        <article className="glass-card border-blue-200/40 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Bloqueados</p>
          <p className="mt-4 text-5xl font-extrabold text-blue-700">{totalBlocked}</p>
          <p className="mt-3 text-sm leading-6 text-blue-700/80">Personajes bloqueados que no se muestran en la grilla principal.</p>
        </article>
      </div>
    </section>
  )
}

export default Stats
