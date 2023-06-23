import React from 'react';

function fetchPokemonData(pokemon){
    let url = pokeapi.co/api/v2/pokemon/1/
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData)
      })
    }
 
export default PokemonData;
