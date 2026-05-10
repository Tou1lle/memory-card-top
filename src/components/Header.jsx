import "./../styles/header.css"
import { setDifficultyColor } from "./helper";

function Header({score, bestScore, limit, onLimitChange}) {
  const difficultyClass = limit == 10 ? "easy-select" : limit == 15 ? "medium-select" : "hard-select";

  return (
    <header>
      <div>
        <h1>Memory Card Game</h1>
        <p className="instructions">Catch every Pokemon exactly once! Catch them again and you LOSE!</p>
      </div>
      <div className="header-sidebar sidebar">
        <div className="scoreboard">
          <p>Current Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
        <select 
          name="limit" 
          id="limit" 
          onChange={(e) => {
            onLimitChange(e);
            setDifficultyColor(e);
          }} 
          value={limit} 
          className={difficultyClass}>
          <option className="easy-option" value="10">Easy</option>
          <option className="medium-option" value="15">Medium</option>
          <option className="hard-option" value="25">Hard</option>
        </select>
      </div>
    </header>
  )
}

export default Header;