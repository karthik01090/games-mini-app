import './singleCard.css'

const SingleCard = props => {
  const {cardDetails, handleChoice} = props
  const {name, image} = cardDetails

  const handleClick = () => {
    handleChoice(cardDetails)
  }

  return (
    <div className="card">
      <div className="cards-container">
        <img src={image} alt={name} className="card-front" />
        <img
          src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1706005719/Group_7546card-front_1_z2aaxz.png"
          alt="card back"
          className="card-front"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default SingleCard
