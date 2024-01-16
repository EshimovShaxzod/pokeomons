var elPokemonResults = document.querySelector('.pokemon-results');
var elPokemonTemplate = document.querySelector('.pokemons-template').content;

var newPokemonsResults = new DocumentFragment();

// function renderPokemons(pokemons){

//     elPokemonResults.innerHTML = null
    
//     for(var i=0; i<pokemons.length; i++){
//         var clonePokemonsTemplate = elPokemonTemplate.cloneNode(true);

//         clonePokemonsTemplate.querySelector('.pokemon-img').src = pokemons[i].img
//         clonePokemonsTemplate.querySelector('.pokemon-title').textContent = pokemons[i].name
//         clonePokemonsTemplate.querySelector('.pokemon-type').textContent =`${pokemons[i].type.join(', ')}`
//         clonePokemonsTemplate.querySelector('.pokemon-candy').textContent = pokemons[i].candy

//         clonePokemonsTemplate.querySelector('.pokemon-time').textContent = pokemons[i].spawn_time
//         // clonePokemonsTemplate.querySelector('.pokemon-agg').textContent = ` Egg: ${pokemons[i].egg}`
//         clonePokemonsTemplate.querySelector('.pokemon-avg').textContent = `Spawn: ${pokemons[i].avg_spawns}`

//         newPokemonsResults.appendChild(clonePokemonsTemplate);

//     }

//     elPokemonResults.appendChild(newPokemonsResults);

// }

var idx = 8

setTimeout(() => {
    function renderPokemons(pokemons){

        elPokemonResults.innerHTML = null
        
        for(var i=0; i<pokemons.slice(0,idx).length; i++){
            var clonePokemonsTemplate = elPokemonTemplate.cloneNode(true);
    
            clonePokemonsTemplate.querySelector('.pokemon-img').src = pokemons[i].img
            clonePokemonsTemplate.querySelector('.pokemon-title').textContent = pokemons[i].name
            clonePokemonsTemplate.querySelector('.pokemon-type').textContent =`${pokemons[i].type.join(', ')}`
            clonePokemonsTemplate.querySelector('.pokemon-candy').textContent = pokemons[i].candy
    
            clonePokemonsTemplate.querySelector('.pokemon-time').textContent = pokemons[i].spawn_time
            // clonePokemonsTemplate.querySelector('.pokemon-agg').textContent = ` Egg: ${pokemons[i].egg}`
            clonePokemonsTemplate.querySelector('.pokemon-avg').textContent = `Spawn: ${pokemons[i].avg_spawns}`
    
            newPokemonsResults.appendChild(clonePokemonsTemplate);
    
        }
    
        elPokemonResults.appendChild(newPokemonsResults);
    
    }

  

    var moreBtn = document.querySelector('.more-btn');
        console.log(moreBtn);

        moreBtn.addEventListener("click", () => {
            idx += 4

       renderPokemons(pokemons)
    })

 renderPokemons(pokemons)

  }, "300");
  
