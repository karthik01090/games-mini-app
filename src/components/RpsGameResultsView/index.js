import {withRouter} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import RpsWinOrLoseCard from '../RpsWinOrLoseCard'

import './rpsGameResultsView.css'

const RpsGameResultsView = props => {
  const {
    choicesList,
    isShow,
    checkResult,
    newArray,
    text,
    score,
    restartGame,
  } = props

  const gameView = () => (
    <div className="rps-game-view-container">
      <h1 className="rps-heading">Rock Paper Scissor</h1>
      <h1 className="rps-heading">Let's Pick</h1>
      <div className="game-view-container">
        <button
          className="game-button"
          type="button"
          data-testid="rockButton"
          onClick={() => checkResult(choicesList[0].id)}
        >
          <img
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            key={choicesList[0].id}
            className="game-image"
          />
        </button>
        <button
          className="game-button"
          type="button"
          data-testid="scissorButton"
          onClick={() => checkResult(choicesList[1].id)}
        >
          <img
            className="game-image"
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            key={choicesList[1].id}
          />
        </button>
        <button
          className="game-button"
          type="button"
          data-testid="paperButton"
          onClick={() => checkResult(choicesList[2].id)}
        >
          <img
            className="game-image"
            src={choicesList[2].imageUrl}
            alt={choicesList[2].id}
            key={choicesList[2].id}
          />
        </button>
      </div>
    </div>
  )

  const renderResultsView = () => (
    <RpsWinOrLoseCard
      newArray={newArray}
      text={text}
      restartGame={restartGame}
      score={score}
    />
  )

  const showGame = () => (isShow ? gameView() : renderResultsView())

  return showGame()
}

export default withRouter(RpsGameResultsView)
