export const volver = document.getElementById("volver");
export function buttomVolver() {
  history.back();
  return false;
};

export const btnHamburger = document.getElementById("hamburger");
export function burgerDisplay() {
  let navbarElement  = document.getElementById("myNavbar");
  if (navbarElement.classList.contains("responsive")) {
    navbarElement.classList.remove("responsive");
  } else {
    navbarElement.classList.add("responsive");
  }
}

export const botonArriba = document.querySelector('.arriba');
botonArriba.addEventListener('click', function () {
  // Usa la función "scrollTo" para moverte al inicio del documento
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Función para redirigir a la página de detalles del Pokémon
export function goToPokemonDetails(pokemonName) {
  var pokemonDetailsUrl = "./pokemon-details.html?name=" + pokemonName;
  window.location.href = pokemonDetailsUrl;
};


// Función para ordenar los Pokémon por nombre o número
export function sortPokemon(optionValue) {
  let sortedData;

  if (optionValue === "name-asc") {
    sortedData = data.pokemon.sort((a, b) => a.name.localeCompare(b.name));
  } else if (optionValue === "name-desc") {
    sortedData = data.pokemon.sort((a, b) => b.name.localeCompare(a.name));
  } else if (optionValue === "num-asc") {
    sortedData = data.pokemon.sort((a, b) => a.num - b.num);
  } else if (optionValue === "num-desc") {
    sortedData = data.pokemon.sort((a, b) => b.num - a.num);
  }

  return sortedData;
}

