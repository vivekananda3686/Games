// import {Link} from 'react-router-dom'
// import Popup from 'reactjs-popup'
// import {RiCloseLine} from 'react-icons/ri'
// import {Component} from 'react'
// import {FaArrowLeft} from 'react-icons/fa'
// import Navbar from '../EmojiGameNavbar'
// import Emojicard from '../EmojiCard'
// import './index.css'

// class EmojiGamePlay extends Component {
//   state = {
//     prevImage: -1,
//     score: 0,
//     topScore: 0,
//     win: false,
//     lose: false,
//     emojisList: this.props.emojisList,
//   }

//   shuffledEmojisList = () => {
//     const {emojisList} = this.props
//     return emojisList.sort(() => Math.random() - 0.5)
//   }

//   emojiscoreupdates = val => {
//     const {prevImage, score} = this.state
//     console.log(prevImage, val)
//     if (prevImage !== val) {
//       this.setState(prevState => ({
//         score: prevState.score + 1,
//         emojisList: this.shuffledEmojisList(),
//         prevImage: val,
//       }))
//     } else {
//       this.setState({
//         lose: true,
//         emojisList: this.shuffledEmojisList(),
//       })
//     }
//   }

//   resetGame = () => {
//     const {score, topScore} = this.state
//     if (score > topScore) {
//       this.setState({
//         topScore: score,
//       })
//     }
//     this.setState({
//       prevImage: -1,
//       score: 0,
//       win: false,
//       lose: false,
//       emojisList: this.shuffledEmojisList(),
//     })
//   }

//   displayAcCondi = () => {
//     const {win, lose, score} = this.state
//     if (win === true || score === 12) {
//       return (
//         <div className="win-card">
//           <div className="winning">
//             <div>
//               <h1 className="won-heading">You Won</h1>
//               <p className="won-heading">
//                 Best Score <br />
//                 {score}/12
//               </p>
//               <button onClick={this.resetGame} className="playAgain">
//                 Play Again
//               </button>
//             </div>
//             <div>
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
//                 alt="win or lose"
//               />
//             </div>
//           </div>
//         </div>
//       )
//     }
//     if (lose === true) {
//       return (
//         <div className="win-card">
//           <div className="winning">
//             <div>
//               <h1 className="won-heading">You Lose</h1>
//               <p className="won-heading">
//                 Best Score <br />
//                 <span className="span">{score}/12</span>
//               </p>
//               <button onClick={this.resetGame} className="playAgain">
//                 Play Again
//               </button>
//             </div>
//             <div>
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
//                 alt="win or lose"
//               />
//             </div>
//           </div>
//         </div>
//       )
//     }
//     const {emojisList} = this.state
//     return (
//       <ul className="emojis-list-class-1">
//         {emojisList.map(each => (
//           <Emojicard
//             list={each}
//             key={each.id}
//             emojiscoreupdates={this.emojiscoreupdates}
//           />
//         ))}
//       </ul>
//     )
//   }

//   render() {
//     const {score, topScore} = this.state
//     return (
//       <div className="main-container">
//         <Navbar score={score} topScore={topScore} />
//         <div className="rules-container">
//           <Link to="/emojiGameRules">
//             <div className="back-arrow">
//               <FaArrowLeft />
//               <p>Back</p>
//             </div>
//           </Link>
//           <div className="popup-container">
//             <Popup
//               modal
//               trigger={
//                 <button type="button" className="trigger-button">
//                   RULES
//                 </button>
//               }
//             >
//               {close => (
//                 <div className="emoji-rules-container">
//                   <button
//                     type="button"
//                     className="emoji-cross-icon"
//                     onClick={() => close()}
//                   >
//                     <RiCloseLine />
//                     {/* */}
//                   </button>
//                   <p className="emoji-rules-heading-popup">Rules</p>
//                   <ul className="emoji-rules-list-popup">
//                     <li className="emoji-rule-item-popup">
//                       User should be able to see the list of Emojis
//                     </li>
//                     <li className="emoji-rule-item-popup">
//                       When the user clicks any one of the Emoji for the first
//                       time, then the count of the score should be incremented by
//                       1 and the List of emoji cards should be shuffled.
//                     </li>
//                     <li className="emoji-rule-item-popup">
//                       This process should be repeated every time the user clicks
//                       on an emoji card
//                     </li>
//                     <li className="emoji-rule-item-popup">
//                       When the user clicks on all Emoji cards without clicking
//                       any of it twice, then the user will win the game
//                     </li>
//                     <li className="emoji-rule-item-popup">
//                       When the user clicks on the same Emoji for the second
//                       time, then the user will lose the game.
//                     </li>
//                     <li className="emoji-rule-item-popup">
//                       Once the game is over, the user will be redirected to the
//                       results page.
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </Popup>
//           </div>
//         </div>
//         <div>{this.displayAcCondi()}</div>
//       </div>
//     )
//   }
// }

// export default EmojiGamePlay

import {Link} from 'react-router-dom'
import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import Navbar from '../EmojiGameNavbar'
import Emojicard from '../EmojiCard'
import './index.css'

class EmojiGamePlay extends Component {
  state = {
    prevImage: -1,
    score: 0,
    topScore: 0,
    win: false,
    lose: false,
    emojisList: this.props.emojisList,
    showModal: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiscoreupdates = val => {
    const {prevImage, score} = this.state
    console.log(prevImage, val)
    if (prevImage !== val) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojisList: this.shuffledEmojisList(),
        prevImage: val,
      }))
    } else {
      this.setState({
        lose: true,
        emojisList: this.shuffledEmojisList(),
      })
    }
  }

  resetGame = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        topScore: score,
      })
    }
    this.setState({
      prevImage: -1,
      score: 0,
      win: false,
      lose: false,
      emojisList: this.shuffledEmojisList(),
    })
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  displayAcCondi = () => {
    const {win, lose, score} = this.state
    if (win === true || score === 12) {
      return (
        <div className="win-card">
          <div className="winning">
            <div>
              <h1 className="won-heading">You Won</h1>
              <p className="won-heading">
                Best Score <br />
                {score}/12
              </p>
              <button onClick={this.resetGame} className="playAgain">
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      )
    }
    if (lose === true) {
      return (
        <div className="win-card">
          <div className="winning">
            <div>
              <h1 className="won-heading">You Lose</h1>
              <p className="won-heading">
                Best Score <br />
                <span className="span">{score}/12</span>
              </p>
              <button onClick={this.resetGame} className="playAgain">
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      )
    }
    const {emojisList} = this.state
    return (
      <ul className="emojis-list-class-1">
        {emojisList.map(each => (
          <Emojicard
            list={each}
            key={each.id}
            emojiscoreupdates={this.emojiscoreupdates}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, showModal} = this.state
    return (
      <div className="main-container">
        <Navbar score={score} topScore={topScore} />
        <div className="rules-container">
          <Link to="/emojiGameRules">
            <div className="back-arrow">
              <FaArrowLeft />
              <p>Back</p>
            </div>
          </Link>
          <div className="popup-container">
            <button type="button" className="trigger-button" onClick={this.toggleModal}>
              RULES
            </button>
          </div>

          {/* Custom Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="emoji-rules-container">
                <button
                  type="button"
                  className="emoji-cross-icon"
                  onClick={this.toggleModal}
                >
                  <RiCloseLine />
                </button>
                <p className="emoji-rules-heading-popup">Rules</p>
                <ul className="emoji-rules-list-popup">
                  <li className="emoji-rule-item-popup">
                    User should be able to see the list of Emojis
                  </li>
                  <li className="emoji-rule-item-popup">
                    When the user clicks any one of the Emoji for the first time, 
                    the score should increment by 1 and the emoji list should shuffle.
                  </li>
                  <li className="emoji-rule-item-popup">
                    Repeat this each time a user clicks an emoji card.
                  </li>
                  <li className="emoji-rule-item-popup">
                    If a user clicks all emoji cards without clicking any twice, 
                    they win the game.
                  </li>
                  <li className="emoji-rule-item-popup">
                    If a user clicks the same emoji twice, they lose the game.
                  </li>
                  <li className="emoji-rule-item-popup">
                    Once the game ends, they will see the results page.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div>{this.displayAcCondi()}</div>
      </div>
    )
  }
}

export default EmojiGamePlay

