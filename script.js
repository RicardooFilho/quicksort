import pokemons from "./pokemons.js";

function loadPokemons(pokemonList) {

    const ul = document.querySelector('ul');

    clearUl(ul)

    pokemonList.forEach(pokemon => {
        ul.innerHTML += `
          <li>
          <img src="${pokemon.img}">
          <span class="header">${pokemon.nome}</span>
          <span class="footer">PS: ${pokemon.ps}</span>
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
