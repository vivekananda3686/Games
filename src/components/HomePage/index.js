// import {Link} from 'react-router-dom'
// import './index.css'

// const HomePage = () => (
//   <div className="bg-container">
//     <h1 className="main-heading">Games</h1>
//     <div className="main-container">
//       <div className="games-card-container">
//         <div className="each-game-card">
//           <Link to="/emojiGameRules">
//             <img
//               src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431250/Group_7471_jnfssp.png"
//               alt="emoji game"
//               className="game-image"
//             />
//             <h1>Emoji Game</h1>
//           </Link>
//         </div>
//         <div className="each-game-card">
//           <Link to="/memoryMatrixGame">
//             <img
//               src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431317/memory_qwfar4.png"
//               alt="memory matrix game"
//               className="game-image"
//             />
//             <h1>Memory Matrix</h1>
//           </Link>
//         </div>
//       </div>
//       <div className="games-card-container">
//         <div className="each-game-card">
//           <Link to="/rockPaperScissorGame">
//             <img
//               src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431386/Group_7469_ssmoyz.png"
//               alt="rock paper scissor"
//               className="game-image"
//             />
//             <h1>Rock Paper Scissor</h1>
//           </Link>
//         </div>
//         <div className="each-game-card">
//           <Link to="/cardFlipGame">
//             <img
//               src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431457/animals_1_kkgt7w.png"
//               alt="card flip"
//               className="game-image"
//             />
//             <h1>Card Flip Memory</h1>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// export default HomePage

import {Link} from 'react-router-dom'
import './index.css'

const HomePage = () => (
  <div className="custom-bg-container">
    <h1 className="custom-main-heading">Games</h1>
    <div className="custom-main-container">
      <div className="custom-games-card-container">
        <div className="custom-each-game-card">
          <Link to="/emojiGameRules">
            <img
              src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431250/Group_7471_jnfssp.png"
              alt="emoji game"
              className="custom-game-image"
            />
            <h1>Emoji Game</h1>
          </Link>
        </div>
        <div className="custom-each-game-card">
          <Link to="/memory-matrix">
            <img
              src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431317/memory_qwfar4.png"
              alt="memory matrix game"
              className="custom-game-image"
            />
            <h1>Memory Matrix</h1>
          </Link>
        </div>
      </div>
      <div className="custom-games-card-container">
        <div className="custom-each-game-card">
          <Link to="/rockPaperScissorGame">
            <img
              src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431386/Group_7469_ssmoyz.png"
              alt="rock paper scissor"
              className="custom-game-image"
            />
            <h1>Rock Paper Scissor</h1>
          </Link>
        </div>
        <div className="custom-each-game-card">
          <Link to="/card-flip-memory-game">
            <img
              src="https://res.cloudinary.com/dsj4vmo9z/image/upload/v1724431457/animals_1_kkgt7w.png"
              alt="card flip"
              className="custom-game-image"
            />
            <h1>Card Flip Memory</h1>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage
