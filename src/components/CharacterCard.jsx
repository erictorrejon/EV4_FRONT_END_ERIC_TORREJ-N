const CharacterCard = ({ character, favorites, toggleFavorite, blockCharacter }) => {
  const { image, name, status, species } = character
  const isFavorite = favorites.some((fav) => fav.id === character.id)

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold text-white">{name}</h2>
          <p className="mt-2 text-sm text-slate-300">
            <span className="font-medium text-slate-200">Estado:</span> {status}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-medium text-slate-200">Especie:</span> {species}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => toggleFavorite(character)}
            className={`rounded-2xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${isFavorite ? 'border border-rose-400 bg-rose-500/10 text-rose-200 shadow-sm hover:bg-rose-500/20' : 'border border-slate-700 bg-slate-800 text-slate-100 hover:border-emerald-400 hover:bg-emerald-500/10'}`}
          >
            {isFavorite ? 'Favorito' : 'Marcar favorito'}
          </button>
          <button
            type="button"
            onClick={() => blockCharacter(character)}
            className="rounded-2xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/10"
          >
            Bloquear
          </button>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
