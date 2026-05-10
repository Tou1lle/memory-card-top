import "./../styles/header.css"

function Header({score, bestScore, limit, onLimitChange}) {
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
        <select name="limit" id="limit" onChange={onLimitChange} value={limit}>
          <option value="10">Easy</option>
          <option value="15">Medium</option>
          <option value="25">Hard</option>
        </select>
      </div>
    </header>
  )
}

export default Header;