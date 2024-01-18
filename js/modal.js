var elInfoBtn = document.querySelector('.info-btn');
var elModalImg = document.querySelector('.modal-pokemon-img');

var elPokemonTitle = document.querySelector('.modal-pokemon-title');
var elModalType = document.querySelector('.modal-pokemon-type');
var elModalCandy = document.querySelector('.modal-pokemon-candy');
var elModalWeaknesses = document.querySelector('.modal-pokemon-weaknesses');
var elModalHeight = document.querySelector('.modal-pokemon-height');
var elModalWeight = document.querySelector('.modal-pokemon-weight');

elPokemonResults.addEventListener('click', (evt) => {

    var clickPokemmonId = Number(evt.target.dataset.pokemonId);
 
    var foundPokemon = pokemons.find((pokemon) => {
      return pokemon.id === clickPokemmonId;
    })
 
    elPokemonTitle.textContent = foundPokemon.name
    elModalImg.src = foundPokemon.img
    elModalType.textContent = foundPokemon.type.join(', ')
    elModalCandy.textContent = `Candy: ${foundPokemon.candy}`;
    elModalWeaknesses.textContent = foundPokemon.weaknesses.join(', ')
    elModalHeight.textContent = `Height: ${foundPokemon.height}`;
    elModalWeight.textContent = `Weight: ${foundPokemon.weight}`
 
 })
 
