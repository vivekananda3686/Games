import React from 'react'
import './index.css'

const RPSGames = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {id, imageUrl, name} = optionDetails

  const onClickUserChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <div>
      <div className="game-item-name">
        <button
          className="game-button"
          onClick={onClickUserChoice}
          data-testid={name}
        >
          <img className="game-image" src={imageUrl} alt={id} />
        </button>
      </div>
    </div>
  )
}

export default RPSGames
