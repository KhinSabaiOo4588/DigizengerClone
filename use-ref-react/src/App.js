import { useEffect, useRef, useState } from 'react';
import './App.css';
//does not trigger re-render
//target DOM Nodes/elements -> most used case

function App() {

  const [text,setText ]= useState("");
  const inputRef = useRef(null);

  function handleForm(e){
    e.preventDefault();
    setText(inputRef.current.value);
  }
  
  return (
    <div>
      <h1>UseRef</h1>
      <form onSubmit={handleForm}>
        <input 
          type='text' 
          ref={inputRef} 
          placeholder='Enter Your Text'/>
        <button type='submit'>Submit</button>
      </form>
      <h4>{text}</h4>
    </div>
  );
}

export default App;
