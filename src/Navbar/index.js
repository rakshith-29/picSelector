import './index.css'

const Navbar = props => {
  const {score, seconds} = props

  return (
    <nav className="nav-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo-image"
      />
      <div className="score-timer-container">
        <p className="top-text">
          {' '}
          Score: <span className="score-digit"> {score} </span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />

          <p className="top-text">
            <span className="score-digit">{seconds} </span> sec
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
