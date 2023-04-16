

// Función para ordenar los Pokémon por nombre o número
export function sortPokemon(optionValue) {
  let sortedData;

  if (optionValue === "name-asc") {
    sortedData = ((a, b) => a.name.localeCompare(b.name));
  } else if (optionValue === "name-desc") {
    sortedData = ((a, b) => b.name.localeCompare(a.name));
  } else if (optionValue === "num-asc") {
    sortedData = ((a, b) => a.num - b.num);
  } else if (optionValue === "num-desc") {
    sortedData = ((a, b) => b.num - a.num);
  }

  return sortedData;
}

// Función para buscar Pokémon por nombre o número
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

