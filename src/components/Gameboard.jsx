import "./../styles/gameboard.css"
import { useEffect, useState } from "react";
import { fetchCards, getSumPicked, getCard } from "./helper";
import _ from "lodash"

function Gameboard({limit, setScore, bestScore, setBestScore}) {
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
    if (!card.picked) handlePickPositive(card, id);
    if (card.picked) handlePickNegative();
  }

  function handlePickPositive(card, id) {
    const updatedCard = {...card, picked: true};
    const updatedCards = cards.map(item => item.id == id ? updatedCard : item) 
    const score = getSumPicked(updatedCards);
    
    setCards(updatedCards)
    setScore(score)
    if (score > bestScore) setBestScore(score);
  }

  function handlePickNegative() {
    const updatedCards = cards.map(item => ({...item, picked: false}));
    const score = getSumPicked(updatedCards);

    setCards(updatedCards);
    setScore(score);
  }

  return (
    <main>
      {_.shuffle(cards).map(item => (
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