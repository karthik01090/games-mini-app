import {
  ScoreContainer,
  ScoreNameContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const RpsScoreView = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          Rock <br />
          Paper <br /> Scissors
        </ScoreName>
      </ScoreNameContainer>
      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoard>
    </ScoreContainer>
  )
}

export default RpsScoreView
