import data from "./data/pokemon/pokemon.js";

const pokemonContainer = document.querySelector(".pokemon-container");

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


for (let i = 0; i < 251; i++) {
  const { num, name, img, type } = data.pokemon[i];

  // creación card para informacion de cada pokémon
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  /*Agregar un EventListener al elemento pokemonCard para que abra una nueva página al hacer clic en él*/

  pokemonCard.addEventListener("click", () => {
    // Obtiene el número de pokemon del atributo "data name" en la tarjeta pokemon seleccionada
    // const about = pokemonCard.name;
    // Crea una URL usando el nombre de pokemon obtenido y redirecciona a la nueva página
    window.location.href = `pokemon.html?name=${name}`;
  });

  // Creación div y clase para img verde de fondo
  const pokemonImgContainer = document.createElement("div");
  pokemonImgContainer.classList.add("pokemon-img-container");

  // creación etiqueta img traidos de la data
  const pokemonImg = document.createElement("img");
  pokemonImg.src = img;
  pokemonImg.alt = name;

  // agregar elemento hijo al elemento HTML
  pokemonImgContainer.appendChild(pokemonImg);

  // creación h3 para mostrar los tipos de pokemon
  const pokemonType = document.createElement("h3");
  pokemonType.classList.add("pokemon-type");

  // creación parrafo para ingresar número
  const pokemonNum = document.createElement("p");
  pokemonNum.textContent = `#${num}`;

  // creación h2 para ingresar nombre
  const pokemonName = document.createElement("h2");
  // toma el primer caracter del nombre para que sea en mayuscula y juntarlo con slice para devolver el resto de caracteres.
  pokemonName.textContent = name.charAt(0).toUpperCase() + name.slice(1);

  // Mostrar la imagen de cada tipo
  type.forEach((t) => {
    const typeImg = document.createElement("img");
    typeImg.src = typeImages[t];
    typeImg.alt = t;
    typeImg.classList.add("pokemon-type-img");
    typeImg.title = t.charAt(0).toUpperCase() + t.slice(1);
    typeImg.style.width = "25px";
    typeImg.style.height = "25px";
    typeImg.style.display = "inline-block";
    typeImg.style.marginRight = "5px";
    pokemonType.appendChild(typeImg);
  });

  pokemonCard.appendChild(pokemonImgContainer);
  pokemonCard.appendChild(pokemonNum);
  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonType);

  pokemonContainer.appendChild(pokemonCard);
}

// Obtener el elemento de entrada y agregar un event listener
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", searchPokemon);

// Función de búsqueda
function searchPokemon() {
  // Obtener el valor de búsqueda del usuario y convertirlo a minúsculas
  const searchTerm = searchInput.value.toLowerCase();

  // Recorrer todos los Pokémon
  for (let i = 0; i < data.pokemon.length; i++) {
    const { num, name } = data.pokemon[i];
    const pokemonCard = document.querySelectorAll(".pokemon-card")[i];

    // Si el nombre o el número del Pokémon coincide con el término de búsqueda, mostrar la tarjeta
    if (name.toLowerCase().includes(searchTerm) || num.includes(searchTerm)) {
      pokemonCard.style.display = "block";
    } else {
      // De lo contrario, ocultar la tarjeta
      pokemonCard.style.display = "none";
    }
  }
}

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


// Obtener el elemento de selección de orden
const filterSelect = document.querySelector("#filter");

// Agregar un event listener al elemento de selección de orden
filterSelect.addEventListener("change", filterPokemon);

// Función de ordenamiento
function filterPokemon() {
  // Obtener el valor de ordenamiento seleccionado por el usuario
  const filterValue = filterSelect.value;

  // Obtener todos los elementos de la tarjeta Pokemon
  const pokemonCards = document.querySelectorAll(".pokemon-card");

  // Convertir los elementos de la tarjeta Pokemon a un array
  const pokemonArray = Array.from(pokemonCards);

  // Ordenar el array según el valor de ordenamiento seleccionado por el usuario
  if (filterValue === "num-asc") {
    pokemonArray.sort((a, b) => {
      return parseInt(a.querySelector("p").textContent.slice(1)) - parseInt(b.querySelector("p").textContent.slice(1));
    });
  } else if (filterValue === "num-desc") {
    pokemonArray.sort((a, b) => {
      return parseInt(b.querySelector("p").textContent.slice(1)) - parseInt(a.querySelector("p").textContent.slice(1));
    });
  } else if (filterValue === "name-asc") {
    pokemonArray.sort((a, b) => {
      return a.querySelector("h2").textContent.localeCompare(b.querySelector("h2").textContent);
    });
  } else if (filterValue === "name-desc") {
    pokemonArray.sort((a, b) => {
      return b.querySelector("h2").textContent.localeCompare(a.querySelector("h2").textContent);
    });
  }

  // Recorrer el array ordenado y agregar cada elemento a la página
  for (let i = 0; i < pokemonArray.length; i++) {
    pokemonContainer.appendChild(pokemonArray[i]);
  }
}













// const sortSelect = document.querySelector("#sort");
// sortSelect.addEventListener("change", sortPokemon);

// function sortPokemon() {
//   const sortValue = sortSelect.value;
//   const pokemonCards = Array.from(document.querySelectorAll(".pokemon-card"));

//   pokemonCards.sort((a, b) => {
//     const aData = data.pokemon.find((p) => p.name === a.querySelector("h2").textContent.toLowerCase());
//     const bData = data.pokemon.find((p) => p.name === b.querySelector("h2").textContent.toLowerCase());

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
//   pokemonCards.forEach((card) => {
//     pokemonContainer.appendChild(card);
//   });
// }



/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */

// fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));
