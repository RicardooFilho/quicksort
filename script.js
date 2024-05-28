import pokemons from "./pokemons.js";

function loadPokemons () {

    const ul = document.querySelector('ul');

    pokemons.forEach(pokemon => {

        ul.innerHTML += `
          <li>
          <img src="${pokemon.img}">
          <span class="header">${pokemon.nome}</span>
          <span class="footer">${pokemon.ps}</span>
          </li>        
        `
    });
}

loadPokemons();