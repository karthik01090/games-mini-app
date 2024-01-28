import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import './memoryMatrixGame.css'

class MemoryMatrixGame extends Component {
  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="rules-page-bg-container">
        <div className="rules-page-container">
          <button
            type="button"
            onClick={this.onClickBackButton}
            className="back-button"
          >
            <BiArrowBack />
            Back
          </button>
          <div className="image-container">
            <h1 className="game-heading">Memory Matrix</h1>
            <img
              src="https://res.cloudinary.com/dqbiyti1d/image/upload/v1704346396/slvjhz7sxqxg1bkuipgz.png"
              alt="memory matrix"
              className="memory-matrix-image"
            />
          </div>
          <div className="rules-container-mmg">
            <h1 className="rules-heading">Rules</h1>
            <ul className="rules-list-container-mmg">
              <div>
                <li className="rule-item">
                  In each level of the Game, Users should be able to see the
                  Grid with (N X N) size starting from 3 and the grid will
                  highlight N cells in Blue, the N highlighted cells will be
                  picked randomly.
                </li>
                <li className="rule-item">
                  The highlighted cells will remain N seconds for the user to
                  memorize the cells. At this point, the user should not be able
                  to perform any action.
                </li>
                <li className="rule-item">
                  After N seconds, the grid will clear the N highlighted cells.
                </li>
              </div>
              <div>
                <li className="rule-item">
                  At N seconds, the user can click on any cell. Clicking on a
                  cell that was highlighted before it will turn blue. Clicking
                  on the other cells that were not highlighted before then will
                  turn to red.
                </li>
                <li className="rule-item">
                  The user should be promoted to the next level if they guess
                  all N cells correctly in one attempt.
                </li>
                <li className="rule-item">
                  The user should be taken to the results page if the user
                  clicks on the wrong cell.
                </li>
                <li className="rule-item">
                  If the user completed all the levels, then the user should be
                  taken to the results page.
                </li>
              </div>
            </ul>
          </div>
          <button type="button" className="start-playing-btn">
            Start Playing
          </button>
        </div>
      </div>
    )
  }
}

export default MemoryMatrixGame
