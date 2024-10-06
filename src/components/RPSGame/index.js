// import {RiCloseLine} from 'react-icons/ri'
// import Popup from 'reactjs-popup'
// import {Component} from 'react'
// import RPSGames from '../RPSGames'
// import RPSWinorLossorDraw from '../RPSWinorLossorDraw'
// import './index.css'

// const gameStatusConstants = {
//   inProgress: 'IN_PROGRESS',
//   win: 'YOU WON',
//   lost: 'YOU LOSE',
//   draw: 'IT IS DRAW',
// }

// class RPSGame extends Component {
//   state = {
//     score: 0,
//     gameStatus: gameStatusConstants.inProgress,
//     userChoice: '',
//     robotChoice: '',
//     displayResults: this.props.choicesList,
//     count: 0,
//   }

//   onClickSetUserChoice = val => {
//     const {choicesList} = this.props
//     const opponentChoiceIndex = Math.floor(Math.random() * 3)
//     const opponentChoice = choicesList[opponentChoiceIndex]

//     let userChoiceUrl = ''
//     if (val === 'paper') {
//       userChoiceUrl =
//         'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
//     } else if (val === 'rock') {
//       userChoiceUrl =
//         'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
//     } else {
//       userChoiceUrl =
//         'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
//     }
//     console.log(val)
//     console.log(opponentChoice.id)

//     this.setState({
//       userChoice: userChoiceUrl,
//       robotChoice: opponentChoice.imageUrl,
//     })

//     if (
//       (val === 'paper' && opponentChoice.id === 'rock') ||
//       (val === 'rock' && opponentChoice.id === 'scissors') ||
//       (val === 'scissors' && opponentChoice.id === 'paper')
//     ) {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         gameStatus: gameStatusConstants.win,
//       }))
//     } else if (val === opponentChoice.id) {
//       this.setState({
//         gameStatus: gameStatusConstants.draw,
//       })
//     } else {
//       this.setState(prevState => ({
//         count: prevState.count - 1,
//         gameStatus: gameStatusConstants.lost,
//       }))
//     }
//   }

//   renderGameInProgress = () => {
//     const {displayResults} = this.state
//     return (
//       <ul className="game-options-list">
//         {displayResults.map(eachOption => (
//           <RPSGames
//             key={eachOption.id}
//             optionDetails={eachOption}
//             onClickSetUserChoice={this.onClickSetUserChoice}
//           />
//         ))}
//       </ul>
//     )
//   }

//   playAgain = () => {
//     this.setState({
//       gameStatus: gameStatusConstants.inProgress,
//       userChoice: '',
//       robotChoice: '',
//     })
//   }

//   renderGameWon = () => {
//     const {userChoice, robotChoice, gameStatus} = this.state
//     return (
//       <div className="game-view-container">
//         <RPSWinorLossorDraw
//           userChoice={userChoice}
//           robotChoice={robotChoice}
//           gameStatus={gameStatus}
//           playAgain={this.playAgain}
//         />
//       </div>
//     )
//   }

//   renderGameLost = () => {
//     const {userChoice, robotChoice, gameStatus} = this.state
//     return (
//       <div className="game-view-container">
//         <RPSWinorLossorDraw
//           userChoice={userChoice}
//           robotChoice={robotChoice}
//           gameStatus={gameStatus}
//           playAgain={this.playAgain}
//         />
//       </div>
//     )
//   }

//   renderGameDraw = () => {
//     const {userChoice, robotChoice, gameStatus} = this.state
//     return (
//       <div className="game-view-container">
//         <RPSWinorLossorDraw
//           userChoice={userChoice}
//           robotChoice={robotChoice}
//           gameStatus={gameStatus}
//           playAgain={this.playAgain}
//         />
//       </div>
//     )
//   }

//   renderGame = () => {
//     const {gameStatus} = this.state
//     switch (gameStatus) {
//       case gameStatusConstants.inProgress:
//         return this.renderGameInProgress()
//       case gameStatusConstants.win:
//         return this.renderGameWon()
//       case gameStatusConstants.lost:
//         return this.renderGameLost()
//       case gameStatusConstants.draw:
//         return this.renderGameDraw()
//       default:
//         return null
//     }
//   }

//   render() {
//     const {count} = this.state
//     return (
//       <div className="rps-main-container">
//         <div className="header">
//           <div className="header-titles">
//             <h1 className="heading">Rock Paper Scissors</h1>
//           </div>
//           <div className="score-para">
//             <p>Score</p>
//             <p className="score">{count}</p>
//           </div>
//         </div>
//         <div className="game-view-container">{this.renderGame()}</div>
//         <div className="button-container">
//           <div className="popup-container">
//             <Popup
//               modal
//               trigger={
//                 <button className="rules-button" type="button">
//                   Rules
//                 </button>
//               }
//             >
//               {close => (
//                 <div>
//                   <button
//                     className="trigger-button"
//                     type="button"
//                     onClick={() => close()}
//                   >
//                     <RiCloseLine />
//                   </button>
//                   <div>
//                     <img
//                       className="rules-image"
//                       src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
//                       alt="rules"
//                     />
//                   </div>
//                 </div>
//               )}
//             </Popup>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default RPSGame


import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import RPSGames from '../RPSGames'
import RPSWinorLossorDraw from '../RPSWinorLossorDraw'
import './index.css'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RPSGame extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    robotChoice: '',
    displayResults: this.props.choicesList,
    count: 0,
    showModal: false,
  }

  onClickSetUserChoice = val => {
    const {choicesList} = this.props
    const opponentChoiceIndex = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[opponentChoiceIndex]

    let userChoiceUrl = ''
    if (val === 'paper') {
      userChoiceUrl =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    } else if (val === 'rock') {
      userChoiceUrl =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    } else {
      userChoiceUrl =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    }
    console.log(val)
    console.log(opponentChoice.id)

    this.setState({
      userChoice: userChoiceUrl,
      robotChoice: opponentChoice.imageUrl,
    })

    if (
      (val === 'paper' && opponentChoice.id === 'rock') ||
      (val === 'rock' && opponentChoice.id === 'scissors') ||
      (val === 'scissors' && opponentChoice.id === 'paper')
    ) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        gameStatus: gameStatusConstants.win,
      }))
    } else if (val === opponentChoice.id) {
      this.setState({
        gameStatus: gameStatusConstants.draw,
      })
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
        gameStatus: gameStatusConstants.lost,
      }))
    }
  }

  renderGameInProgress = () => {
    const {displayResults} = this.state
    return (
      <ul className="game-options-list">
        {displayResults.map(eachOption => (
          <RPSGames
            key={eachOption.id}
            optionDetails={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({
      gameStatus: gameStatusConstants.inProgress,
      userChoice: '',
      robotChoice: '',
    })
  }

  renderGameWon = () => {
    const {userChoice, robotChoice, gameStatus} = this.state
    return (
      <div className="game-view-container">
        <RPSWinorLossorDraw
          userChoice={userChoice}
          robotChoice={robotChoice}
          gameStatus={gameStatus}
          playAgain={this.playAgain}
        />
      </div>
    )
  }

  renderGameLost = () => {
    const {userChoice, robotChoice, gameStatus} = this.state
    return (
      <div className="game-view-container">
        <RPSWinorLossorDraw
          userChoice={userChoice}
          robotChoice={robotChoice}
          gameStatus={gameStatus}
          playAgain={this.playAgain}
        />
      </div>
    )
  }

  renderGameDraw = () => {
    const {userChoice, robotChoice, gameStatus} = this.state
    return (
      <div className="game-view-container">
        <RPSWinorLossorDraw
          userChoice={userChoice}
          robotChoice={robotChoice}
          gameStatus={gameStatus}
          playAgain={this.playAgain}
        />
      </div>
    )
  }

  renderGame = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgress()
      case gameStatusConstants.win:
        return this.renderGameWon()
      case gameStatusConstants.lost:
        return this.renderGameLost()
      case gameStatusConstants.draw:
        return this.renderGameDraw()
      default:
        return null
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    const {count, showModal} = this.state
    return (
      <div className="rps-main-container">
        <div className="header">
          <div className="header-titles">
            <h1 className="heading">Rock Paper Scissors</h1>
          </div>
          <div className="score-para">
            <p>Score</p>
            <p className="score">{count}</p>
          </div>
        </div>
        <div className="game-view-container">{this.renderGame()}</div>
        <div className="button-container">
          <button className="rules-button" type="button" onClick={this.toggleModal}>
            Rules
          </button>

          {/* Custom Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="rules-modal-content">
                <button
                  className="trigger-button"
                  type="button"
                  onClick={this.toggleModal}
                >
                  <RiCloseLine />
                </button>
                <div>
                  <img
                    className="rules-image"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RPSGame
