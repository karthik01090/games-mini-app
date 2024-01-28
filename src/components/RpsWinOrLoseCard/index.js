import './rpsResults.css'

const RpsWinOrLoseCard = props => {
  const {newArray, text, restartGame, score} = props

  const onClickPlayAgainBtn = () => {
    restartGame()
  }

  let personEmojiUrl
  let personEmojiAltText
  let emojiUrl
  let emojiAltText

  switch (text) {
    case 'YOU WON':
      personEmojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Group_7618won-emoji_ksnmil.png'
      emojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901541/Emojiemoji-won_xbyljq.png'
      personEmojiAltText = 'Smiling face with star eyes'
      emojiAltText = 'won emoji'
      break
    case 'YOU LOSE':
      personEmojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Group_7618lose-emoji_qlhrbc.png'
      emojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Emojiemoji-lose_omnbwm.png'
      personEmojiAltText = 'lose emoji'
      emojiAltText = 'Face without mouth'
      break
    default:
      personEmojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Group_7618draw-emoji_oya7nv.png'
      emojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Emojiemoji-draw_v3hszw.png'
      personEmojiAltText = 'Face without mouth'
      emojiAltText = 'draw emoji'
  }

  console.log(personEmojiAltText)

  return (
    <div className="rps-win-or-lose-card-bg-container">
      <div className="rps-win-or-lose-card-container">
        <h1>Rock Paper Scissor</h1>
        <div className="rps-score-card-container">
          <ul className="rps-win-or-lose-list-container">
            <li className="list-item">Rock</li>
            <li className="list-item">Paper</li>
            <li className="list-item">Scissor</li>
          </ul>
          <div className="scorecard-container">
            <img src={personEmojiUrl} alt={personEmojiAltText} />
            <div className="score-card-rps">
              <p className="score-text">Score</p>
              <p className="score">{score}</p>
            </div>
          </div>
        </div>
        <div className="rps-results-container">
          <div className="result-container">
            <p>You</p>
            <img
              src={newArray[0].imageUrl}
              alt={newArray[0].id}
              className="rps-result-image"
            />
          </div>
          <div className="result-text-container">
            <img src={emojiUrl} alt={emojiAltText} />
            <p>{text}</p>
          </div>
          <div className="result-container">
            <p>Opponent</p>
            <img
              src={newArray[1].imageUrl}
              alt={newArray[1].id}
              className="rps-result-image"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onClickPlayAgainBtn}
          className="rps-play-again-btn"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default RpsWinOrLoseCard
