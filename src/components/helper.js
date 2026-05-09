/**
 * @param {number} limit Number of cards to fetch
 * @param {AbortController} signal Cleaning purposes
 * @returns Array of objects
 */
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

/**
 * @param {Array} arr Containing objects (cards)
 */
function getSumPicked(arr) {
  return arr.reduce((accumulator, currentValue) => {
      if (currentValue.picked) return accumulator + 1;
      return accumulator;
    }, 0)
}

/**
 * @param {number} id Provided ID from the DOM element
 * @param {Array} arr Array of card objects
 * @returns The found card object
 */
function getCard(id, arr) {
  return arr.find(card => {
    return parseInt(card.id) === parseInt(id);
  })
}

export { fetchCards, getSumPicked, getCard };