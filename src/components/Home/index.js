import {Link} from 'react-router-dom'

import './home.css'

const Home = () => (
  <div className="home-page-bg-container">
    <div className="games-container">
      <h1 className="games-heading">Games</h1>
      <ul className="games-list-container">
        <Link to="/emoji-game" className="link-item">
          <li className="game-item">
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346399/nkppr3kcvpgr53zraf0b.png"
              alt="emoji game"
              className="emoji-image"
            />
          </li>
        </Link>
        <Link to="/memory-matrix" className="link-item">
          <li className="game-item">
            <h1 className="memory-matrix-heading">Memory Matrix</h1>
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346396/slvjhz7sxqxg1bkuipgz.png"
              alt="memory matrix"
              className="memory-matrix-image-home"
            />
          </li>
        </Link>
        <Link to="/rock-paper-scissor" className="link-item">
          <li className="game-item">
            <h1 className="memory-matrix-heading">Rock Paper Scissor</h1>
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346397/kcjxurkdx1loidzeiz9c.png"
              alt="rock paper scissor"
              className="rock-paper-scissor-image"
            />
          </li>
        </Link>
        <Link to="/card-flip-memory-game" className="link-item">
          <li className="game-item">
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
              alt="card flip memory game"
              className="card-flip-memory-image-home"
            />
          </li>
        </Link>
      </ul>
    </div>
  </div>
)

export default Home
