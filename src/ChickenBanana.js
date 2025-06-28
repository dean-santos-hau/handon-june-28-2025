import { useState } from "react";
import './App.css';

const imageUrls = [
  'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768',
  'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-happy-smile-emoji-png-png-image_11596423.png',
  'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768',
  'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-happy-smile-emoji-png-png-image_11596423.png',
  'https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg?w=768',
  'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-happy-smile-emoji-png-png-image_11596423.png',

];

function getRandomImage() {
  const index = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[index];
}

function ChickenBanana() {
  const [images, setImages] = useState(Array(4).fill().map(getRandomImage));

  const handleClick = () => {
    setImages(images.map(() => getRandomImage()));
  };

  return (
    <div className="container">
      <h1> Chicken Banana Game!</h1>
      <div className="grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Random"
            className="square"
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
export default ChickenBanana;