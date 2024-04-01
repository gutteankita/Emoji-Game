import React, {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    gameStatus: 'ongoing',
    shuffledEmojis: [],
  }

  componentDidMount() {
    this.shuffleEmojis()
  }

  shuffleEmojis = () => {
    const {emojisList} = this.props
    const shuffledEmojis = [...emojisList].sort(() => Math.random() - 0.5)
    this.setState({shuffledEmojis})
  }

  handleEmojiClick = emojiId => {
    const {clickedEmojis, score, shuffledEmojis} = this.state

    if (clickedEmojis.includes(emojiId)) {
      this.setState({gameStatus: 'lost'})
    } else {
      const newScore = score + 1
      const newClickedEmojis = [...clickedEmojis, emojiId]
      const gameStatus =
        newClickedEmojis.length === shuffledEmojis.length ? 'won' : 'ongoing'

      this.setState({
        clickedEmojis: newClickedEmojis,
        score: newScore,
        gameStatus: gameStatus,
      })
      this.shuffleEmojis()
    }
  }

  handlePlayAgain = newScore => {
    const {score, topScore} = this.state
    this.setState({
      clickedEmojis: [],
      score: 0,
      gameStatus: 'ongoing',
      topScore: newScore > topScore ? newScore : topScore,
    })
    this.shuffleEmojis()
  }

  render() {
    const {score, topScore, gameStatus, shuffledEmojis} = this.state

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        {gameStatus === 'ongoing' ? (
          <EmojiCard
            emojisList={shuffledEmojis}
            onEmojiClick={this.handleEmojiClick}
          />
        ) : (
          <WinOrLoseCard
            gameStatus={gameStatus}
            score={score}
            onPlayAgain={this.handlePlayAgain}
            topScore={topScore}
          />
        )}
        {gameStatus === 'won' && <p className="best-score">Best Score</p>}
      </div>
    )
  }
}

export default EmojiGame
