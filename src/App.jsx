import { useState } from "react";
import { getPokemonApi } from "./services/pokeapi";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

import "./App.css";
import Pagination from "./components/Pagination";

export default function App() {
  const [pokemonApi, setPokemonApi] = useState(null);
  const resultsPerPage = 10;

  async function updatePokemonList({ offset, limit }) {
    const data = await getPokemonApi(`?limit=${limit}&offset=${offset}`);
    setPokemonApi(data);
  }

  function handlePaginationChange(params) {
    updatePokemonList(params);
  }

  useEffect(() => {
    updatePokemonList({ offset: 0, limit: resultsPerPage });
  }, []);

  if (!pokemonApi) return;

  return (
    <main>
      <h1>Listado de Pokemones</h1>

      <div className="pokemon-list">
        {pokemonApi.results.map((pokemon, i) => (
          <PokemonCard pokemon={pokemon} key={i} />
        ))}
      </div>

      <Pagination
        total={pokemonApi.count}
        resultsPerPage={resultsPerPage}
        onChange={handlePaginationChange}
      />
    </main>
  );
}
