import {Link} from 'react-router-dom'

import {
  HomePageBgContainer,
  GamesContainer,
  GamesHeading,
  GamesListContainer,
  GameItem,
  EmojiImage,
  MemoryMatrixImage,
  MemoryMatrixHeading,
  RockPaperScissorImage,
  CardFlipGameImage,
  LinkItem,
} from './HomeStyles'

const Home = () => (
  <HomePageBgContainer>
    <GamesContainer>
      <GamesHeading>Games</GamesHeading>
      <GamesListContainer>
        <Link to="/emoji-game" className={LinkItem}>
          <GameItem>
            <EmojiImage
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346399/nkppr3kcvpgr53zraf0b.png"
              alt="emoji game"
            />
          </GameItem>
        </Link>
        <Link to="/memory-matrix" className={LinkItem}>
          <GameItem>
            <MemoryMatrixHeading>Memory Matrix</MemoryMatrixHeading>
            <MemoryMatrixImage
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346396/slvjhz7sxqxg1bkuipgz.png"
              alt="memory matrix"
            />
          </GameItem>
        </Link>
        <Link to="/rock-paper-scissor" className={LinkItem}>
          <GameItem>
            <MemoryMatrixHeading>Rock Paper Scissor</MemoryMatrixHeading>
            <RockPaperScissorImage
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346397/kcjxurkdx1loidzeiz9c.png"
              alt="rock paper scissor"
            />
          </GameItem>
        </Link>
        <Link to="/card-flip-memory-game" className={LinkItem}>
          <GameItem>
            <CardFlipGameImage
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346398/vx8katwdus8krcwo92ki.png"
              alt="card flip memory game"
            />
          </GameItem>
        </Link>
      </GamesListContainer>
    </GamesContainer>
  </HomePageBgContainer>
)

export default Home
