// Write your code here.

import {
  NavBarContainer,
  TitleWithScoreContainer,
  LogoAndTitleContainer,
  EmojiLogo,
  Title,
  ScoresContainer,
  Score,
} from './gameNavbarComponents'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <NavBarContainer>
      <TitleWithScoreContainer>
        <LogoAndTitleContainer>
          <EmojiLogo
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />

          <Title>Emoji Game</Title>
        </LogoAndTitleContainer>
        {isGameInProgress && (
          <ScoresContainer>
            <Score>Score: {currentScore}</Score>
            <Score>Top Score: {topScore}</Score>
          </ScoresContainer>
        )}
      </TitleWithScoreContainer>
    </NavBarContainer>
  )
}

export default NavBar
