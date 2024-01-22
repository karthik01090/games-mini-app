import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import EmojiCard from '../EmojiCard'
import EmojiGameNavbar from '../EmojiGameNavbar'
import WinOrLoseCard from '../WinOrLoseCard'

import {
  EmojisListContainer,
  RulesPage,
  BackButton,
  RulesBgContainer,
  ImageContainer,
  EmojiGameHeading,
  EmojiGameImage,
  RulesContainer,
  RulesHeading,
  RulesList,
  RuleItem,
  StartPlayingBtn,
  AppContainer,
  EmojiGameBody,
} from './emojiGameStyles'

// import './index.css'

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
      <EmojisListContainer className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </EmojisListContainer>
    )
  }

  renderRulesPage = () => (
    <RulesPage>
      <BackButton onClick={this.onClickBackButton}>
        <BiArrowBack className="arrow-back" /> Back
      </BackButton>
      <RulesBgContainer>
        <ImageContainer>
          <EmojiGameImage
            src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704420553/Asset_1_4x_1rules-emoji-image_rxth3e.png"
            alt="emoji game"
          />
          <EmojiGameHeading>Emoji Game</EmojiGameHeading>
        </ImageContainer>
        <RulesContainer>
          <RulesHeading>Rules</RulesHeading>
          <RulesList>
            <RuleItem>User should be able to see the list of Emojis</RuleItem>
            <RuleItem>
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </RuleItem>
            <RuleItem>
              This process should be repeated every time the user clicks on an
              emoji card
            </RuleItem>
            <RuleItem>
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </RuleItem>
            <RuleItem>
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </RuleItem>
            <RuleItem>
              Once the game is over, the user will be redirected to the results
              page.
            </RuleItem>
          </RulesList>
          <StartPlayingBtn onClick={this.onClickStartPlayingButton}>
            Start Playing
          </StartPlayingBtn>
        </RulesContainer>
      </RulesBgContainer>
    </RulesPage>
  )

  render() {
    const {
      clickedEmojisList,
      isGameInProgress,
      topScore,
      isGameStarted,
    } = this.state

    return isGameStarted ? (
      <AppContainer>
        <EmojiGameNavbar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <EmojiGameBody>
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </EmojiGameBody>
      </AppContainer>
    ) : (
      this.renderRulesPage()
    )
  }
}

export default EmojiGame
