const CharacterCard = ({ character, selected, onSelect, favorites, toggleFavorite, blockCharacter }) => {
  const { image, name, status, species } = character
  const isFavorite = favorites.some((fav) => fav.id === character.id)

  return (
    <article
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-white/60 shadow-[0_18px_40px_rgba(2,6,23,0.06)] transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] ${selected ? 'selected-card' : ''}`}
    >
      {/* Usamos glassmorphism ligero para que la tarjeta se sienta flotante y moderna */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900/70">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
          <p className="mt-2 text-sm text-slate-700">
            <span className="font-medium text-slate-700">Estado:</span> {status}
          </p>
          <p className="text-sm text-slate-700">
            <span className="font-medium text-slate-700">Especie:</span> {species}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              toggleFavorite(character)
            }}
            className={`rounded-2xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${isFavorite ? 'border border-emerald-500 bg-emerald-100 text-emerald-800 shadow-sm hover:bg-emerald-100/90' : 'border border-zinc-200 bg-white/60 text-slate-900 hover:border-emerald-400 hover:bg-emerald-100/30'}`}
          >
            {isFavorite ? 'Favorito' : 'Marcar favorito'}
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              blockCharacter(character)
            }}
            className="rounded-2xl border border-zinc-200 bg-white/60 px-3 py-2 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-blue-400 hover:bg-blue-100/40"
          >
            Bloquear
          </button>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
