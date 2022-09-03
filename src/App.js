import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Conditional from './Compnents/Conditionaldata/Conditional';

function App() {
  const [info, setInfo] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Click the button blow</h2>
        <button onClick={()=>setInfo(!info)}>Change</button>
        {/* {console.log(info)} */}
        {
          <Conditional info={info}></Conditional>
        }
      </header>
    </div>
  );
}

export default App;
