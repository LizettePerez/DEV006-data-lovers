import data from "./data/pokemon/pokemon.js";

const pokemonContainer = document.querySelector(".pokemon-container");
const kantoButton = document.querySelector(".kanto-button");
const johtoButton = document.querySelector(".johto-button");
const botonArriba = document.querySelector(".arriba");

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
        ${pokemon.type
          .map(function (type) {
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
}

// Función para redirigir a la página de detalles del Pokémon
function goToPokemonDetails(pokemonName) {
  var pokemonDetailsUrl = "./pokemon-details.html?name=" + pokemonName;
  window.location.href = pokemonDetailsUrl;
}

// Funcion para filtrar por region
function addFilterButtonRegion(button, region) {
  button.addEventListener("click", function () {
    filterPokemonByRegion(region);
    pokemonContainer.classList.remove("hidden");
  });
}
addFilterButtonRegion(kantoButton, "kanto");
addFilterButtonRegion(johtoButton, "johto");

// Función para filtrar los Pokémon por region
function filterPokemonByRegion(region) {
  const cards = document.querySelectorAll(".pokemon-card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const pokemonName = card.dataset.name;
    const pokemon = data.pokemon.find(function (pokemon) {
      return pokemon.name === pokemonName;
    });
    const pokemonRegion = pokemon.generation.name.toLowerCase();
    if (pokemonRegion === region) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

const pokemonByRegion = () => {
  let kantoCount = 0;
  let johtoCount = 0;
  for (const pokemon of data.pokemon) {
    if (pokemon.generation.name === "kanto") {
      kantoCount++;
    } else if (pokemon.generation.name === "johto") {
      johtoCount++;
    }
  }
  const total = kantoCount + johtoCount;
  const kantoPercentage =
    kantoCount > 0 ? ((kantoCount / total) * 100).toFixed(2) : 0;
  const johtoPercentage =
    johtoCount > 0 ? ((johtoCount / total) * 100).toFixed(2) : 0;
  return { kantoPercentage, johtoPercentage };
};

const { kantoPercentage, johtoPercentage } = pokemonByRegion();

const kantoPercentageElement = document.getElementById("kantoPercentage");
const johtoPercentageElement = document.getElementById("johtoPercentage");

kantoPercentageElement.textContent = kantoPercentage;
johtoPercentageElement.textContent = johtoPercentage;

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Kanto", "Johto"],
    datasets: [
      {
        label: "Porcentaje por region",
        data: [kantoPercentage, johtoPercentage],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  },
});

// Agrega un listener de evento al botón "arriba"
botonArriba.addEventListener("click", function () {
  // Usa la función "scrollTo" para moverte al inicio del documento
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Nav Hamburger
const btnHamburger = document.querySelector("#hamburger");
btnHamburger.addEventListener("click", burger);

function burger() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
