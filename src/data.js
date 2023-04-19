import data from "./data/pokemon/pokemon.js";

// Función para ordenar los Pokémon por nombre o número
export function sortPokemon(optionValue) {
  let sortedData;

  if (optionValue === "name-asc") {
    sortedData = (a, b) => a.name.localeCompare(b.name);
  } else if (optionValue === "name-desc") {
    sortedData = (a, b) => b.name.localeCompare(a.name);
  } else if (optionValue === "num-asc") {
    sortedData = (a, b) => a.num - b.num;
  } else if (optionValue === "num-desc") {
    sortedData = (a, b) => b.num - a.num;
  }

  return sortedData;
}

export function searchPokemon(searchText, unFilteredData) {
  const pokemonData = unFilteredData;
  const filteredPokemon = pokemonData.filter(function (pokemon) {
    const name = pokemon.name.toLowerCase();
    const num = pokemon.num.toString();
    return name.includes(searchText) || num.includes(searchText);
  });

  return filteredPokemon;
}

export function getMaxBaseValue(statName) {
  let max = 0;
  for (let i = 0; i < data.pokemon.length; i++) {
    const statValue = parseInt(data.pokemon[i].stats[statName]);
    if (statValue > max) {
      max = statValue;
    }
  }
  return max;
}

// Función para filtrar los Pokémon por type
export function filterPokemonByType(type, typePokemon) {
  const pokemonData = typePokemon;
  const filteredPokemon = pokemonData.filter(function (pokemon) {
    return pokemon.type.includes(type, pokemon.data);
  });

  return filteredPokemon;
}

// Función para filtrar los Pokémon por region
export function filterPokemonByRegion(region, regionPokemon) {
  const pokemonData = regionPokemon;
  const pokemonByRegion = pokemonData.filter(function (pokemon) {
    return pokemon.generation.name === region;
  });
  return pokemonByRegion;
}

// Función para filtrar los Pokémon por rareza
export function filterPokemonByRarity(rarity, rarityList) {
  const pokemonData = rarityList;
  const pokemonByRarity = pokemonData.filter(function (pokemon) {
    return pokemon["pokemon-rarity"] === rarity;
  });
  return pokemonByRarity;
}

// Función para filtrar los Pokémon por egg
export function filterPokemonByEgg(egg, eggList) {
  const pokemonData = eggList;
  const pokemonByEgg = pokemonData.filter(function (pokemon) {
    return pokemon.egg === egg;
  });
  return pokemonByEgg;
}
