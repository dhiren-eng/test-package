import logo from './logo.svg';
import './App.css';
import {useState, lazy, Suspense} from 'react'
import Text from './Text.js'
import {hi} from 'check-two'
console.log(hi)

function App() {
  const [state, setState] = useState(false)
  return (
    <div className="App">
      <button onClick={() => {console.log(Text(2, 3))}} >Click</button>
    </div>
  );
}

export default App;
