import {useState, useEffect} from 'react'

import SingleCard from '../SingleCard'
import CardFlipButtons from '../CardFlipButtons'

import './index.css'

const cardsData = [
  {
    name: 'tiger',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    matched: false,
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

const CardFlipCards = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [score, setScore] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [isGameCompleted, setIsGameCompleted] = useState(false)
  const initialSeconds = 120
  const [timer, setTimer] = useState({
    minutes: Math.floor(initialSeconds / 60),
    seconds: initialSeconds % 60,
  })

  const cardFlipCount = turns < 10 ? `0${turns}` : turns
  const minutes = `0${timer.minutes}`
  const seconds = timer.seconds > 9 ? timer.seconds : `0${timer.seconds}`

  // Run the timer

  const shuffleCards = () => {
    const shuffledCards = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const onStartPlayingCardFlipGameAgain = () => {
    setIsGameCompleted(false)
    shuffleCards()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if ((timer.minutes === 0 && timer.seconds === 0) || score >= 10) {
        setIsGameCompleted(true)
        clearInterval(interval)
      } else {
        setTimer(prevTime => {
          if (prevTime.seconds > 0) {
            return {...prevTime, seconds: prevTime.seconds - 1}
          }
          return {minutes: prevTime.minutes - 1, seconds: 59}
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  // reset choices and increase turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  //   handle a choice
  const handleChoice = card => {
    if (choiceOne) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }
  }

  // compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.name === choiceTwo.name) {
        setCards(prevCards =>
          prevCards.map(card => {
            if (card.name === choiceOne.name) {
              return {...card, matched: true}
            }
            return card
          }),
        )
        setScore(prevScore => prevScore + 1)
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 2000)
      }
    }
  }, [choiceOne, choiceTwo])

  const GamePlayingView = () => (
    <div className="card-flip-game-bg-container">
      <div className="card-flip-game">
        <CardFlipButtons />
        <h1 className="heading">Card-Flip Memory Game</h1>
        <p>
          {minutes}:{seconds}
        </p>
        <div className="card-and-flip-count-container">
          <div className="flips-count">
            <p>Card flip count - {cardFlipCount}</p>
            <p>Score - {score}</p>
          </div>
          <div className="card-flip-list-container" testid="cardsData">
            <ul className="card-grid" testid="cardsData">
              {cards.map(eachCard => (
                <SingleCard
                  cardDetails={eachCard}
                  id={eachCard.id}
                  handleChoice={handleChoice}
                  flipped={
                    eachCard === choiceOne ||
                    eachCard === choiceTwo ||
                    eachCard.matched
                  }
                  disabled={disabled}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const gameFinishedView = () => {
    const resultText =
      score >= 10 ? 'Congratulations' : 'Better luck next time!'

    const resultDescription =
      score >= 10
        ? 'You have reached the score in time.'
        : 'You have not reached the score in time.'

    const imageAltText =
      score >= 10 ? 'grinning face with big eyes' : 'neutral face'

    return (
      <div className="game-finished-view-container">
        <div className="result-container">
          <img
            src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1706870419/fxza2rwd0ynnfcgmfakl.jpg"
            alt={imageAltText}
          />
          <h1>{resultText}</h1>
          <h1>{resultDescription}</h1>
          <button type="button" onClick={onStartPlayingCardFlipGameAgain}>
            Play Again
          </button>
        </div>
      </div>
    )
  }

  return isGameCompleted ? gameFinishedView() : GamePlayingView()
}

export default CardFlipCards
