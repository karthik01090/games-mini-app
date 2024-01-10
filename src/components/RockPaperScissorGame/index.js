import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import './index.css'

class RockPaperScissorGame extends Component {
  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
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
                The game result should be based on user and user opponent
                choices
              </li>
              <li className="rule-item-game2">
                When the user choice is rock and his opponent choice is rock
                then the result will be
                <span className="span-element"> IT IS DRAW</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is paper and his opponent choice is rock
                then the result will be{' '}
                <span className="span-element"> YOU WON</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is a scissor and his opponent choice is
                rock then the result will be{' '}
                <span className="span-element"> YOU LOSE</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is paper and his opponent choice is paper
                then the result will be{' '}
                <span className="span-element"> IT IS DRAW</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is scissors and his opponent choice is
                paper then the result will be{' '}
                <span className="span-element"> YOU WON</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is rock and his opponent choice is scissors
                then the result will be{' '}
                <span className="span-element"> YOU WON</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is paper and his opponent choice is
                scissors then the result will be{' '}
                <span className="span-element"> YOU LOSE</span>
              </li>
              <li className="rule-item-game2">
                When the user choice is scissors and his opponent choice is
                scissors then the result will be{' '}
                <span className="span-element"> IT IS DRAW</span>
              </li>
              <li className="rule-item-game2">
                When the result is{' '}
                <span className="span-element"> YOU WON</span>, then the count
                of the score should be incremented by 1
              </li>
              <li className="rule-item-game2">
                When the result is{' '}
                <span className="span-element"> IT IS DRAW</span>, then the
                count of the score should be the same
              </li>
              <li className="rule-item-game2">
                When the result is{' '}
                <span className="span-element"> YOU LOSE</span>, then the count
                of the score should be decremented by 1.
              </li>
            </ul>
            <button type="button" className="start-playing-btn-game2">
              Start Playing
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default RockPaperScissorGame
