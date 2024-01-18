var elPakemonForm = document.querySelector('.pakemon-form');
var elSearchInput = document.querySelector('.pakemon-search-input')

elPakemonForm.addEventListener('input', (evt) => {

    var inputValue = evt.target.value.trim();
    // console.log(inputValue);

    var SEARCH_QUERY = new RegExp(inputValue, 'gi');

    var searchPokemon = pokemons.filter((pokemon) => {
        return pokemon.name.match(SEARCH_QUERY);
    })

    renderPokemons(searchPokemon)

    // var infoBtn = document.querySelector('.info-btn')

    if(elSearchInput.value.trim() != null){
        elInfoBtn.style.display = 'none';
    }else{
        elInfoBtn.style.display = 'block';
    }

})