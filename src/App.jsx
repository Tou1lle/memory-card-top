import { useState, useEffect } from "react";

function PokemonImages() {
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

export { PokemonImages }