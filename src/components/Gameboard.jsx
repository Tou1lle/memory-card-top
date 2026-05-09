import "./../styles/gameboard.css"
import { useEffect, useState } from "react";
import { fetchCards, getSumPicked, getCard } from "./helper";
import _ from "lodash"

function Gameboard({limit}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetchCards(limit, signal)
    .then(cardList => {
      if (cardList) setCards(cardList);
    })

    return () => {
      controller.abort();
    }
  }, [limit])

  function handlePick(e) {
    const id = e.currentTarget.dataset.id;
    const card = getCard(id, cards)
    // Update the card to be picked
    const updatedCard = {...card, picked: true};
    // Update state with new picked card to trigger rerender
    setCards(prevCards => prevCards.map(item => {
      return item.id == id ? updatedCard : item;
    }))
  }

  return (
    <main>
      {cards.map(item => (
        <div key={item.id} data-id={item.id} onClick={handlePick}>
          <img src={item.image} alt={"Image of a pokemon named " + item.name} />
          <h2>{_.capitalize(item.name)}</h2>
          <p>{item.picked.toString()}</p>
        </div>
      ))}
    </main>
  )
}

export default Gameboard;