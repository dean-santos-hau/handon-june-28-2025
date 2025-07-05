import logo from './logo.svg';
//import Counter from './UseStateAndEventHandling';
import { useState } from "react";
import './App.css';


const smileyImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9boag3Af3UGu39_vWLJbbrG-OYBSAOlvw9w&s';
const sadImg = 'https://media.tenor.com/-iiMZcIHkE8AAAAe/sad-emoji.png';
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
  const [selectedAvatar, setSelectedAvatar] = useState(null); // <-- New state
  const [tiles, setTiles] = useState(generateGridImages());
  const [, setCurrentPlayer] = useState('smiley');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (tileId) => {
    if (gameOver || !selectedAvatar) return;

    const clickedTile = tiles.find(t => t.id === tileId);
    if (clickedTile.revealed) return;

    const playerImage = selectedAvatar === 'smiley' ? smileyImg : sadImg;
    const isCorrect = clickedTile.src === playerImage;

    const updatedTiles = tiles.map(tile =>
      tile.id === tileId ? { ...tile, revealed: true, clicked: true } : tile
    );
    setTiles(updatedTiles);

    if (!isCorrect) {
      setWinner(selectedAvatar === 'smiley' ? 'sad' : 'smiley');
      setGameOver(true);
      return;
    }
  };

  const resetGame = () => {
    setTiles(generateGridImages());
    setCurrentPlayer('smiley');
    setGameOver(false);
    setWinner(null);
    setSelectedAvatar(null); // <-- Reset avatar
  };

  if (!selectedAvatar) {
    return (
      <div className="container">
        <h2>Select Your Avatar to Start</h2>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
          <div onClick={() => setSelectedAvatar('smiley')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <img src={smileyImg} alt="Smiley" style={{ width: 80, height: 80 }} />
            <p>Smiley</p>
          </div>
          <div onClick={() => setSelectedAvatar('sad')} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <img src={sadImg} alt="Sad" style={{ width: 80, height: 80 }} />
            <p>Sad</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Mechanics</h2>
      <ol>
        <li>There are two players: Smiley and Sad</li>
        <li>Both players should agree to click the numbered tiles at the same time</li>
        <li>The first to finish clicking their avatar tiles correctly wins!</li>
        <li>If one player clicks wrong, the other wins automatically</li>
      </ol>
      
      {!gameOver && (
        <p className='turns'>🎮 Picked <strong>{selectedAvatar.toUpperCase()}</strong></p>
      )}
      {gameOver && (
        <div className="result">
          <h2>You lose! {winner?.toUpperCase()} wins!</h2>
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
                  objectFit: 'cover',
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