import  data  from './data/pokemon/pokemon.js';

// Función para ordenar los Pokémon por nombre o número
export function sortPokemon(optionValue) {
  let sortedData;

  if (optionValue === "name-asc") {
    sortedData = ((a, b) => a.name.localeCompare(b.name));
  } else if (optionValue === "name-desc") {
    sortedData = ((a, b) => b.name.localeCompare(a.name));
  } else if (optionValue === "num-asc") {
    sortedData = ((a, b) => a.num - b.num);
  } else if (optionValue === "num-desc") {
    sortedData = ((a, b) => b.num - a.num);
  }

  return sortedData;
}

export function searchPokemon(searchText) {
  const pokemonData = data.pokemon;
  const filteredPokemon = pokemonData.filter(function(pokemon) {
    const name = pokemon.name.toLowerCase();
    const num = pokemon.num.toString().toLowerCase();
    return (name.includes(searchText) || num.includes(searchText));
  });

  return filteredPokemon;
}