import data from "./data/pokemon/pokemon.js";

const pokemonContainer = document.querySelector(".pokemon-container");

const normalButton = document.querySelector(".normal-button");
const legendaryButton = document.querySelector(".legendary-button");
const mythicButton = document.querySelector(".mythic-button");


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
        ${pokemon.type.map(function(type) {
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


// Bucle forEach para crear las tarjetas de Pokémon
data.pokemon.forEach((pokemon) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');
  card.dataset.name = pokemon.name;
  card.innerHTML = cardTemplate(pokemon);

  // Agregar un event listener al hacer clic en la tarjeta de Pokémon
  card.addEventListener('click', () => {
    goToPokemonDetails(pokemon.name);
  });

  pokemonContainer.appendChild(card);
});

// Función para redirigir a la página de detalles del Pokémon
const goToPokemonDetails = (pokemonName) => {
  const pokemonDetailsUrl = `./pokemon-details.html?name=${pokemonName}`;
  window.location.href = pokemonDetailsUrl;
};


function addFilterButtonRarity(button, rarity) {
  button.addEventListener("click", function () {
    filterPokemonByRarity(rarity);
    pokemonContainer.classList.remove("hidden");
  });
}

addFilterButtonRarity(normalButton, "normal");
addFilterButtonRarity(legendaryButton, "legendary");
addFilterButtonRarity(mythicButton, "mythic");



// Función para filtrar los Pokémon por rarity
function filterPokemonByRarity(rarity) {
  const cards = document.querySelectorAll(".pokemon-card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const pokemonName = card.dataset.name;
    const pokemon = data.pokemon.find(function (pokemon) {
      return pokemon.name === pokemonName;
    });
    const pokemonRarity = pokemon["pokemon-rarity"];
    if (pokemonRarity.includes(rarity)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
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
const btnHamburger = document.getElementById("hamburger");
btnHamburger.addEventListener("click", function () {
  const navbar = document.getElementById("myNavbar");
  if (navbar.classList.contains("navbar")) {
    navbar.classList.add("responsive");
  } else {
    navbar.classList.remove("responsive");
  }
});























/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */

// fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));
