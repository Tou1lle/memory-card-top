import { useState, useEffect } from "react";

function PokemonSingleImage() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getImage = async (pokemonName = "pikachu") => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
        const data = await response.json();
        const imageUrl = data.sprites.other["official-artwork"].front_default;
        
        if (!ignore) {
          setPokemon(imageUrl);
        }
      } catch (error) {
        console.log("Failed to catch the pokemon: ", error);
      }
    }
    
    getImage("pikachu");

    return () => {
      ignore = true;
    };    
  }, [])

  return (
    <div>
      <p>{pokemon}</p>
      <img src={pokemon} alt="A picture of a Pokemon" />
    </div>
  )
}

function PokemonMultipleImages() {
  const [limit, setLimit] = useState(10);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

      async function getPokemons(limit) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`, { signal });
          const data = await response.json();
          const pokemonList = data.results.map((item, index) => {
            return {
              name: item.name,
              id: index + 1,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
            }
          });

          if (!signal.aborted) {
            setPokemons(pokemonList);
            console.log(pokemonList)
          }
        } catch (error) {
          console.log("Error: " + error.name);
      }}

    getPokemons(limit)

    return () => {
      controller.abort();
    }
  }, [])

  return (
    <ul>
      {
        pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
      }
    </ul>
  )
}

export { PokemonSingleImage, PokemonMultipleImages }