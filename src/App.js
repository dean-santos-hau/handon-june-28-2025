import logo from './logo.svg';
//import Counter from './UseStateAndEventHandling';
//import ChickenBanana from './ChickenBanana';
import { useState } from "react";
import './App.css';

const smileyImg = 'https://i.pinimg.com/736x/cb/3e/01/cb3e014d6122af3b43933bb571859ae7.jpg'
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
  
  return (
    <div className="container">
      <div className="grid">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="tile"
            style={{
              width: '100px',
              height: '70px',
              border: '2px solid #000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ccc',
            }}
          >
          {tile.revealed ? (
              <img
                src={tile.src}
                alt="tile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{tile.number}</span>
          )}
          </div>
        ))}
      </div>
    </div>
    /*
    <div className='grid'>
      {Array.from({ length: 36 }).map((_, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <img
            src={randImg()} // Generate random image for each div
            alt="Random"
            style={{ width: '100px', height: '100px', objectFit: 'cover', border: '2px solid #000000'}}
            onClick={() => handleClick(`Image ${index + 1}`)} // Optionally pass data on click
          />
        </div>
      ))}
    </div>
  */
  );
}
export default App;
//function Welcome(props) {
//  return <h2>Welcome, {props.name}!</h2>
//}

//function App() {
//  return (
//    <div>
//      <ChickenBanana />
//    </div>
//  );
//}
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//       <Welcome name='Algo'></Welcome>
//       <Welcome name='Rena'></Welcome>
//       <Welcome name='Logistx'></Welcome>
//       */
//     </div>
//   );
// }

//export default App;
