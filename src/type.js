import data from "./data/pokemon/pokemon.js";

const pokemonContainer = document.querySelector(".pokemon-container");

const bugButton = document.querySelector(".bug-button");
const darkButton = document.querySelector(".dark-button");
const dragonButton = document.querySelector(".dragon-button");
const electricButton = document.querySelector(".electric-button");
const fairyButton = document.querySelector(".fairy-button");
const fightingButton = document.querySelector(".fighting-button");
const fireButton = document.querySelector(".fire-button");
const flyingButton = document.querySelector(".flying-button");
const ghostButton = document.querySelector(".ghost-button");
const grassButton = document.querySelector(".grass-button");
const groundButton = document.querySelector(".ground-button");
const iceButton = document.querySelector(".ice-button");
const normButton = document.querySelector(".norm-button");
const poisonButton = document.querySelector(".poison-button");
const psychicButton = document.querySelector(".psychic-button");
const rockButton = document.querySelector(".rock-button");
const steelButton = document.querySelector(".steel-button");
const waterButton = document.querySelector(".water-button");

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


// Plantilla de cadena de texto para una tarjeta de Pokémon
function cardTemplate(pokemon) {
  return `
    <div class="pokemon-card" data-name="${pokemon.name}">
      <div class="pokemon-img-container">
        <img src="${pokemon.img}" alt="${pokemon.name}" />
      </div>
      <p class="pokemon-num">#${pokemon.num}</p>
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <div class="pokemon-type">
        ${pokemon.type.map(function (type) {
    return `
              <img
                src="${typeImages[type]}"
                alt="${type}"
                class="pokemon-type-img"
                title="${type.charAt(0).toUpperCase() + type.slice(1)}"
                style="width: 25px; height: 25px; display: inline-block; margin-right: 2px;"
              />
            `;
  }).join("")}
      </div>
    </div>
  `;
}


// Bucle para crear las tarjetas de Pokémon
for (let i = 0; i < data.pokemon.length; i++) {
  const pokemon = data.pokemon[i];

  const card = document.createElement("div");
  card.className = "pokemon-card";
  card.setAttribute("data-name", pokemon.name);
  card.innerHTML = cardTemplate(pokemon);

  // Agregar un event listener al hacer clic en la tarjeta de Pokémon
  card.addEventListener("click", function () {
    goToPokemonDetails(pokemon.name);
  });

  pokemonContainer.appendChild(card);
};



// Función para redirigir a la página de detalles del Pokémon
function goToPokemonDetails(pokemonName) {
  var pokemonDetailsUrl = "./pokemon-details.html?name=" + pokemonName;
  window.location.href = pokemonDetailsUrl;
};



// Funcion para filtrar por type
function addFilterButtonType(button, type) {
  button.addEventListener("click", () => {
    filterPokemonByType(type);
    pokemonContainer.classList.remove("hidden");
  });
}

addFilterButtonType(bugButton, "bug");
addFilterButtonType(darkButton, "dark");
addFilterButtonType(dragonButton, "dragon");
addFilterButtonType(electricButton, "electric");
addFilterButtonType(fairyButton, "fairy");
addFilterButtonType(fightingButton, "fighting");
addFilterButtonType(fireButton, "fire");
addFilterButtonType(flyingButton, "flying");
addFilterButtonType(ghostButton, "ghost");
addFilterButtonType(grassButton, "grass");
addFilterButtonType(groundButton, "ground");
addFilterButtonType(iceButton, "ice");
addFilterButtonType(normButton, "normal");
addFilterButtonType(poisonButton, "poison");
addFilterButtonType(psychicButton, "psychic");
addFilterButtonType(rockButton, "rock");
addFilterButtonType(steelButton, "steel");
addFilterButtonType(waterButton, "water");



// Función para filtrar los Pokémon por type
function filterPokemonByType(type) {
  const cards = document.querySelectorAll(".pokemon-card");
  cards.forEach(function (card) {
    const pokemonName = card.dataset.name;
    const pokemonData = data.pokemon.find(function (pokemon) {
      return pokemon.name === pokemonName;
    });
    const pokemonType = pokemonData.type;
    if (pokemonType.includes(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};



// Obtén la referencia del botón "arriba"
const botonArriba = document.querySelector('.arriba');

// Agrega un listener de evento al botón "arriba"
botonArriba.addEventListener('click', function () {
  // Usa la función "scrollTo" para moverte al inicio del documento
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


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
};























/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */

// fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));
