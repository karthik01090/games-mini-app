import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import './cardFlipGame.css'

class CardFlipGame extends Component {
  state = {
    isGameStarted: false,
  }

  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  startCardFlipMemoryGame = () => {
    this.setState({isGameStarted: true})
  }

  renderRulesListView = () => (
    <div className="rules-page-bg-container-game4">
      <div className="rules-page-container-game4">
        <button
          type="button"
          className="back-button"
          onClick={this.onClickBackButton}
        >
          <BiArrowBack className="arrow-back" />
          Back
        </button>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
            alt="rock paper scissor"
            className="card-flip-memory-image"
          />
        </div>
        <div className="rules-container-game4">
          <h1 className="rules-heading-game2">Rules</h1>
          <ul className="rules-list-container-game4">
            <div>
              <li className="rule-item-game4">
                When the game is started, the users should be able to see the
                list of Cards that are shuffled and turned face down.
              </li>
              <li className="rule-item-game4">
                When a user starts the game, the user should be able to see the
                Timer running.
              </li>
              <li className="rule-item-game4">
                The Timer starts from 2 Minutes.
              </li>
              <li className="rule-item-game4">
                If the two cards have the same image, they remain face up. If
                not, they should be flipped face down again after a short 2
                seconds.
              </li>
            </div>
            <div>
              <li className="rule-item-game4">
                Users should be able to compare only two cards at a time.
              </li>
              <li className="rule-item-game4">
                When the user is not able to find all the cards before the timer
                ends then the game should end and redirect to the Time Up Page.
              </li>
              <li className="rule-item-game4 last-rule-item">
                If the user finds all the matching cards before the timer ends,
                then the user should be redirected to the results page.
              </li>
            </div>
          </ul>
          <button type="button" className="start-playing-btn-game4">
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )

  renderGamePageView = () => (
    <div className="card-flip-game-bg-container">
      <div className="card-flip-game">
        <div className="buttons-container">
          <button type="button">Back</button>
          <button type="button">Rules</button>
        </div>
        <h1 className="heading">Card-Flip Memory Game</h1>
        <div className="card-and-flip-count-container">
          <div>
            <p>Card flip count</p>
            <p>Score</p>
          </div>
        </div>
      </div>
    </div>
  )

  render() {
    const {isGameStarted} = this.state

    return isGameStarted
      ? this.renderGamePageView()
      : this.renderRulesListView()
  }
}

export default CardFlipGame
