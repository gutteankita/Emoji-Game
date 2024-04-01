import React from 'react'

const WinOrLoseCard = ({gameStatus, score, onPlayAgain, topScore}) => {
  const handlePlayAgain = () => {
    if (score > topScore) {
      onPlayAgain(score)
    } else {
      onPlayAgain()
    }
  }

  return (
    <div className="win-or-lose-card">
      <h2>{gameStatus === 'won' ? 'You Won' : 'You Lose'}</h2>
      <p>Your Score: {score}</p>
      {gameStatus === 'won' ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won or lose"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="won or lose"
        />
      )}
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default WinOrLoseCard
