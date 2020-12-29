import './App.css';
import React, {useState, useEffect} from "react"
import meme1 from './meme1.jpg';
import meme2 from './meme2.jpg';
import meme3 from './meme3.png';
import meme4 from './meme4.jpg';
import meme5 from './meme5.jpg';
import meme6 from './meme6.jpg';
import Pokemon from "./Components/Pokemon"

function App() {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
  }, [products])

  const handleSubmit = (event) => {
    setProducts([...products,event.target.product.value]);
    event.preventDefault();
    event.target.product.value = '';
  }

  console.log(products);
  
  return (
    <div className="App">
      <Pokemon />
      <br />
      Products:
      <ul>
        {products.map(item => {
          <li>{item}</li>
        })}
      </ul>
      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text" name="product" /> 
        <button type="submit"> Add To Cart </button>
      </form>
    </div>
  );
}

export default App;
