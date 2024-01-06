import {Link} from 'react-router-dom'

import './index.css'

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
            <p className="memory-matrix-heading">Memory Matrix</p>
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346396/slvjhz7sxqxg1bkuipgz.png"
              alt="card flip"
              className="memory-matrix-image"
            />
          </li>
        </Link>
        <Link to="/rock-paper-scissor" className="link-item">
          <li className="game-item">
            <p className="memory-matrix-heading">Rock Paper Scissor</p>
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346397/kcjxurkdx1loidzeiz9c.png"
              alt="emoji game"
              className="rock-paper-scissor-image"
            />
          </li>
        </Link>
        <Link to="/card-flip-memory-game" className="link-item">
          <li className="game-item">
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
              alt="emoji game"
              className="card-flip-game-image"
            />
          </li>
        </Link>
      </ul>
    </div>
  </div>
)

export default Home
