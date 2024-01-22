import {
  RpsWinOrLoseCardBgContainer,
  RpsWinOrLoseCardContainer,
  RpsScoreCardContainer,
  RpsWinOrLoseListContainer,
  ListItem,
  ScoreCardContainer,
  RpsScoreCard,
  ScoreText,
  Score,
  RpsResultsContainer,
  ResultContainer,
  ResultImage,
  ResultTextContainer,
  RpsPlayAgainBtn,
} from './WinOrLoseCardComponents'

import './index.css'

const RpsWinOrLoseCard = props => {
  const {newArray, text, restartGame, score} = props

  const onClickPlayAgainBtn = () => {
    restartGame()
  }

  let personEmojiUrl
  let emojiUrl

  switch (text) {
    case 'YOU WON':
      personEmojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Group_7618won-emoji_ksnmil.png'
      emojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901541/Emojiemoji-won_xbyljq.png'
      break
    case 'YOU LOSE':
      personEmojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Group_7618lose-emoji_qlhrbc.png'
      emojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Emojiemoji-lose_omnbwm.png'
      break
    default:
      personEmojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Group_7618draw-emoji_oya7nv.png'
      emojiUrl =
        'https://res.cloudinary.com/dqbiyti1d/image/upload/v1705901542/Emojiemoji-draw_v3hszw.png'
  }

  return (
    <RpsWinOrLoseCardBgContainer>
      <RpsWinOrLoseCardContainer>
        <h1>ROCK PAPER SCISSOR</h1>
        <RpsScoreCardContainer>
          <RpsWinOrLoseListContainer>
            <ListItem>Rock</ListItem>
            <ListItem>Paper</ListItem>
            <ListItem>Scissor</ListItem>
          </RpsWinOrLoseListContainer>
          <ScoreCardContainer>
            <img src={personEmojiUrl} alt={text} />
            <RpsScoreCard>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </RpsScoreCard>
          </ScoreCardContainer>
        </RpsScoreCardContainer>
        <RpsResultsContainer>
          <ResultContainer>
            <p>You</p>
            <ResultImage src={newArray[0].imageUrl} alt={newArray[0].id} />
          </ResultContainer>
          <ResultTextContainer>
            <img src={emojiUrl} alt={text} />
            <p>{text}</p>
          </ResultTextContainer>
          <ResultContainer>
            <p>Opponent</p>
            <ResultImage src={newArray[1].imageUrl} alt={newArray[1].id} />
          </ResultContainer>
        </RpsResultsContainer>
        <RpsPlayAgainBtn type="button" onClick={onClickPlayAgainBtn}>
          Play Again
        </RpsPlayAgainBtn>
      </RpsWinOrLoseCardContainer>
    </RpsWinOrLoseCardBgContainer>
  )
}

export default RpsWinOrLoseCard
