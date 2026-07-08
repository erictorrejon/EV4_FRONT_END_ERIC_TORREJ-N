const Sidebar = ({ favorites, toggleFavorite, blocked, unblockCharacter }) => {
  return (
    <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40 transition-all duration-300 lg:sticky lg:top-6">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Favoritos</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Personajes guardados</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Aquí se muestran los personajes que marcaste como favoritos. Puedes quitarlos desde la lista.
        </p>
      </div>

      {favorites?.length ? (
        <div className="space-y-4">
          {favorites.map((character) => (
            <div key={character.id} className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 p-3">
              <img
                src={character.image}
                alt={character.name}
                className="h-14 w-14 rounded-2xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-white">{character.name}</p>
                <p className="truncate text-sm text-slate-400">{character.species}</p>
              </div>
              <button
                type="button"
                onClick={() => toggleFavorite(character)}
                className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-200 transition-all duration-300 hover:bg-rose-500/20"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-400 shadow-sm">
          <p className="text-base font-medium text-white">Aún no tienes personajes favoritos</p>
          <p className="mt-2 text-sm leading-6">Marca un personaje como favorito y aparecerá aquí.</p>
        </div>
      )}

      <div className="mt-10 border-t border-slate-800 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Bloqueados</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Personajes bloqueados</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Los personajes bloqueados no aparecerán en la grilla principal.
        </p>

        {blocked?.length ? (
          <div className="mt-6 space-y-4">
            {blocked.map((character) => (
              <div key={character.id} className="flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 p-3">
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-14 w-14 rounded-2xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-white">{character.name}</p>
                  <p className="truncate text-sm text-slate-400">{character.species}</p>
                </div>
                <button
                  type="button"
                  onClick={() => unblockCharacter(character.id)}
                  className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:bg-cyan-500/20"
                >
                  Desbloquear
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-400 shadow-sm">
            <p className="text-base font-medium text-white">No hay personajes bloqueados</p>
            <p className="mt-2 text-sm leading-6">Bloquea un personaje para que desaparezca de la lista principal.</p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
