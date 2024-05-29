import pokemons from "./pokemons.js";

function loadPokemons(pokemonList) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';  // Limpa a lista antes de adicionar os pokémons

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

document.getElementById('embaralhar').addEventListener('click', () => {
    const listaEmbaralhada = _.shuffle(pokemons);
    loadPokemons(listaEmbaralhada);
});

loadPokemons(pokemons);
