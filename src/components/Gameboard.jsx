import { useEffect, useState } from "react";
import { fetchCards } from "./helper";

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

  return (
    <ul>
      {
        cards.map(card => <li>{card.name}</li>)
      }
    </ul>
  )
}

export default Gameboard;