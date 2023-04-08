import data from "./data/pokemon/pokemon.js";

const pokemonName = new URLSearchParams(window.location.search).get("name");
const pokemon = data.pokemon.find((p) => p.name === pokemonName);

document.querySelector(".pokemon-name").textContent = pokemon.name;
document.querySelector(".pokemon-number").textContent = `#${pokemon.num}`;
document.querySelector(".pokemon-image").src = pokemon.img;
document.querySelector(".pokemon-description").textContent = pokemon.about;
document.querySelector(".pokemon-height").textContent = pokemon.height;
document.querySelector(".pokemon-weight").textContent = pokemon.weight;

const typesList = document.querySelector(".pokemon-types");
pokemon.type.forEach((type) => {
  const typeItem = document.createElement("li");
  typeItem.textContent = type;
  typesList.appendChild(typeItem);
});


/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */
