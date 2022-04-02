import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Oi { count } </h1>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
}

export default App;
