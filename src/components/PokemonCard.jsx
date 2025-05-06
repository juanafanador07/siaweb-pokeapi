import TypeTag from "./TypeTag";

import "./PokemonCard.css";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return;

  return (
    <article className="card">
      <img
        className="card__img"
        width={400}
        height={400}
        src={pokemon.sprites.other["official-artwork"].front_default}
      />
      <p className="card__id">N° {pokemon.id}</p>
      <h2 className="card__title">{pokemon.name}</h2>
      <div className="card__tag-container">
        {pokemon.types.map((item, i) => (
          <TypeTag type={item.type} key={i} />
        ))}
      </div>
    </article>
  );
}
