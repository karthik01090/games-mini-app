// import {Component} from 'react'

// import SingleCard from '../SingleCard'

// import './cardFlipGame.css'

// const cardsData = [
//   {
//     name: 'tiger',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
//   },
//   {
//     name: 'lion',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
//   },
//   {
//     name: 'rat',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
//   },
//   {
//     name: 'hen',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
//   },
//   {
//     name: 'elephant',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
//   },
//   {
//     name: 'buffalo',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
//   },
//   {
//     name: 'goat',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
//   },
//   {
//     name: 'zebra',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
//   },
//   {
//     name: 'duck',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
//   },
//   {
//     name: 'pigeon',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
//   },
// ]

// const finalCardsData = [...cardsData, ...cardsData].map(card => ({
//   ...card,
//   id: Math.random(),
// }))

// class CardFlipGame extends Component {
//   state = {
//     isGameStarted: false,
//     choiceOne: '',
//     choiceTwo: '',
//     flipsCount: 0,
//   }

//   compareSelectedCard = () => {
//     const {choiceOne, choiceTwo} = this.state
//     if (choiceOne.image === choiceTwo.image) {
//       console.log('Cards Matches')
//     } else {
//       console.log('Cards not matched')
//     }
//   }

//   resetTurn = () => {
//     this.setState({
//       choiceOne: '',
//       choiceTwo: '',
//     })
//     this.setState(prevState => ({
//       flipsCount: prevState.flipsCount + 1,
//     }))
//   }

//   handleChoice = card => {
//     const {choiceOne, choiceTwo} = this.state
//     if (choiceOne) {
//       this.setState({choiceTwo: card}, this.compareSelectedCard())
//     } else {
//       this.setState({choiceOne: card}, this.compareSelectedCard())
//     }
//   }

// onClickBackButton = () => {
//   const {history} = this.props
//   history.replace('/')
// }

//   startCardFlipMemoryGame = () => {
//     this.setState({isGameStarted: true})
//   }

// renderRulesListView = () => (
//   // <RulesPageBgContainer>
//   //   <RulesPageContainer>
//   //     <BackButton type="button" onClick={this.onClickBackButton}>
//   //       <ArrowBack />
//   //       Back
//   //     </BackButton>
//   //     <ImageContainer>
//   //       <CardFlipMemoryImage
//   //         src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
//   //         alt="rock paper scissor"
//   //       />
//   //     </ImageContainer>
//   //     <RulesContainer>
//   //       <RulesHeading>Rules</RulesHeading>
//   //       <RulesListContainer>
//   //         <div>
//   //           <RuleItem>
//   //             When the game is started, the users should be able to see the
//   //             list of Cards that are shuffled and turned face down.
//   //           </RuleItem>
//   //           <RuleItem>
//   //             When a user starts the game, the user should be able to see the
//   //             Timer running.
//   //           </RuleItem>
//   //           <RuleItem>The Timer starts from 2 Minutes.</RuleItem>
//   //           <RuleItem>
//   //             If the two cards have the same image, they remain face up. If
//   //             not, they should be flipped face down again after a short 2
//   //             seconds.
//   //           </RuleItem>
//   //         </div>
//   //         <div>
//   //           <RuleItem>
//   //             Users should be able to compare only two cards at a time.
//   //           </RuleItem>
//   //           <RuleItem>
//   //             When the user is not able to find all the cards before the timer
//   //             ends then the game should end and redirect to the Time Up Page.
//   //           </RuleItem>
//   //           <RuleItem>
//   //             If the user finds all the matching cards before the timer ends,
//   //             then the user should be redirected to the results page.
//   //           </RuleItem>
//   //         </div>
//   //       </RulesListContainer>
//   //     </RulesContainer>
//   //     <StartPlayingButton
//   //       type="button"
//   //       onClick={this.startCardFlipMemoryGame}
//   //     >
//   //       Start Playing
//   //     </StartPlayingButton>
//   //   </RulesPageContainer>
//   // </RulesPageBgContainer>
//   <div className="rules-page-bg-container-game4">
//     <div className="rules-page-container-game4">
//       <button
//         type="button"
//         className="back-button"
//         onClick={this.onClickBackButton}
//       >
//         <BiArrowBack className="arrow-back" />
//         Back
//       </button>
//       <div className="image-container">
//         <img
//           src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
//           alt="rock paper scissor"
//           className="card-flip-memory-image"
//         />
//       </div>
//       <div className="rules-container-game4">
//         <h1 className="rules-heading-game2">Rules</h1>
//         <ul className="rules-list-container-game4">
//           <div>
//             <li className="rule-item-game4">
//               When the game is started, the users should be able to see the list
//               of Cards that are shuffled and turned face down.
//             </li>
//             <li className="rule-item-game4">
//               When a user starts the game, the user should be able to see the
//               Timer running.
//             </li>
//             <li className="rule-item-game4">
//               The Timer starts from 2 Minutes.
//             </li>
//             <li className="rule-item-game4">
//               If the two cards have the same image, they remain face up. If not,
//               they should be flipped face down again after a short 2 seconds.
//             </li>
//           </div>
//           <div>
//             <li className="rule-item-game4">
//               Users should be able to compare only two cards at a time.
//             </li>
//             <li className="rule-item-game4">
//               When the user is not able to find all the cards before the timer
//               ends then the game should end and redirect to the Time Up Page.
//             </li>
//             <li className="rule-item-game4 last-rule-item">
//               If the user finds all the matching cards before the timer ends,
//               then the user should be redirected to the results page.
//             </li>
//           </div>
//         </ul>
//         <button type="button" className="start-playing-btn-game4">
//           Start Playing
//         </button>
//       </div>
//     </div>
//   </div>
// )

//   renderGamePageView = () => (
//     <div className="card-flip-game-bg-container">
//       <div className="card-flip-game">
//         <div className="buttons-container">
//           <button type="button">Back</button>
//           <button type="button">Rules</button>
//         </div>
//         <h1 className="heading">Card-Flip Memory Game</h1>
//         <div className="card-and-flip-count-container">
//           <div>
//             <p>Card flip count</p>
//             <p>Score</p>
//           </div>
//           <div className="card-grid">
//             {finalCardsData.map(eachCard => (
//               <SingleCard
//                 cardDetails={eachCard}
//                 key={eachCard.id}
//                 handleChoice={this.handleChoice}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )

//   render() {
//     const {isGameStarted, choiceOne, choiceTwo} = this.state
//     console.log('CHoice One: ', choiceOne)
//     console.log('Choice two: ', choiceTwo)
//     return isGameStarted
//       ? this.renderGamePageView()
//       : this.renderRulesListView()
//   }
// }

// export default CardFlipGame

import {Component} from 'react'
import CardFlipCards from '../CardFlipCards'

import './index.css'

const content = [
  {
    id: 0,
    name: 'bull',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7477bull_v5vgzz.png',
  },
  {
    id: 1,
    name: 'bird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7481bird_jtko8k.png',
  },
  {
    id: 2,
    name: 'rat',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7478rat_we6vbt.png',
  },
  {
    id: 3,
    name: 'tiger',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1tiger_yz87vh.png',
  },
  {
    id: 4,
    name: 'sheep',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7482sheep_uetqxr.png',
  },
  {
    id: 5,
    name: 'zebra',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1zebra_eqxjb3.png',
  },
  {
    id: 6,
    name: 'lizerd',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1lizerd_dlofc3.png',
  },
  {
    id: 7,
    name: 'wildbear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7475wildbear_sdqu8j.png',
  },
  {
    id: 8,
    name: 'bear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/Group_7476bear_y1s8db.png',
  },
  {
    id: 9,
    name: 'greenbird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7485greenbird_eru67t.png',
  },
  {
    id: 10,
    name: 'bull',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7477bull_v5vgzz.png',
  },
  {
    id: 11,
    name: 'bird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7481bird_jtko8k.png',
  },
  {
    id: 12,
    name: 'rat',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7478rat_we6vbt.png',
  },
  {
    id: 13,
    name: 'tiger',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1tiger_yz87vh.png',
  },
  {
    id: 14,
    name: 'sheep',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7482sheep_uetqxr.png',
  },
  {
    id: 15,
    name: 'zebra',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1zebra_eqxjb3.png',
  },
  {
    id: 16,
    name: 'lizerd',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1lizerd_dlofc3.png',
  },
  {
    id: 17,
    name: 'wildbear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7475wildbear_sdqu8j.png',
  },
  {
    id: 18,
    name: 'bear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/Group_7476bear_y1s8db.png',
  },
  {
    id: 19,
    name: 'greenbird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7485greenbird_eru67t.png',
  },
]

const doubleContent = content.sort(() => Math.random() - 0.5)

class CardFlipGame extends Component {
  state = {
    cards: doubleContent,
    firstCard: '',
    secondCard: '',
    firstId: null,
    secondId: null,
    score: 0,
    cardsFlipCount: 0,
  }

  onClickFlip = id => {
    this.setState(prevState => ({
      cards: prevState.cards.map(eachCardItem => {
        if (id === eachCardItem.id) {
          const updateFaceUp = !eachCardItem.faceUp
          return {...eachCardItem, faceUp: updateFaceUp}
        }
        return eachCardItem
      }),
    }))
  }

  onAddFirstCard = (name, id) => {
    const {firstCard, secondCard, firstId, secondId} = this.state
    if (firstCard === '') {
      this.setState({firstCard: name, firstId: id})
      this.setState(prev => ({cardsFlipCount: prev.cardsFlipCount + 1}))
    } else if (secondCard === '') {
      if (name === firstCard) {
        this.setState(prev => ({score: prev.score + 1}))
      }
      this.setState({secondCard: name, secondId: id})
      this.setState(prev => ({cardsFlipCount: prev.cardsFlipCount + 1}))
    }
    if (firstCard !== '' && secondCard !== '') {
      if (firstCard === secondCard) {
        this.setState(prevState => ({
          cards: prevState.cards.map(eachCardItem => {
            if (id === eachCardItem.id) {
              const updateFaceUp = true
              return {...eachCardItem, faceUp: updateFaceUp}
            }
            return eachCardItem
          }),
        }))
        this.setState({
          firstCard: name,
          secondCard: '',
          firstId: id,
          secondId: null,
        })
        this.setState(prev => ({cardsFlipCount: prev.cardsFlipCount + 1}))
      } else {
        this.onClickFlip(firstId)
        this.onClickFlip(secondId)
        this.setState({
          firstCard: name,
          secondCard: '',
          firstId: id,
          secondId: null,
        })
        this.setState(prev => ({cardsFlipCount: prev.cardsFlipCount + 1}))
      }
    }
  }

  renderCardFlipList = () => {
    const {cards} = this.state

    return (
      <ul className="card-flip-list-container">
        {cards.map(emoji => (
          <CardFlipCards
            emoji={emoji}
            key={emoji.id}
            onClickFlip={this.onClickFlip}
            onAddFirstCard={this.onAddFirstCard}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, cardsFlipCount} = this.state
    return (
      <div className="card-flip-game-container">
        <h1 className="card-flip-game-heading">Card-Flip Memory Game</h1>
        <div className="card-flip-game-body">
          <div className="card-flip-score-content">
            <p className="card-flip-para">cards Flip Count {cardsFlipCount}</p>
            <p className="card-flip-para">timer</p>
            <p className="card-flip-para">Score {score}</p>
          </div>
          {this.renderCardFlipList()}
          {/* /* {isGameOver ? this.renderScoreCard() : */}
        </div>
        <div className="emoji-rule-btn-container">
          <button type="button" className="emoji-rule-btn">
            Rules
          </button>
        </div>
      </div>
    )
  }
}

export default CardFlipGame
