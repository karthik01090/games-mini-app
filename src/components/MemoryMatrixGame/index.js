import {Component} from 'react'

import {
  RulesPageBgContainer,
  RulesPageContainer,
  BackButton,
  ArrowBack,
  ImageContainer,
  GameHeading,
  MemoryMatrixGameImage,
  RulesContainerGame2,
  RuleItemGame2,
  StartPlayingButtonGame2,
  RulesHeadingGame2,
  RulesListContainer,
} from './memoryMatrixStyledComponents'

class MemoryMatrixGame extends Component {
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
            <GameHeading>Memory Matrix</GameHeading>
            <MemoryMatrixGameImage
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346396/slvjhz7sxqxg1bkuipgz.png"
              alt="memory matrix"
            />
          </ImageContainer>
          <RulesContainerGame2>
            <RulesHeadingGame2>Rules</RulesHeadingGame2>
            <RulesListContainer>
              <div>
                <RuleItemGame2>
                  In each level of the Game, Users should be able to see the
                  Grid with (N X N) size starting from 3 and the grid will
                  highlight N cells in Blue, the N highlighted cells will be
                  picked randomly.
                </RuleItemGame2>
                <RuleItemGame2>
                  The highlighted cells will remain N seconds for the user to
                  memorize the cells. At this point, the user should not be able
                  to perform any action.
                </RuleItemGame2>
                <RuleItemGame2>
                  After N seconds, the grid will clear the N highlighted cells.
                </RuleItemGame2>
              </div>
              <div>
                <RuleItemGame2>
                  At N seconds, the user can click on any cell. Clicking on a
                  cell that was highlighted before it will turn blue. Clicking
                  on the other cells that were not highlighted before then will
                  turn to red.
                </RuleItemGame2>
                <RuleItemGame2>
                  The user should be promoted to the next level if they guess
                  all N cells correctly in one attempt.
                </RuleItemGame2>
                <RuleItemGame2>
                  The user should be taken to the results page if the user
                  clicks on the wrong cell.
                </RuleItemGame2>
                <RuleItemGame2>
                  If the user completed all the levels, then the user should be
                  taken to the results page.
                </RuleItemGame2>
              </div>
            </RulesListContainer>
          </RulesContainerGame2>
          <StartPlayingButtonGame2 type="button">
            Start Playing
          </StartPlayingButtonGame2>
        </RulesPageContainer>
      </RulesPageBgContainer>
    )
  }
}

export default MemoryMatrixGame
