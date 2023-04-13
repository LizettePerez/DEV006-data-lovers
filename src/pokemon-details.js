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

//agregar imagen a cada elemento
const resistantImages = {
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


//agregar imagen a cada elemento
const weaknessImages = {
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
document.querySelector(".pokemon-region").textContent = pokemon.generation.name;
document.querySelector(".stats-attack").textContent = pokemon.stats["base-attack"];
document.querySelector(".stats-defense").textContent = pokemon.stats["base-defense"];
document.querySelector(".stats-stamina").textContent = pokemon.stats["base-stamina"];
document.querySelector(".stats-cp").textContent = pokemon.stats["max-cp"];
document.querySelector(".stats-hp").textContent = pokemon.stats["max-hp"];
const botonArriba = document.querySelector('.arriba');

const typesContainer = document.querySelector(".pokemon-types");
const weaknessesContainer = document.querySelector(".pokemon-weaknesses-types");
const resistancesContainer = document.querySelector(".pokemon-resistant-types");

for (let i = 0; i < pokemon.type.length; i++) {
  const typeParagraph = document.createElement("p");
  const typeImage = document.createElement("img");
  typeImage.src = typeImages[pokemon.type[i]];
  typeImage.alt = pokemon.type[i];
  typeImage.title = pokemon.type[i].charAt(0).toUpperCase() + pokemon.type[i].slice(1);
  typeParagraph.appendChild(typeImage);
  typesContainer.appendChild(typeParagraph);
};

for (let i = 0; i < pokemon.weaknesses.length; i++) {
  const weaknessParagraph = document.createElement("p");
  const weaknessImage = document.createElement("img");
  weaknessImage.src = weaknessImages[pokemon.weaknesses[i]];
  weaknessImage.alt = pokemon.weaknesses[i];
  weaknessImage.title = pokemon.weaknesses[i].charAt(0).toUpperCase() + pokemon.weaknesses[i].slice(1);
  weaknessParagraph.appendChild(weaknessImage);
  weaknessesContainer.appendChild(weaknessParagraph);
};

for (let i = 0; i < pokemon.resistant.length; i++) {
  const resistanceParagraph = document.createElement("p");
  const resistanceImage = document.createElement("img");
  resistanceImage.src = resistantImages[pokemon.resistant[i]];
  resistanceImage.alt = pokemon.resistant[i];
  resistanceImage.title = pokemon.resistant[i].charAt(0).toUpperCase() + pokemon.resistant[i].slice(1);
  resistanceParagraph.appendChild(resistanceImage);
  resistancesContainer.appendChild(resistanceParagraph);
};


// function getPokemonByName(name) {
//   return pokemonListData.find((pokemon) => pokemon.name === name);
// }


// funcion boton volver
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
btnHamburger.addEventListener("click", burger);

function burger() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


// Agrega un listener de evento al botón "arriba"
botonArriba.addEventListener('click', function () {
  // Usa la función "scrollTo" para moverte al inicio del documento
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




// const pokemonData = data.pokemon.find(pokemon => pokemon.name === pokemonName);

// if (pokemonData.evolution) {
//   const nextEvolution = pokemonData.evolution["next-evolution"][0];

//   document.querySelector(".pokemon-evolution-img").src = data.pokemon.find(pokemon => pokemon.num === nextEvolution.num).img;
//   document.querySelector(".pokemon-evolution-num").textContent = `#${nextEvolution.num}`;
//   document.querySelector(".pokemon-evolution-name").textContent = nextEvolution.name;
//   document.querySelector(".pokemon-evolution-type").textContent = data.pokemon.find(pokemon => pokemon.name === nextEvolution.name).type.join(" / ");
//   document.querySelector(".pokemon-evolution-candy").textContent = `${nextEvolution["candy-cost"]} ${pokemonData.evolution.candy}`;

//   document.querySelector(".pokemon-evolution").classList.remove("hidden");
// } else {
//   document.querySelector(".pokemon-evolution").classList.add("hidden");
// }



// const pokemonData = data.pokemon.find(pokemon => pokemon.name === pokemonName);

// if (pokemonData.evolution) {
//   let evolution = pokemonData.evolution;
//   let evolutions = [];
//   while (evolution) {
//     const nextEvolution = evolution["next-evolution"] && evolution["next-evolution"][0];
//     if (nextEvolution) {
//       const nextPokemon = data.pokemon.find(pokemon => pokemon.num === nextEvolution.num);
//       evolutions.push(nextPokemon);
//       evolution = nextPokemon.evolution;
//     } else {
//       evolution = null;
//     }
//   }

//   const evolutionContainer = document.querySelector(".pokemon-evolution");
//   evolutionContainer.innerHTML = `
//     ${evolutions.map(evolution => `
//       <div class="pokemon-evolution-detail">
//         <img class="pokemon-evolution-img" src="${evolution.img}">
//         <p class="pokemon-evolution-num">#${evolution.num}</p>
//         <h2 class="pokemon-evolution-name">${evolution.name}</h2>
//         <div class="pokemon-evolution-type">
//           ${evolution.type
//             .map((type) => {
//               return `
//               <img
//                 src="${typeImages[type]}"
//                 alt="${type}"
//                 class="pokemon-type-img"
//                 title="${type.charAt(0).toUpperCase() + type.slice(1)}"
//                 style="width: 25px; height: 25px; display: inline-block; margin-right: 2px;"
//               />
//             `;
//           })
//           .join("")}
//         </div>
//         <p class="pokemon-evolution-candy-amount">${evolution["candy-cost"]}</p>
//         <p class="pokemon-evolution-candy-name">${pokemonData.evolution.candy}</p>
//       </div>
//     `).join("")}
//   `;

//   evolutionContainer.classList.remove("hidden");
// } else {
//   document.querySelector(".pokemon-evolution").classList.add("hidden");
// }

const pokemonData = data.pokemon.find(function (pokemon) {
  return pokemon.name === pokemonName;
});

if (pokemonData && pokemonData.evolution) {
  let evolution = pokemonData.evolution;
  let evolutions = [pokemonData]; // incluir el pokemon actual en la lista de evoluciones

  while (evolution && evolution["prev-evolution"]) {
    const prevEvolution = evolution["prev-evolution"][0];
    const prevPokemon = data.pokemon.find(function (pokemon) {
      return pokemon.num === prevEvolution.num;
    });

    evolutions.unshift(prevPokemon); // agregar la pre-evolución al inicio de la lista
    evolution = prevPokemon.evolution;
  }

  evolution = pokemonData.evolution;
  while (evolution && evolution["next-evolution"]) {
    const nextEvolution = evolution["next-evolution"][0];
    const nextPokemon = data.pokemon.find(function (pokemon) {
      return pokemon.num === nextEvolution.num;
    });

    evolutions.push(nextPokemon); // agregar la siguiente evolución al final de la lista
    evolution = nextPokemon.evolution;
  }

  let evolutionContainer = document.querySelector(".pokemon-evolution");
  let evolutionsHtml = "";

  for (let i = 0; i < evolutions.length; i++) {
    let evolution = evolutions[i];
    let typesHtml = "";

    for (let j = 0; j < evolution.type.length; j++) {
      let type = evolution.type[j];
      typesHtml += `
        <img
          src="${typeImages[type]}"
          alt="${type}"
          class="pokemon-type-img"
          title="${type.charAt(0).toUpperCase() + type.slice(1)}"
          style="width: 20px; height: 20px; display: inline-block; margin-right: 2px;"
        />
      `;
    }
    evolutionsHtml += `
      <div class="pokemon-evolution-detail">
        <img class="pokemon-evolution-img" src="${evolution.img}">
        <p class="pokemon-evolution-num">#${evolution.num}</p>
        <h2 class="pokemon-evolution-name">${evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}</h2>
        <div class="pokemon-evolution-type">
          ${typesHtml}
        </div>
        </div>
    `;
  }

  evolutionContainer.innerHTML = evolutionsHtml;

  let evolutionCards = document.querySelectorAll(".pokemon-evolution-detail");

  for (let i = 0; i < evolutionCards.length; i++) {
    let card = evolutionCards[i];
    card.addEventListener('click', function () {
      goToPokemonDetails(card.querySelector(".pokemon-evolution-name").textContent.toLowerCase());
    });
  }

  evolutionContainer.classList.remove("hidden");

} else {
  document.querySelector(".pokemon-evolution").classList.add("hidden");
};


// Función para redirigir a la página de detalles del Pokémon
function goToPokemonDetails(pokemonName) {
  var pokemonDetailsUrl = "./pokemon-details.html?name=" + pokemonName;
  window.location.href = pokemonDetailsUrl;
};







console.log(pokemonData);




// // Obtener el elemento div donde se mostrará el resultado
// const maxBaseAttackElement = document.getElementById("max-base-attack");

// // Llamar a la función maxBaseAttack() con la base de datos
// const maxBaseDefenseValue = maxBaseDefense(data);

// // Actualizar el contenido del elemento div con el resultado de la función
// maxBaseAttackElement.textContent = `El valor máximo de base-attack es: ${maxBaseAttackValue} ${maxBaseDefenseValue}`;




function maxBaseAttack(data) {
  let max = 0;
  for (let i = 0; i < data.pokemon.length; i++) {
    const baseAttack = parseInt(data.pokemon[i].stats["base-attack"]);
    if (baseAttack > max) {
      max = baseAttack;
    }
  }
  return max;
}

function maxBaseDefense(data) {
  let max = 0;
  for (let i = 0; i < data.pokemon.length; i++) {
    const baseDefense = parseInt(data.pokemon[i].stats["base-defense"]);
    if (baseDefense > max) {
      max = baseDefense;
    }
  }
  return max;
}




// Obtener el elemento div donde se mostrarán las barras
const pokemonBarsElement = document.getElementById("pokemon-bars");

// Obtener el valor máximo de base-attack
const maxBaseAttackValue = maxBaseAttack(data);

// Crear una barra para cada Pokémon
for (let i = 0; i < data.pokemon.length; i++) {
  const pokemon = data.pokemon[i];
  const baseAttack = parseInt(pokemon.stats["base-attack"]);

  // Calcular el ancho de la barra en proporción al valor máximo
  const width = (baseAttack / maxBaseAttackValue) * 100;

  // Crear un elemento div para la barra de ataque
  const attackBarElement = document.createElement("div");
  attackBarElement.classList.add("base-attack");
  attackBarElement.textContent = baseAttack;

  // Crear un elemento div para la barra
  const barElement = document.createElement("div");
  barElement.classList.add("pokemon-attack-bar");
  barElement.style.width = `${width}%`;

  // Agregar la barra de ataque a la barra principal
  barElement.appendChild(attackBarElement);

  // Agregar la barra al contenedor
  pokemonBarsElement.appendChild(barElement);
}


