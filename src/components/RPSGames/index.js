import React from 'react'
import './index.css'

const RPSGames = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {id, imageUrl, name} = optionDetails

  const onClickUserChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <div className="games-main-container">
      <div className="game-item-name">
        <button
          onClick={onClickUserChoice}
          className="game-button"
          data-testid={name}
        >
          <img src={imageUrl} alt={id} className="game-image" />
        </button>
      </div>
    </div>
  )
}

export default RPSGames
