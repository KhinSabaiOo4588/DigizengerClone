//-component need to be uppercase
//-must be function / component body
//-cannot call conditionally eg: if statement / loop
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0);
  function increase(){
    setCount((preval)=>preval+1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase} style={{padding:'0,5rem'}}>+</button>
    </div>
  );
}

export default App;
