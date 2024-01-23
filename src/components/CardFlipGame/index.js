import {Component} from 'react'

import {
  RulesPageBgContainer,
  RulesPageContainer,
  BackButton,
  ArrowBack,
  ImageContainer,
  CardFlipMemoryImage,
  RulesContainer,
  RuleItem,
  StartPlayingButton,
  RulesHeading,
  RulesListContainer,
} from './cardFlipGameStyledComponents'

class CardFlipGame extends Component {
  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <RulesPageBgContainer>
        <RulesPageContainer>
          <BackButton type="button" onClick={this.onClickBackButton}>
            <ArrowBack />
            Back
          </BackButton>
          <ImageContainer>
            <CardFlipMemoryImage
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
              alt="rock paper scissor"
            />
          </ImageContainer>
          <RulesContainer>
            <RulesHeading>Rules</RulesHeading>
            <RulesListContainer>
              <div>
                <RuleItem>
                  When the game is started, the users should be able to see the
                  list of Cards that are shuffled and turned face down.
                </RuleItem>
                <RuleItem>
                  When a user starts the game, the user should be able to see
                  the Timer running.
                </RuleItem>
                <RuleItem>The Timer starts from 2 Minutes.</RuleItem>
                <RuleItem>
                  If the two cards have the same image, they remain face up. If
                  not, they should be flipped face down again after a short 2
                  seconds.
                </RuleItem>
              </div>
              <div>
                <RuleItem>
                  Users should be able to compare only two cards at a time.
                </RuleItem>
                <RuleItem>
                  When the user is not able to find all the cards before the
                  timer ends then the game should end and redirect to the Time
                  Up Page.
                </RuleItem>
                <RuleItem>
                  If the user finds all the matching cards before the timer
                  ends, then the user should be redirected to the results page.
                </RuleItem>
              </div>
            </RulesListContainer>
          </RulesContainer>
          <StartPlayingButton type="button">Start Playing</StartPlayingButton>
        </RulesPageContainer>
      </RulesPageBgContainer>
    )
  }
}

export default CardFlipGame
