import { useState } from 'react'
import Header from './components/Header.jsx';
import Gameboard from './components/Gameboard.jsx';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [limit, setLimit] = useState(10);

  function handleLimitChange(e) {
    setLimit(e.target.value);
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} limit={limit} onLimitChange={handleLimitChange}/>
      <Gameboard limit={limit} />
    </div>
  )
}