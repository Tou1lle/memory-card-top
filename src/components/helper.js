async function fetchCards(limit, signal) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`, {signal})
    const data = await response.json();
    const cardsList = data.results.map((item, index) => {
      return {
        name: item.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
        picked: false,
      }
    });

    if (!signal.aborted) {
      return cardsList;
    }
  } 
  catch (error) {
    console.log("Error: " + error.name);
  }
}

export { fetchCards };