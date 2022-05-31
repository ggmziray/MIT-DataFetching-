import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(Response => {
      console.log(Response.data.content);
      setQuote(Response.data.content)
    }).catch(Error => {
      console.log(Error);
    })
  }
  return (
    <div className="App"> 
    <button className="btn" onClick={getQuote}>Get Quote</button>
    { quote && <p>{quote}</p>}
    </div>
  );
}

export default App;
