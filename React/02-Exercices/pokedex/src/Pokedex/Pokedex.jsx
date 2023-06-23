import React, { useState, useEffect } from 'react';


const Pokedex = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);
    const [name, setName] = useState(null);
    const [url, setUrl] = useState(null);

    const [pokeTab, setPokeTab] = useState([]);

    useEffect(() => {
        async function fecthPokemon() {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300')
            const resJson = await res.json()
            if (resJson !== null) {
                setResults(resJson)
                setName(resJson.results.name)
                setUrl(resJson.results.url)
                setPokeTab(resJson.results)
                setLoading(false)
            }
        }
        fecthPokemon()
    })
    console.log(pokeTab);

    return (
        <div>
          <h1>Pokédex</h1>
          {loading ? (
            <div>
              <img src="./img/loading.svg" alt='loading-logo' />
            </div>
          ) : (
            <div>
              {pokeTab.map((pokemon, index) => {
                return <div key={index}>
                <h3>{pokemon.name}</h3>
                <p>{pokemon.url}</p>
              </div>
})}
            </div>
          )}
        </div>
      );
}

export default Pokedex;