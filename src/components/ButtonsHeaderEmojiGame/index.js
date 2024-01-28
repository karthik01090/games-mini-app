import {Component} from 'react'

import Modal from 'react-modal'

import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'

import {withRouter} from 'react-router-dom'

import './index.css'

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
                    User should be able to see the list of Emojis
                  </li>
                  <li className="popup-list-item">
                    When the user clicks any one of the Emoji for the first
                    time, then the count of the score should be incremented by 1
                    and the List of emoji cards should be shuffled.
                  </li>
                  <li className="popup-list-item">
                    This process should be repeated every time the user clicks
                    on an emoji card
                  </li>
                  <li className="popup-list-item">
                    When the user clicks on all Emoji cards without clicking any
                    of it twice, then the user will win the game
                  </li>
                  <li className="popup-list-item">
                    When the user clicks on the same Emoji for the second time,
                    then the user will lose the game.
                  </li>
                  <li className="popup-list-item">
                    Once the game is over, the user will be redirected to the
                    results page.
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
