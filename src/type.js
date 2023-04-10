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
const cardTemplate = (pokemon) => {
  return `
    <div class="pokemon-card" data-name="${pokemon.name}">
      <div class="pokemon-img-container">
        <img src="${pokemon.img}" alt="${pokemon.name}" />
      </div>
      <p class="pokemon-num">#${pokemon.num}</p>
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <div class="pokemon-type">
        ${pokemon.type
      .map((type) => {
        return `
              <img
                src="${typeImages[type]}"
                alt="${type}"
                class="pokemon-type-img"
                title="${type.charAt(0).toUpperCase() + type.slice(1)}"
                style="width: 25px; height: 25px; display: inline-block; margin-right: 2px;"
              />
            `;
      })
      .join("")}
      </div>
    </div>
  `;
};

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



bugButton.addEventListener("click", () => {
  filterPokemonByType("bug");
  pokemonContainer.classList.remove("hidden");
});

darkButton.addEventListener("click", () => {
  filterPokemonByType("dark");
  pokemonContainer.classList.remove("hidden");
});

dragonButton.addEventListener("click", () => {
  filterPokemonByType("dragon");
  pokemonContainer.classList.remove("hidden");
});

electricButton.addEventListener("click", () => {
  filterPokemonByType("electric");
  pokemonContainer.classList.remove("hidden");
});

fairyButton.addEventListener("click", () => {
  filterPokemonByType("fairy");
  pokemonContainer.classList.remove("hidden");
});

fightingButton.addEventListener("click", () => {
  filterPokemonByType("fighting");
  pokemonContainer.classList.remove("hidden");
});

fireButton.addEventListener("click", () => {
  filterPokemonByType("fire");
  pokemonContainer.classList.remove("hidden");
});

flyingButton.addEventListener("click", () => {
  filterPokemonByType("flying");
  pokemonContainer.classList.remove("hidden");
});

ghostButton.addEventListener("click", () => {
  filterPokemonByType("ghost");
  pokemonContainer.classList.remove("hidden");
});

grassButton.addEventListener("click", () => {
  filterPokemonByType("grass");
  pokemonContainer.classList.remove("hidden");
});

groundButton.addEventListener("click", () => {
  filterPokemonByType("ground");
  pokemonContainer.classList.remove("hidden");
});

iceButton.addEventListener("click", () => {
  filterPokemonByType("ice");
  pokemonContainer.classList.remove("hidden");
});

normButton.addEventListener("click", () => {
  filterPokemonByType("normal");
  pokemonContainer.classList.remove("hidden");
});

poisonButton.addEventListener("click", () => {
  filterPokemonByType("poison");
  pokemonContainer.classList.remove("hidden");
});

psychicButton.addEventListener("click", () => {
  filterPokemonByType("psychic");
  pokemonContainer.classList.remove("hidden");
});

rockButton.addEventListener("click", () => {
  filterPokemonByType("rock");
  pokemonContainer.classList.remove("hidden");
});

steelButton.addEventListener("click", () => {
  filterPokemonByType("steel");
  pokemonContainer.classList.remove("hidden");
});

waterButton.addEventListener("click", () => {
  filterPokemonByType("water");
  pokemonContainer.classList.remove("hidden");
});


// Función para filtrar los Pokémon por región
const filterPokemonByType = (type) => {
  const cards = document.querySelectorAll(".pokemon-card");
  cards.forEach((card) => {
    const pokemonName = card.dataset.name;
    const pokemonData = data.pokemon.find(pokemon => pokemon.name === pokemonName);
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
