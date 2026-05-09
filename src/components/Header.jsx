import "./../styles/header.css"

function Header({score, bestScore, limit}) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div>
        <p>Current Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <select name="limit" id="limit" defaultValue={limit}>
          <option value="10">Easy</option>
          <option value="15">Medium</option>
          <option value="25">Hard</option>
        </select>
      </div>
    </header>
  )
}

export default Header;