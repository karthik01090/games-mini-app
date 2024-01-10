import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import EmojiCard from '../EmojiCard'
import EmojiGameNavbar from '../EmojiGameNavbar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
    isGameStarted: false,
  }

  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickStartPlayingButton = () => {
    this.setState({
      isGameStarted: true,
    })
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderRulesPage = () => (
    <div className="rules-page">
      <button
        type="button"
        className="back-button"
        onClick={this.onClickBackButton}
      >
        <BiArrowBack className="arrow-back" />
        Back
      </button>
      <div className="rules-bg-container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704420553/Asset_1_4x_1rules-emoji-image_rxth3e.png"
            alt="emoji game"
            className="emoji-game-image"
          />
          <h1 className="emoji-game-heading">Emoji Game</h1>
        </div>
        <div className="rules-container">
          <h1 className="rules-heading">Rules</h1>
          <ul className="rules-list">
            <li className="rule-item">
              User should be able to see the list of Emojis
            </li>
            <li className="rule-item">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li className="rule-item">
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li className="rule-item">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li className="rule-item">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li className="rule-item">
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
          <button
            className="start-playing-btn"
            type="button"
            onClick={this.onClickStartPlayingButton}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )

  render() {
    const {
      clickedEmojisList,
      isGameInProgress,
      topScore,
      isGameStarted,
    } = this.state

    return isGameStarted ? (
      <div className="app-container">
        <EmojiGameNavbar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    ) : (
      this.renderRulesPage()
    )
  }
}

export default EmojiGame
