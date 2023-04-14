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


