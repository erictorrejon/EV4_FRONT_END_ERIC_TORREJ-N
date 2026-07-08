import './SpaceGrid.css'

const SpaceGrid = ({ characters }) => {
  return (
    <section className="space-scene">
      <div className="space-scene__background" aria-hidden="true">
        <div className="space-scene__stars" />
        <div className="space-scene__glow" />
      </div>

      <div className="space-scene__content">
        <div className="space-scene__header">
          <p className="space-scene__eyebrow">Portal dimensional activado</p>
          <h2 className="space-scene__title">Explora personajes de Rick y Morty</h2>
          <p className="space-scene__subtitle">
            Un grid espacial con un estilo futurista, tarjetas translúcidas y microinteracciones en verde neón.
          </p>
        </div>

        <div className="space-grid">
          {characters?.length ? (
            characters.map((character) => (
              <article key={character.id} className="space-card">
                <img
                  className="space-card__image"
                  src={character.image}
                  alt={character.name}
                />
                <div className="space-card__body">
                  <h3 className="space-card__name">{character.name}</h3>
                  <p className="space-card__meta">{character.species} • {character.status}</p>
                </div>
              </article>
            ))
          ) : (
            <div className="space-grid__empty">No se han cargado personajes todavía.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SpaceGrid
