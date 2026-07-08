const CharacterCard = ({ character, favorites, toggleFavorite }) => {
  const { image, name, status, species } = character
  const isFavorite = favorites.some((fav) => fav.id === character.id)

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
          <p className="mt-2 text-sm text-slate-600">
            <span className="font-medium text-slate-800">Estado:</span> {status}
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-800">Especie:</span> {species}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => toggleFavorite(character)}
            className={`rounded-2xl px-3 py-2 text-sm font-semibold transition ${isFavorite ? 'border border-rose-300 bg-rose-100 text-rose-700 shadow-sm' : 'border border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50'}`}
          >
            {isFavorite ? 'Favorito' : 'Marcar favorito'}
          </button>
          <button
            type="button"
            disabled
            className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 opacity-70 cursor-not-allowed"
          >
            Bloquear
          </button>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
