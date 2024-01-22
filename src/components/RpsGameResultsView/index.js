import {withRouter} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import RpsWinOrLoseCard from '../RpsWinOrLoseCard'

import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
} from './styledComponents'

import './index.css'

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

  const onClickBackButton = () => {
    const {history} = props
    history.replace('/')
  }

  const gameView = () => (
    <div className="rps-game-view-container">
      <div className="rps-game-btns-container">
        <button
          type="button"
          className="back-button"
          onClick={onClickBackButton}
        >
          <BiArrowBack className="arrow-back" />
          Back
        </button>
        <button type="button" className="rps-rules-btn">
          Rules
        </button>
      </div>
      <h1>ROCK PAPER SCISSOR</h1>
      <h1>Let's Pick</h1>
      <GameViewContainer>
        <GameButton
          type="button"
          data-testid="rockButton"
          onClick={() => checkResult(choicesList[0].id)}
        >
          <GameImage
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            key={choicesList[0].id}
          />
        </GameButton>
        <GameButton
          type="button"
          data-testid="scissorButton"
          onClick={() => checkResult(choicesList[1].id)}
        >
          <GameImage
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            key={choicesList[1].id}
          />
        </GameButton>
        <GameButton
          type="button"
          data-testid="paperButton"
          onClick={() => checkResult(choicesList[2].id)}
        >
          <GameImage
            src={choicesList[2].imageUrl}
            alt={choicesList[2].id}
            key={choicesList[2].id}
          />
        </GameButton>
      </GameViewContainer>
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
