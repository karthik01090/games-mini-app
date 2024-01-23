// Write your code here.
import {
  WinOrLoseCardContainer,
  DetailsSection,
  GameStatus,
  CurrentScoreLabel,
  CurrentScoreValue,
  PlayAgainButton,
  ImageSection,
  WinOrLoseImage,
} from './winOrLoseCardStyledComponents'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <WinOrLoseCardContainer>
      <DetailsSection>
        <GameStatus>{gameStatus}</GameStatus>
        <CurrentScoreLabel>{scoreLabel}</CurrentScoreLabel>
        <CurrentScoreValue>{score}/12</CurrentScoreValue>
        <PlayAgainButton onClick={onClickPlayAgain}>Play Again</PlayAgainButton>
      </DetailsSection>
      <ImageSection>
        <WinOrLoseImage src={imageUrl} alt="win or lose" />
      </ImageSection>
    </WinOrLoseCardContainer>
  )
}

export default WinOrLoseCard
