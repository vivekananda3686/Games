import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import './index.css'

const EmojiGameRules = () => (
  <div className="rules-bg-container">
    <Link to="/">
      <div className="rules-back-arrow">
        <FaArrowLeft />
        <p>Back</p>
      </div>
    </Link>
    <div className="rules-main-container">
      <div className="rules-image-style">
        <img
          src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431250/Group_7471_jnfssp.png"
          alt="emoji game"
        />
      </div>
      <div>
        <h1 className="rules-heading">Rules</h1>
        <ul className="rules-list">
          <li className="rules-list-item">
            User should be able to see the list of Emojis
          </li>
          <li className="rules-list-item">
            When the user clicks any one of the Emoji for the first time, then
            the count of the score should be incremented by 1 and the List of
            emoji cards should be shuffled.
          </li>
          <li className="rules-list-item">
            This process should be repeated every time the user clicks on an
            emoji card
          </li>
          <li className="rules-list-item">
            When the user clicks on all Emoji cards without clicking any of it
            twice, then the user will win the game
          </li>
          <li className="rules-list-item">
            When the user clicks on the same Emoji for the second time, then the
            user will lose the game.
          </li>
          <li className="rules-list-item">
            Once the game is over, the user will be redirected to the results
            page.
          </li>
        </ul>
        <Link to="/emojiGame">
          <button type="button" className="rules-start-button">
            Start Playing
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default EmojiGameRules
