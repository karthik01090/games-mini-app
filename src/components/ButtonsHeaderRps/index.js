import {Component} from 'react'

import Modal from 'react-modal'

import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'

import {withRouter} from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

class ButtonsHeaderRps extends Component {
  state = {
    modalIsOpen: false,
  }

  onClickBackButton = () => {
    const {history} = this.props
    history.replace('/')
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    const {modalIsOpen} = this.state
    return (
      <div className="buttons-container">
        <button
          type="button"
          onClick={this.onClickBackButton}
          className="back-button"
        >
          <BiArrowBack className="arrow-back" />
          Back
        </button>
        <div className="popup-container">
          <button
            onClick={this.openModal}
            type="button"
            className="trigger-button"
          >
            Rules
          </button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="popup-container">
              <button
                onClick={this.closeModal}
                type="button"
                className="popup-close-button"
                data-testid="close"
              >
                <CgClose size={20} />
              </button>
              <div className="popup-card-container">
                <h1 className="popup-heading">Rules</h1>
                <ul>
                  <li className="popup-list-item">
                    The game result should be based on user and user opponent
                    choices
                  </li>
                  <li className="popup-list-item">
                    When the user choice is rock and his opponent choice is rock
                    then the result will be IT IS DRAW
                  </li>
                  <li className="popup-list-item">
                    When the user choice is paper and his opponent choice is
                    rock then the result will be YOU WON
                  </li>
                  <li className="popup-list-item">
                    When the user choice is a scissor and his opponent choice is
                    rock then the result will be YOU LOSE
                  </li>
                  <li className="popup-list-item">
                    When the user choice is paper and his opponent choice is
                    paper then the result will be IT IS DRAW
                  </li>
                  <li className="popup-list-item">
                    When the user choice is scissors and his opponent choice is
                    paper then the result will be YOU WON
                  </li>
                  <li className="popup-list-item">
                    TWhen the user choice is rock and his opponent choice is
                    scissors then the result will be YOU WON
                  </li>
                  <li className="popup-list-item">
                    When the user choice is paper and his opponent choice is
                    scissors then the result will be YOU LOSE
                  </li>
                  <li className="popup-list-item">
                    When the user choice is scissors and his opponent choice is
                    scissors then the result will be IT IS DRAW
                  </li>
                  <li className="popup-list-item">
                    When the result is YOU WON, then the count of the score
                    should be incremented by 1
                  </li>
                  <li className="popup-list-item">
                    When the result is IT IS DRAW, then the count of the score
                    should be the same
                  </li>
                  <li className="popup-list-item">
                    When the result is YOU LOSE, then the count of the score
                    should be decremented by 1.
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default withRouter(ButtonsHeaderRps)
