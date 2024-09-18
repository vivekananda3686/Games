import './index.css'

const Navbar = props => {
  const {score, topScore} = props

  const authDisplay = () => {
    if (score !== 12) {
      return (
        <div className="nav-para">
          <div className="nav-image">
            <div className="scores-container">
              <p>
                Score: <span className="score">{score}</span>
              </p>
            </div>
            <div>
              <p>
                Top Score: <span className="top-score">{topScore}</span>
              </p>
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="navbar">
      <div className="nav-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {authDisplay()}
    </div>
  )
}

export default Navbar
