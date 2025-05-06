export async function getPokemonApi(params = "") {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params}`);

  const data = await res.json();

  const modifiedResults = await Promise.all(
    data.results.map((pokemon) => {
      const splitUrl = pokemon.url.split("/");
      const id = splitUrl[splitUrl.length - 2];
      return getPokemon(id);
    })
  );

  return {
    ...data,
    results: modifiedResults,
  };
}

export async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
}
