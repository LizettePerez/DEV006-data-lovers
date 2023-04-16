import data from './data/pokemon/pokemon.js';






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
// document.querySelector(".stats-attack").textContent = pokemon.stats["base-attack"];
// document.querySelector(".stats-defense").textContent = pokemon.stats["base-defense"];
// document.querySelector(".stats-stamina").textContent = pokemon.stats["base-stamina"];
// document.querySelector(".stats-cp").textContent = pokemon.stats["max-cp"];
// document.querySelector(".stats-hp").textContent = pokemon.stats["max-hp"];




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

function createTypeElements(container, types, className) {
  for (let i = 0; i < types.length; i++) {
    const typeParagraph = document.createElement("p");
    const typeImage = document.createElement("img");
    typeImage.src = typeImages[types[i]];
    typeImage.alt = types[i];
    typeImage.title = types[i].charAt(0).toUpperCase() + types[i].slice(1);
    typeParagraph.appendChild(typeImage);
    typeParagraph.classList.add(className);
    container.appendChild(typeParagraph);
  }
}
const typesContainer = document.querySelector(".pokemon-types");
createTypeElements(typesContainer, pokemon.type, "pokemon-type");

const weaknessesContainer = document.querySelector(".pokemon-weaknesses-types");
createTypeElements(weaknessesContainer, pokemon.weaknesses, "pokemon-weakness");

const resistancesContainer = document.querySelector(".pokemon-resistant-types");
createTypeElements(resistancesContainer, pokemon.resistant, "pokemon-resistance");


// function getPokemonByName(name) {
//   return pokemonListData.find((pokemon) => pokemon.name === name);
// }


if (pokemon && pokemon.evolution) {
  let evolution = pokemon.evolution;
  const evolutions = [pokemon]; // incluir el pokemon actual en la lista de evoluciones

  while (evolution && evolution["prev-evolution"]) {
    const prevEvolution = evolution["prev-evolution"][0];
    const prevPokemon = data.pokemon.find(function (pokemon) {
      return pokemon.num === prevEvolution.num;
    });

    evolutions.unshift(prevPokemon); // agregar la pre-evolución al inicio de la lista
    evolution = prevPokemon.evolution;
  }

  evolution = pokemon.evolution;
  while (evolution && evolution["next-evolution"]) {
    const nextEvolution = evolution["next-evolution"][0];
    const nextPokemon = data.pokemon.find(function (pokemon) {
      return pokemon.num === nextEvolution.num;
    });

    evolutions.push(nextPokemon); // agregar la siguiente evolución al final de la lista
    evolution = nextPokemon.evolution;
  }

  const evolutionContainer = document.querySelector(".pokemon-evolution");
  let evolutionsHtml = "";

  for (let i = 0; i < evolutions.length; i++) {
    const evolution = evolutions[i];
    let typesHtml = "";

    for (let j = 0; j < evolution.type.length; j++) {
      const type = evolution.type[j];
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

  const evolutionCards = document.querySelectorAll(".pokemon-evolution-detail");

  for (let i = 0; i < evolutionCards.length; i++) {
    const card = evolutionCards[i];
    card.addEventListener('click', function () {
      goToPokemonDetails(card.querySelector(".pokemon-evolution-name").textContent.toLowerCase());
    });
  }

  evolutionContainer.classList.remove("hidden");

} else {
  document.querySelector(".pokemon-evolution").classList.add("hidden");
}





function getMaxBaseValue(statName) {
  let max = 0;
  for (let i = 0; i < data.pokemon.length; i++) {
    const statValue = parseInt(data.pokemon[i].stats[statName]);
    if (statValue > max) {
      max = statValue;
    }
  }
  return max;
}


const maxBaseAttackValue = getMaxBaseValue("base-attack");
const maxBaseDefenseValue = getMaxBaseValue("base-defense");
const maxBaseStaminaValue = getMaxBaseValue("base-stamina");
const maxMaxCPValue = getMaxBaseValue("max-cp");
const maxMaxHPValue = getMaxBaseValue("max-hp");




// Obtener el elemento div donde se mostrarán las barras
const pokemonBarsElement = document.getElementById("pokemon-bars");



function createPokemonStatsBar() {
  const baseAttack = parseInt(pokemon.stats["base-attack"]); // Obtener el valor de base-attack del objeto pokemon
  const widthAttack = (baseAttack / maxBaseAttackValue) * 100; // Calcular el ancho de la barra en proporción al valor máximo

  const baseDefense = parseInt(pokemon.stats["base-defense"]);
  const widthDefense = (baseDefense / maxBaseDefenseValue) * 100;

  const baseStamina = parseInt(pokemon.stats["base-stamina"]);
  const widthStamina = (baseStamina / maxBaseStaminaValue) * 100;

  const baseCP = parseInt(pokemon.stats["max-cp"]);
  const widthCP = (baseCP / maxMaxCPValue) * 100;

  const baseHP = parseInt(pokemon.stats["max-hp"]);
  const widthHP = (baseHP / maxMaxHPValue) * 100;



  // Crear contenedor para barras
  const statsBarContainer = document.createElement("div");
  statsBarContainer.classList.add("pokemon-stats-bar-container");



  // Crear div para la barra de ataque
  const attackBarElement = document.createElement("div");
  attackBarElement.classList.add("base-attack");
  attackBarElement.textContent = "Base Attack " + pokemon.stats["base-attack"];

  // Crear div para la barra de defensa
  const defenseBarElement = document.createElement("div");
  defenseBarElement.classList.add("base-defense");
  defenseBarElement.textContent = "Base Defense " + pokemon.stats["base-defense"];

  // Crear div para la barra de stamina
  const staminaBarElement = document.createElement("div");
  staminaBarElement.classList.add("base-stamina");
  staminaBarElement.textContent = "Base Stamina " + pokemon.stats["base-stamina"];

  // Crear div para la barra de cp
  const cpBarElement = document.createElement("div");
  cpBarElement.classList.add("max-cp");
  cpBarElement.textContent = "Max CP " + pokemon.stats["max-cp"];

  // Crear div para la barra de hp
  const hpBarElement = document.createElement("div");
  hpBarElement.classList.add("max-hp");
  hpBarElement.textContent = "Max HP " + pokemon.stats["max-hp"];




  // Crear una barra de ataque
  const attackBar = document.createElement("div");
  attackBar.classList.add("pokemon-attack-bar");
  attackBar.style.width = `${widthAttack}%`;

  // Crear una barra de defensa
  const defenseBar = document.createElement("div");
  defenseBar.classList.add("pokemon-defense-bar");
  defenseBar.style.width = `${widthDefense}%`;

  // Crear una barra de stamina
  const staminaBar = document.createElement("div");
  staminaBar.classList.add("pokemon-stamina-bar");
  staminaBar.style.width = `${widthStamina}%`;

  // Crear una barra de cp
  const cpBar = document.createElement("div");
  cpBar.classList.add("pokemon-cp-bar");
  cpBar.style.width = `${widthCP}%`;

  // Crear una barra de hp
  const hpBar = document.createElement("div");
  hpBar.classList.add("pokemon-hp-bar");
  hpBar.style.width = `${widthHP}%`;




  // Agregar la barra de ataque a la barra principal
  attackBar.appendChild(attackBarElement);
  statsBarContainer.appendChild(attackBar);

  // Agregar la barra de defensa a la barra principal
  defenseBar.appendChild(defenseBarElement);
  statsBarContainer.appendChild(defenseBar);

  // Agregar la barra de stamina a la barra principal
  staminaBar.appendChild(staminaBarElement);
  statsBarContainer.appendChild(staminaBar);

  // Agregar la barra de cp a la barra principal
  cpBar.appendChild(cpBarElement);
  statsBarContainer.appendChild(cpBar);

  // Agregar la barra de hp a la barra principal
  hpBar.appendChild(hpBarElement);
  statsBarContainer.appendChild(hpBar);



  return statsBarContainer;
}



// Crear la barra de ataque del Pokémon actual
const currentPokemonAttackBar = createPokemonStatsBar(pokemon, maxBaseAttackValue, maxBaseDefenseValue);

// Agregar la barra al contenedor pokemon-bars
pokemonBarsElement.appendChild(currentPokemonAttackBar);

function goToPokemonDetails(pokemonName) {
  const pokemonDetailsUrl = "./pokemon-details.html?name=" + pokemonName;
  window.location.href = pokemonDetailsUrl;
}


// EVENTO BOTON VOLVER
volver.addEventListener("click", buttomVolver);
const volver = document.getElementById("volver");
function buttomVolver() {
  history.back();
  return false;
}

const botonArriba = document.querySelector('.arriba');
botonArriba.addEventListener('click', function () {
  // Usa la función "scrollTo" para moverte al inicio del documento
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//EVENTO HAMBURGER
const btnHamburger = document.getElementById("hamburger");
btnHamburger.addEventListener("click", burgerDisplay);
function burgerDisplay() {
  const navbarElement  = document.getElementById("myNavbar");
  if (navbarElement.classList.contains("responsive")) {
    navbarElement.classList.remove("responsive");
  } else {
    navbarElement.classList.add("responsive");
  }
}


/* eslint-disable no-console */
console.log(pokemon);
console.log(data);
/* eslint-enable no-console */
