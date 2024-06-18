import pokemons from "./pokemons.js";

async function loadPokemons(pokemonList) {
  const ul = document.querySelector("ul");

  clearUl(ul);

  pokemonList.forEach((pokemon) => {
    ul.innerHTML += `
          <li id=li-${pokemon.id}>
          <span class="header">
          <p>${pokemon.nome}</p>
          <p>${pokemon.ps}</p>
          </span>
          <img src="${pokemon.img}">
          </li>        
        `;
  });
}

function shufflePokemons() {
  const listaEmbaralhada = pokemons.sort(() => Math.random() - 0.5);

  loadPokemons(listaEmbaralhada);
}

function clearUl(ul) {
  ul.innerHTML = "";
}

async function quickSortOrdenation(array, startPosition, finalPosition) {

  if (startPosition >= finalPosition) {
    
    return array;
  }

  const li = document.querySelector(`#li-${array[startPosition].id}`);
  li.classList.add("pivot");
  showLegend("Pivot selecionado");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  let pivot = array[startPosition].ps;
  let left = startPosition;
  let right = finalPosition;

  while (left <= right) {
    while (array[left].ps < pivot) {
      left++;
      const liLeft = document.querySelector(`#li-${array[left].id}`);
      liLeft.classList.add("search-left");
      showLegend(
        `Valor à esquerda do pivot (${array[left].ps}) sendo comparado`
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      liLeft.classList.remove("search-left");
    }

    while (array[right].ps > pivot) {
      right--;
      const liRight = document.querySelector(`#li-${array[right].id}`);
      liRight.classList.add("search-right");
      showLegend(
        `Valor à direita do pivot (${array[right].ps}) sendo comparado`
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      liRight.classList.remove("search-right");
    }

    if (left <= right) {
      const liLeft = document.querySelector(`#li-${array[left].id}`);
      liLeft.classList.add("alter");

      const liRight = document.querySelector(`#li-${array[right].id}`);
      liRight.classList.add("alter");

      const leftValue = array[left].ps;
      const rightValue = array[right].ps;

      if (leftValue !== rightValue) {
        showLegend(`Trocando valores: ${leftValue} e ${rightValue}`);
      } else {
        showLegend(
          `Não trocando valores: ${leftValue} já é menor ou igual a ${rightValue}`
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      [array[left], array[right]] = [array[right], array[left]];

      await loadPokemons(array);
      await new Promise((resolve) => setTimeout(resolve, 3000));

      liLeft.classList.remove("alter");
      liRight.classList.remove("alter");

      left++;
      right--;
    }
  }

  li.classList.remove("pivot");
  showLegend("Pivot removido");

  if (startPosition < right) {
    await quickSortOrdenation(array, startPosition, right);
  }

  if (finalPosition > left) {
    await quickSortOrdenation(array, left, finalPosition);
  }

  if (startPosition === 0 && finalPosition === array.length - 1) {
    showLegend("Cartas ordenadas por Quick Sort");
  }

  return array;
}

function showLegend(legend) {
  const div = document.querySelector("#legend");
  const main = document.querySelector("main");
  const legendElement = document.createElement("div");
  legendElement.textContent = legend;
  legendElement.classList.add("legend");

  const existingLegend = document.querySelector(".legend");
  if (existingLegend) {
    existingLegend.remove();
  }

  div.appendChild(legendElement);

  setTimeout(() => {
    legendElement.remove();
  }, 7000);
}

async function sortPokemons() {
  const sortedPokemons = await quickSortOrdenation(
    pokemons,
    0,
    pokemons.length - 1
  );

  loadPokemons(sortedPokemons);
}

window.shufflePokemons = shufflePokemons;
window.sortPokemons = sortPokemons;
loadPokemons(pokemons);
