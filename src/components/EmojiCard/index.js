import './index.css'

import React from 'react'

const EmojiCard = ({emojisList, onEmojiClick}) => {
  return (
    <div className="emoji-cards-container">
      {emojisList.map(eachEmoji => (
        <li key={eachEmoji.id} className="emoji-cards">
          <button className="btn" onClick={() => onEmojiClick(eachEmoji.id)}>
            <img
              src={eachEmoji.emojiUrl}
              alt={eachEmoji.emojiName}
              className="emoji"
            />
          </button>
        </li>
      ))}
    </div>
  )
}

export default EmojiCard
