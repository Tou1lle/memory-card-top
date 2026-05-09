import { useState } from 'react'
import Header from './components/Header.jsx';
import Gameboard from './components/Gameboard.jsx';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [limit, setLimit] = useState(10);
  const [gameID, setGameID] = useState(0);

  function handleLimitChange(e) {
    setLimit(e.target.value);
  }

  function resetGame() {
    setScore(0);
    setGameID(gameID + 1);
  }

  return (
    <div>
      <Header 
        score={score} 
        bestScore={bestScore} 
        limit={limit} 
        onLimitChange={handleLimitChange}
      />
      <Gameboard 
        key={gameID} 
        limit={limit} 
        setScore={setScore} 
        bestScore={bestScore} 
        setBestScore={setBestScore} 
        resetGame={() => resetGame()}
      />
    </div>
  )
}