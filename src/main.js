import data from "./data/pokemon/pokemon.js";

const pokemonContainer = document.querySelector(".pokemon-container");
const searchInput = document.querySelector("#search-input");

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
      .map((t) => {
        return `
              <img
                src="${typeImages[t]}"
                alt="${t}"
                class="pokemon-type-img"
                title="${t.charAt(0).toUpperCase() + t.slice(1)}"
                style="width: 25px; height: 25px; display: inline-block; marginRight = 5px;"
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


// Función para buscar Pokémon por nombre o número
const searchPokemon = (searchText) => {
  const cards = document.querySelectorAll('.pokemon-card');
  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const num = card.querySelector('.pokemon-num').textContent.toLowerCase();
    if (name.includes(searchText) || num.includes(searchText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

// Event listener para detectar el cambio en el input de búsqueda
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();
  searchPokemon(searchText);
});


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




























/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */

// fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));
