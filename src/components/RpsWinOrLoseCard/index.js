import './index.css'

const RpsWinOrLoseCard = props => {
  const {newArray, text, restartGame, score} = props

  const onClickPlayAgainBtn = () => {
    restartGame()
  }

  return (
    <div className="rps-win-or-lose-card-bg-container">
      <div className="rps-win-or-lose-card-container">
        <h1>ROCK PAPER SCISSOR</h1>
        <div className="rps-score-card-container">
          <ul className="rps-win-or-lose-list-container">
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissor</li>
          </ul>
          <div className="score-card-rps">
            <p>Score</p>
            <p>{score}</p>
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
          <div className="result-text-container">{text}</div>
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
