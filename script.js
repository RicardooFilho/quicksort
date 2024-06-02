import pokemons from "./pokemons.js";

function loadPokemons(pokemonList) {

    const ul = document.querySelector('ul');

    clearUl(ul);

    pokemonList.forEach(pokemon => {
        ul.innerHTML += `
          <li>
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

       ul.innerHTML = '';
}

function quickSortOrdenation(array, startPosition, finalPosition) {

    if (array.length <= 1) {

        return array;
    }

    let pivot = array[startPosition].ps;
    let left = startPosition;
    let right = finalPosition;

    while (left <= right) {

        while (array[left].ps < pivot) {

            left++;
        }

        while (array[right].ps > pivot) {

            right--;
        }

        if (left <= right) {

            [array[left], array[right]] = [array[right], array[left]];

            left++;
            right--;
        }
    }

    if (startPosition < right) {

        quickSortOrdenation(array, startPosition, right);
    }

    if (finalPosition > left) {

        quickSortOrdenation(array, left, finalPosition);
    }

    return array;
}

function sortPokemons() {

    const sortedPokemons = quickSortOrdenation(pokemons, 0, pokemons.length - 1);

    loadPokemons(sortedPokemons);
}

window.shufflePokemons = shufflePokemons;
window.sortPokemons = sortPokemons;
loadPokemons(pokemons);

