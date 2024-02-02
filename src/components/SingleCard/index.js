import './singleCard.css'

const SingleCard = props => {
  const {cardDetails, handleChoice, flipped, disabled} = props
  const {name, image} = cardDetails

  const handleClick = () => {
    if (!disabled) {
      handleChoice(cardDetails)
    }
  }

  return (
    <li className="card">
      <div className={flipped ? 'flipped' : ''}>
        <button type="button" className="card-front">
          <img src={image} alt={name} className="front" />
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="card-back"
          data-testid={name}
        >
          <img
            src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1706005719/Group_7546card-front_1_z2aaxz.png"
            alt="card back"
            className="front"
          />
        </button>
      </div>
    </li>
  )
}

export default SingleCard
