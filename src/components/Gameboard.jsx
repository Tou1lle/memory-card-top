import "./../styles/gameboard.css"
import { useEffect, useState } from "react";
import { fetchCards } from "./helper";
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

  return (
    <main>
      {cards.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={"Image of a pokemon named " + item.name} />
          <h2>{_.capitalize(item.name)}</h2>
          <p>{item.picked.toString()}</p>
        </div>
      ))}
    </main>
  )
}

export default Gameboard;