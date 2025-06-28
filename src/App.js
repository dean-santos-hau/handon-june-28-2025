import logo from './logo.svg';
//import Counter from './UseStateAndEventHandling';
import ChickenBanana from './ChickenBanana';
import { useState } from "react";
import './App.css';

const smileyImg = 'https://i.pinimg.com/736x/cb/3e/01/cb3e014d6122af3b43933bb571859ae7.jpg'
const sadImg = 'https://media.tenor.com/-iiMZcIHkE8AAAAe/sad-emoji.png'

function getRandomImage() {
  const index = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[index];
}


function App() {
  const [images, setImages] = useState(Array(4).fill().map(getRandomImage));

  const handleClick = () => {
    setImages(images.map(() => getRandomImage()));
  };

  const randImg = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  
  return (
    <div>

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
