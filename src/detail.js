import data from "./data/pokemon/pokemon.js";

//agregar imagen a cada elemento
const typeImages = {
  grass: "./img/elementos/grass.png",
  poison: "./img/elementos/poison.png",
  fire: "./img/elementos/fire.png",
  flying: "./img/elementos/flying.png",
  water: "./img/elementos/water.png",
  bug: "./img/elementos/bug.png",
  normal: "./img/elementos/normal.png",
  electric: "./img/elementos/electric.png",
  ground: "./img/elementos/ground.png",
  fighting: "./img/elementos/fight.png",
  psychic: "./img/elementos/psychic.png",
  rock: "./img/elementos/rock.png",
  ice: "./img/elementos/ice.png",
  ghost: "./img/elementos/ghost.png",
  dragon: "./img/elementos/dragon.png",
  fairy: "./img/elementos/fairy.png",
  dark: "./img/elementos/dark.png",
  steel: "./img/elementos/steel.png",
};

const pokemonName = new URLSearchParams(window.location.search).get("name");
const pokemon = data.pokemon.find((p) => p.name === pokemonName);

document.querySelector(".pokemon-name").textContent = pokemon.name;
document.querySelector(".pokemon-number").textContent = `#${pokemon.num}`;
document.querySelector(".pokemon-image").src = pokemon.img;
document.querySelector(".pokemon-description").textContent = pokemon.about;
document.querySelector(".pokemon-height").textContent = pokemon.size.height;
document.querySelector(".pokemon-weight").textContent = pokemon.size.weight;
document.querySelector(".pokemon-rarity").textContent = pokemon["pokemon-rarity"];

const typesContainer = document.querySelector(".pokemon-types");
pokemon.type.forEach((type) => {
  const typeParagraph = document.createElement("p");
  const typeImage = document.createElement("img");
  typeImage.src = typeImages[type];
  typeImage.alt = type;
  typeImage.title = type.charAt(0).toUpperCase() + type.slice(1);
  typeParagraph.appendChild(typeImage);
  typesContainer.appendChild(typeParagraph);
});

const volver = document.getElementById("volver");
volver.addEventListener("click", buttomVolver);

function buttomVolver() {
  history.back();
  return false;
}



/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */


//Nav Hamburger
const btnHamburger = document.querySelector("#hamburger");
btnHamburger.addEventListener("click", myFunction)

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
