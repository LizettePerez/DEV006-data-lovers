// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


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
