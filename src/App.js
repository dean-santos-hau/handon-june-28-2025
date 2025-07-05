import logo from './logo.svg';
//import Counter from './UseStateAndEventHandling';
import { useState } from "react";
import './App.css';

const smileyImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9boag3Af3UGu39_vWLJbbrG-OYBSAOlvw9w&s'
const sadImg = 'https://media.tenor.com/-iiMZcIHkE8AAAAe/sad-emoji.png'
const NUM_TILES = 36;

function generateGridImages() {
  const half = NUM_TILES / 2;
  const images = Array(half).fill(smileyImg).concat(Array(half).fill(sadImg));

  // Shuffle images randomly
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return images.map((src, index) => ({
    id: index,
    number: index + 1,
    src,
    clicked: false,
    revealed: false,
  }));
}

function App() {
  const [tiles, setTiles] = useState(generateGridImages());
  const [currentPlayer, setCurrentPlayer] = useState('smiley');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (tileId) => {
    if (gameOver) return;

    const clickedTile = tiles.find(t => t.id === tileId);
    if (clickedTile.revealed) return;

    const playerImage = currentPlayer === 'smiley' ? smileyImg : sadImg;
    const isCorrect = clickedTile.src === playerImage;

    // Update tiles
    const updatedTiles = tiles.map(tile =>
      tile.id === tileId ? { ...tile, revealed: true, clicked: true } : tile
    );
    setTiles(updatedTiles);

    if (!isCorrect) {
      setWinner(currentPlayer === 'smiley' ? 'sad' : 'smiley');
      setGameOver(true);
      return;
    }

    // Check for win condition
    const remaining = updatedTiles.filter(tile => tile.src === playerImage && !tile.clicked);
    if (remaining.length === 0) {
      setWinner(currentPlayer);
      setGameOver(true);
      return;
    }

    // Switch player turn
    setCurrentPlayer(currentPlayer === 'smiley' ? 'sad' : 'smiley');
  };

  const resetGame = () => {
    setTiles(generateGridImages());
    setCurrentPlayer('smiley');
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="container">
      <h2>Mechanics</h2>
      <ol>
        <li>There are two players, smiley face player and sad player</li> 
        <li>Both players should agree they click the numbered tiles at the same time</li> 
        <li>The player who first finish clicking the tiles with his/her choice (Smiley/Sad) without mistake wins!</li> 
        <li>But in the event that one of the player committed a mistake then we declare the other player that is consistent wins!</li> 
      </ol>
      <h3>Player 1: Smiley &nbsp;&nbsp;|&nbsp;&nbsp; Player 2: Sad</h3>
      {!gameOver && (
        <p className='turns'>🎮 <strong>{currentPlayer.toUpperCase()}</strong>'s turn</p>
      )}
      {gameOver && (
        <div className="result">
          <h2>🏆 {winner.toUpperCase()} wins the game!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      <div className="grid">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="tile"
            onClick={() => handleClick(tile.id)}
            style={{
              color: 'rgb(9, 46, 255)',
              width: '70px',
              height: '70px',
              border: 'none',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
          {tile.revealed ? (
              <img
                src={tile.src}
                alt="tile"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' ,
                  border: 'none',
                  borderRadius: '10px',
                }}
              />
            ) : (
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{tile.number}</span>
          )}
          </div>
        ))}
      </div>
      
    </div>
  );
}
export default App;
//function Welcome(props) {
//  return <h2>Welcome, {props.name}!</h2>
//}

//function App() {
//  return (
//    <div>
//      <Counter />
//    </div>
//  );
//}
// function App() {
//   return (
//     <div className="App">
//       
//       <Welcome name='Algo'></Welcome>
//       <Welcome name='Rena'></Welcome>
//       <Welcome name='Logistx'></Welcome>
//       */
//     </div>
//   );
// }

//export default App;