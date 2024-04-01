// // Write your code here.
import './index.css'

const NavBar = ({score, topScore,gameStatus}) => {
  return (
    <div className="header-section">
      <div className="emoji-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="score-section">
        {gameStatus !== 'won' && (
          <div>
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default NavBar



