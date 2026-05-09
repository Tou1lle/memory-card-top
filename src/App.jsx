import { useState } from 'react'
import Header from './components/Header.jsx';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [limit, setLimit] = useState(10);

  return (
    <div>
      <Header score={score} bestScore={bestScore} limit={limit}/>
    </div>
  )
}