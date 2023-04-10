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
  const card = document.createElement("div");
  card.classList.add("pokemon-card");
  card.dataset.name = pokemon.name;
  card.innerHTML = cardTemplate(pokemon);

  // Agregar un event listener al hacer clic en la tarjeta de Pokémon
  card.addEventListener("click", () => {
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
  const cards = document.querySelectorAll(".pokemon-card");
  cards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const num = card.querySelector(".pokemon-num").textContent.toLowerCase();
    if (name.includes(searchText) || num.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

// Event listener para detectar el cambio en el input de búsqueda
searchInput.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  searchPokemon(searchText);
});

// Obtén la referencia del botón "arriba"
const botonArriba = document.querySelector(".arriba");

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
btnHamburger.addEventListener("click", myFunction);

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// document.getElementById("regions").addEventListener("click", function () {
//   window.open("regions.html");
// });

// const sortSelect = document.querySelector("#sort-select");
// sortSelect.addEventListener("change", sortPokemon);

// function sortPokemon() {
//   const sortValue = sortSelect.value;
//   const cards = Array.from(document.querySelectorAll(".pokemon-card"));

//   cards.sort((a, b) => {
//     const aData = data.pokemon.find(
//       (p) => p.name === a.querySelector("h2").textContent.toLowerCase()
//     );
//     const bData = data.pokemon.find(
//       (p) => p.name === b.querySelector("h2").textContent.toLowerCase()
//     );

//     switch (sortValue) {
//       case "name-asc":
//         return aData.name.localeCompare(bData.name);
//       case "name-desc":
//         return bData.name.localeCompare(aData.name);
//       case "num-asc":
//         return aData.num.localeCompare(bData.num);
//       case "num-desc":
//         return bData.num.localeCompare(aData.num);
//       default:
//         return 0;
//     }
//   });

//   pokemonContainer.innerHTML = "";
//   cards.forEach((card) => {
//     pokemonContainer.appendChild(card);
//   });
// }const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", sortPokemon);

function sortPokemon() {
  const sortValue = sortSelect.value;
  const cards = Array.from(document.querySelectorAll(".pokemon-card"));

  cards.sort((a, b) => {
    const aData = data.pokemon.find(
      (p) => p.name === a.querySelector("h2").textContent.toLowerCase()
    );
    const bData = data.pokemon.find(
      (p) => p.name === b.querySelector("h2").textContent.toLowerCase()
    );

    switch (sortValue) {
      case "name-asc":
        return aData.name.localeCompare(bData.name);
      case "name-desc":
        return bData.name.localeCompare(aData.name);
      case "num-asc":
        return aData.num.localeCompare(bData.num);
      case "num-desc":
        return bData.num.localeCompare(aData.num);
      default:
        return 0;
    }
  });

  pokemonContainer.innerHTML = "";
  cards.forEach((card) => {
    pokemonContainer.appendChild(card);
  });
}

// // Obtener el elemento de selección de orden
// const filterSelect = document.querySelector("#sort-select");

// // Agregar un event listener al elemento de selección de orden
// filterSelect.addEventListener("change", filterPokemon);

// // Función de ordenamiento
// function filterPokemon() {
//   // Obtener el valor de ordenamiento seleccionado por el usuario
//   const filterValue = filterSelect.value;

//   // Obtener todos los elementos de la tarjeta Pokemon
//   const cards = document.querySelectorAll(".pokemon-card");

//   // Convertir los elementos de la tarjeta Pokemon a un array
//   const pokemonArray = Array.from(cards);

//   // Ordenar el array según el valor de ordenamiento seleccionado por el usuario
//   if (filterValue === "num-asc") {
//     pokemonArray.sort((a, b) => {
//       return (
//         parseInt(a.querySelector("p").textContent.slice(1)) -
//         parseInt(b.querySelector("p").textContent.slice(1))
//       );
//     });
//   } else if (filterValue === "num-desc") {
//     pokemonArray.sort((a, b) => {
//       return (
//         parseInt(b.querySelector("p").textContent.slice(1)) -
//         parseInt(a.querySelector("p").textContent.slice(1))
//       );
//     });
//   } else if (filterValue === "name-asc") {
//     pokemonArray.sort((a, b) => {
//       return a
//         .querySelector("h2")
//         .textContent.localeCompare(b.querySelector("h2").textContent);
//     });
//   } else if (filterValue === "name-desc") {
//     pokemonArray.sort((a, b) => {
//       return b
//         .querySelector("h2")
//         .textContent.localeCompare(a.querySelector("h2").textContent);
//     });
//   }

//   // Recorrer el array ordenado y agregar cada elemento a la página
//   for (let i = 0; i < pokemonArray.length; i++) {
//     pokemonContainer.appendChild(pokemonArray[i]);
//   }
// }

/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */

// fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));

// POKÉMON DETAILS //
// const pokemonDetail = document.querySelector(".pokemon-detail");
// Plantilla de cadena de texto para una tarjeta de Pokémon
// const cardDetail = (pokemon) => {
//   return `
//     <div class="pokemon-card-detail" data-name="${pokemon.name}">
//       <h1 data-name='${pokemon.name}'></h1>

//     // <div class="pokemon-card" data-name="${pokemon.name}">
//     //   <div class="pokemon-img-container">
//     //     <img src="${pokemon.img}" alt="${pokemon.name}" />
//     //   </div>
//     //   <p class="pokemon-num">#${pokemon.num}</p>
//     //   <h2 class="pokemon-name">${pokemon.name}</h2>
//     //   <div class="pokemon-type">
//     //     ${
//       pokemon.type
//       //       .map((t) => {
//       //         return `
//       //           <img
//       //             src="${typeImages[t]}"
//       //             alt="${t}"
//       //             class="pokemon-type-img"
//       //             title="${t.charAt(0).toUpperCase() + t.slice(1)}"
//       //             style="width: 25px; height: 25px; display: inline-block; margin-right: 2px;"
//       //           />
//       //         `;
//     })
//     //       .join("")}
//     //   </div>
//     // </div>
//   `;
// };
