import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import RpsGameResultsView from '../RpsGameResultsView'
import RpsScoreView from '../RpsScoreView'

import {MainContainer} from './styledComponents'

import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissorGame extends Component {
  state = {
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
    score: 0,
    isGameStarted: false,
  }

  getResult = (item1, item2) => {
    if (item1.id === 'rock') {
      switch (item2.id) {
        case 'paper':
          return 'YOU LOSE'
        case 'scissors':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'paper') {
      switch (item2.id) {
        case 'rock':
          return 'YOU WON'
        case 'scissors':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'rock':
          return 'YOU LOSE'
        case 'paper':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  onStartRockPaperScissorGame = () => {
    this.setState({isGameStarted: true})
  }

  checkResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(each => each.id === id)
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShow: false,
      newArray: [choice1[0], choice2],
      text: result,
      score: newScore,
    })
  }

  renderRockPaperScissorGameRulesPage = () => (
    <div className="rules-page-bg-container">
      <div className="rules-page-container">
        <button
          type="button"
          className="back-button"
          onClick={this.onClickBackButton}
        >
          <BiArrowBack className="arrow-back" />
          Back
        </button>
        <div className="image-container">
          <h1 className="game-heading">ROCK PAPER SCISSOR</h1>
          <img
            src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346397/kcjxurkdx1loidzeiz9c.png"
            alt="rock paper scissor"
            className="rock-paper-scissor-image"
          />
        </div>
        <div className="rules-container-game2">
          <h1 className="rules-heading-game2">Rules</h1>
          <ul className="rules-list-container-game2">
            <li className="rule-item-game2">
              The game result should be based on user and user opponent choices
            </li>
            <li className="rule-item-game2">
              When the user choice is rock and his opponent choice is rock then
              the result will be
              <span className="span-element"> IT IS DRAW</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is paper and his opponent choice is rock then
              the result will be <span className="span-element"> YOU WON</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is a scissor and his opponent choice is rock
              then the result will be{' '}
              <span className="span-element"> YOU LOSE</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is paper and his opponent choice is paper
              then the result will be{' '}
              <span className="span-element"> IT IS DRAW</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is scissors and his opponent choice is paper
              then the result will be{' '}
              <span className="span-element"> YOU WON</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is rock and his opponent choice is scissors
              then the result will be{' '}
              <span className="span-element"> YOU WON</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is paper and his opponent choice is scissors
              then the result will be{' '}
              <span className="span-element"> YOU LOSE</span>
            </li>
            <li className="rule-item-game2">
              When the user choice is scissors and his opponent choice is
              scissors then the result will be{' '}
              <span className="span-element"> IT IS DRAW</span>
            </li>
            <li className="rule-item-game2">
              When the result is <span className="span-element"> YOU WON</span>,
              then the count of the score should be incremented by 1
            </li>
            <li className="rule-item-game2">
              When the result is{' '}
              <span className="span-element"> IT IS DRAW</span>, then the count
              of the score should be the same
            </li>
            <li className="rule-item-game2">
              When the result is <span className="span-element"> YOU LOSE</span>
              , then the count of the score should be decremented by 1.
            </li>
          </ul>
          <button
            type="button"
            className="start-playing-btn-game2"
            onClick={this.onStartRockPaperScissorGame}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )

  renderRockPaperScissorGame = () => {
    const {isShow, newArray, text, score} = this.state
    return (
      <MainContainer>
        <RpsScoreView score={score} />
        <RpsGameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />
      </MainContainer>
    )
  }

  render() {
    const {
      isGameStarted,
      playerChoice,
      playerScore,
      computerChoice,
      isGameFinished,
    } = this.state

    return isGameStarted
      ? this.renderRockPaperScissorGame()
      : this.renderRockPaperScissorGameRulesPage()
  }
}

export default RockPaperScissorGame
