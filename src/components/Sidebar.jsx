const Sidebar = ({ favorites, toggleFavorite, blocked, unblockCharacter }) => {
  return (
    <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 lg:sticky lg:top-6">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">Favoritos</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Personajes guardados</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Aquí se muestran los personajes que marcaste como favoritos. Puedes quitarlos desde la lista.
        </p>
      </div>

      {favorites?.length ? (
        <div className="space-y-4">
          {favorites.map((character) => (
            <div key={character.id} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3">
              <img
                src={character.image}
                alt={character.name}
                className="h-14 w-14 rounded-2xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-slate-900">{character.name}</p>
                <p className="truncate text-sm text-slate-600">{character.species}</p>
              </div>
              <button
                type="button"
                onClick={() => toggleFavorite(character)}
                className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600 shadow-sm">
          <p className="text-base font-medium text-slate-900">Aún no tienes personajes favoritos</p>
          <p className="mt-2 text-sm leading-6">Marca un personaje como favorito y aparecerá aquí.</p>
        </div>
      )}

      <div className="mt-10 border-t border-slate-200 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Bloqueados</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Personajes bloqueados</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Los personajes bloqueados no aparecerán en la grilla principal.</p>

        {blocked?.length ? (
          <div className="mt-6 space-y-4">
            {blocked.map((character) => (
              <div key={character.id} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3">
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-14 w-14 rounded-2xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-900">{character.name}</p>
                  <p className="truncate text-sm text-slate-600">{character.species}</p>
                </div>
                <button
                  type="button"
                  onClick={() => unblockCharacter(character.id)}
                  className="rounded-2xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100"
                >
                  Desbloquear
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600 shadow-sm">
            <p className="text-base font-medium text-slate-900">No hay personajes bloqueados</p>
            <p className="mt-2 text-sm leading-6">Bloquea un personaje para que desaparezca de la lista principal.</p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
