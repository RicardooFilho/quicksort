import pokemons from "./pokemons.js";

function loadPokemons(pokemonList) {

    const ul = document.querySelector('ul');

    clearUl(ul)

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

   const listaEmbaralhada = pokemons.sort(() => Math.random() - 0.5)

    loadPokemons(listaEmbaralhada)
}

window.shufflePokemons = shufflePokemons

function clearUl(ul) {
       ul.innerHTML = '';
}

loadPokemons(pokemons)

