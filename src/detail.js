import data from "./data/pokemon/pokemon.js";

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

const pokemonDetail = document.querySelector(".pokemon-detail");

for (let i = 0; i < 252; i++) {
  const {
    num,
    name,
    img,
    type,
    about,
    "pokemon-rarity": rarity,
    size: { height, weight },
    generation: { num: genNum, name: genName },
    stats: {
      "base-attack": baseAttack,
      "base-defense": baseDefense,
      "base-stamina": baseStamina,
      "max-cp": maxCP,
      "max-hp": maxHP,
    },
  } = data.pokemon[i];

  const backButton = document.createElement("a");
  backButton.href = "index.html";
  backButton.classList.add("back");
  backButton.innerHTML = "&#8592; Volver";

  //Para crear nombre, imagen del pokémon, tipo(s) y descripción

  const individualName = document.createElement("h2");
  individualName.textContent =
    name.charAt(0).toUpperCase() + name.slice(1) + " " + "#" + num;

  const containerInfo = document.createElement("div");
  containerInfo.classList.add("container-info");

  const individualImg = document.createElement("img");
  individualImg.classList.add("container-info-img");
  individualImg.src = img;
  individualImg.alt = name;

  const infoPokemon = document.createElement("div");
  infoPokemon.classList.add("container-info-pokemon");

  const imgType = document.createElement("div");

  type.forEach((t) => {
    const typeImg = document.createElement("img");
    typeImg.classList.add("type-info");
    typeImg.src = typeImages[t];
    typeImg.alt = t;
    typeImg.title = t.charAt(0).toUpperCase() + t.slice(1);
    typeImg.style.width = "60px";
    typeImg.style.height = "60px";
    typeImg.style.display = "inline-block";
    typeImg.style.marginRight = "40px";
    imgType.appendChild(typeImg);
  });

  const description = document.createElement("h4");
  description.classList.add("description");
  description.textContent = about;

  //Para el cuadro gris de información general

  const dataPoke = document.createElement("div");
  dataPoke.classList.add("container-info-perfil");

  const rarityInfo = document.createElement("h5");
  rarityInfo.textContent = rarity.charAt(0).toUpperCase() + rarity.slice(1);

  const divHeight = document.createElement("div");
  const divWeight = document.createElement("div");
  const heightText = document.createElement("h6");
  heightText.textContent = "Height";
  const weightText = document.createElement("h6");
  weightText.textContent = "Weight";
  const heightInfo = document.createElement("p");
  heightInfo.textContent = height;
  const weightInfo = document.createElement("p");
  weightInfo.textContent = weight;

  const divGen = document.createElement("div");
  const divReg = document.createElement("div");
  const genText = document.createElement("h6");
  genText.textContent = "Generation";
  const regText = document.createElement("h6");
  regText.textContent = "Region";
  const genInfo = document.createElement("p");
  genInfo.textContent = genNum.slice(11);
  const regInfo = document.createElement("p");
  regInfo.textContent = genName.charAt(0).toUpperCase() + genName.slice(1);

  //Para crear estructura de estadísticas

  const divStats = document.createElement("div");
  divStats.classList.add("container-stats");
  const table = document.createElement("table");
  table.classList.add("stats");

  const statsTitle = document.createElement("tr");
  statsTitle.classList.add("stats-title");
  const tdContent = [
    "Base attack",
    "Base defense",
    "Base Stamina",
    "Max CP",
    "Max HP",
  ];

  for (let i = 0; i < tdContent.length; i++) {
    const td = document.createElement("td");
    td.textContent = tdContent[i];
    statsTitle.appendChild(td);
  }

  const statsInfo = document.createElement("tr");
  statsInfo.classList.add("stats.info");

  const tdInfo = [baseAttack, baseDefense, baseStamina, maxCP, maxHP];

  for (let i = 0; i < tdInfo.length; i++) {
    const td = document.createElement("td");
    td.textContent = tdInfo[i];
    statsInfo.appendChild(td);
  }

  containerInfo.appendChild(individualImg);
  containerInfo.appendChild(infoPokemon);
  containerInfo.appendChild(divStats);
  infoPokemon.appendChild(imgType);
  infoPokemon.appendChild(description);
  infoPokemon.appendChild(dataPoke);
  dataPoke.appendChild(heightText);
  dataPoke.appendChild(weightText);
  dataPoke.appendChild(rarityInfo);
  dataPoke.appendChild(genText);
  dataPoke.appendChild(regText);
  heightText.appendChild(heightInfo);
  weightText.appendChild(weightInfo);
  genText.appendChild(genInfo);
  regText.appendChild(regInfo);
  divStats.appendChild(table);
  table.appendChild(statsTitle);
  table.appendChild(statsInfo);

  pokemonDetail.appendChild(backButton);
  pokemonDetail.appendChild(individualName);
  pokemonDetail.appendChild(containerInfo);
  pokemonDetail.appendChild(divStats);
}

console.log(heightInfo);

// // Plantilla de cadena de texto para una tarjeta de Pokémon
// const individualCard = (pokemon) => {
//   const namePoke = document.createElement(h2);
//   namePoke.dataset.name = pokemon.name;
//   namePoke.innerHTML = individualCard(pokemon);
// };

// // POKÉMON DETAILS //
// // const pokemonDetail = document.querySelector(".pokemon-detail");
// // // Plantilla de cadena de texto para una tarjeta de PokémoncardTemplate
// const pokemonName = document.createElement("h1");

// pokemonName.textContent = `${pokemon.name}`;

// const pokemonDetail = document.querySelector(".pokemon-detail");

// const cardTemplateDetail = (pokemon) => {
//   return `
//       <div class="pokemon-info">
//         <h4 class="description">${pokemon.description}</h4>
//         <div class="pokemon-profile">
//           <div class="pokemon-profile-item">
//             <h5>NORMAL</h5>
//             <p class="height">${pokemon.height}</p>
//             <p class="weight">${pokemon.weight}</p>
//             <p class="num">${pokemon.generation}</p>
//             <p class="name">${pokemon.region}</p>
//           </div>
//         </div>
//         <div class="pokemon-stats">
//           <table class="stats">
//             <tr class="stats-title">
//               <td>base attack</td>
//               <td>base defense</td>
//               <td>base stamina</td>
//               <td>max cp</td>
//               <td>max hp</td>
//             </tr>
//             <tr class="stats-info">
//               <td>${pokemon.attack}</td>
//               <td>${pokemon.defense}</td>
//               <td>${pokemon.stamina}</td>
//               <td>${pokemon.maxCP}</td>
//               <td>${pokemon.maxHP}</td>
//             </tr>
//           </table>
//         </div>
//         <div class="pokemon-weaknesses">
//           <div class="pokemon-weaknesses-item">
//             <h2>Weaknesses</h2>
//             <div>
//               ${pokemon.weaknesses
//                 .map((w) => {
//                   return `
//                     <img
//                       src="./img/elementos/${w}.png"
//                       alt="${w}"
//                       title="${w.charAt(0).toUpperCase() + w.slice(1)}"
//                       class="type-img-info"
//                     />
//                   `;
//                 })
//                 .join("")}
//             </div>
//           </div>
//           <div class="pokemon-strengths-item">
//             <h2>Strengths</h2>
//             <div>
//               ${pokemon.strengths
//                 .map((s) => {
//                   return `
//                     <img
//                       src="./img/elementos/${s}.png"
//                       alt="${s}"
//                       title="${s.charAt(0).toUpperCase() + s.slice(1)}"
//                       class="type-img-info"
//                     />
//                   `;
//                 })
//                 .join("")}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// };

// pokemonData.forEach((pokemon) => {
//   const cardDetail = cardTemplateDetail(pokemon);
//   pokemonDetail.insertAdjacentHTML("beforeend", cardDetail);
// });

/* eslint-disable no-console */
// console.log(data);
/* eslint-enable no-console */
