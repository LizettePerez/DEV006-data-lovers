//Función para buscar Pokémon por nombre o número
export function searchPokemon(searchText) {
  const cards = document.querySelectorAll(".pokemon-card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const name = card.dataset.name.toLowerCase();
    const num = card.querySelector(".pokemon-num").textContent.toLowerCase();
    if (name.includes(searchText) || num.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}
