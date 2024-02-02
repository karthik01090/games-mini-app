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

class CardFlipButtons extends Component {
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
                    When the game is started, the users should be able to see
                    the list of Cards that are shuffled and turned face down.
                  </li>
                  <li className="popup-list-item">
                    When a user starts the game, the user should be able to see
                    the Timer running.
                  </li>
                  <li className="popup-list-item">
                    The Timer starts from 2 Minutes.
                  </li>
                  <li className="popup-list-item">
                    If the two cards have the same image, they remain face up.
                    If not, they should be flipped face down again after a short
                    2 seconds.
                  </li>
                  <li className="popup-list-item">
                    Users should be able to compare only two cards at a time.
                  </li>
                  <li className="popup-list-item">
                    When the user is not able to find all the cards before the
                    timer ends then the game should end and redirect to the Time
                    Up Page.
                  </li>
                  <li className="popup-list-item">
                    If the user finds all the matching cards before the timer
                    ends, then the user should be redirected to the results
                    page.
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

export default withRouter(CardFlipButtons)
