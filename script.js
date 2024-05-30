import pokemons from "./pokemons.js";

function loadPokemons () {

    const ul = document.querySelector('ul');

    pokemons.forEach(pokemon => {

        ul.innerHTML += `
          <li>
          <span class="header">
          <p>${pokemon.nome}</p>
          <p>${pokemon.ps}</p>
          </span>
          <img src="${pokemon.img}">
          </li>        
        `
    });
}

loadPokemons();
