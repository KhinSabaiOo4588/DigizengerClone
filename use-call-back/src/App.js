import { useState,useCallback } from 'react';
import './App.css';
import { lists } from './data';
import ToDo from './ToDo';

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(lists);

  function increase(){
    setCount((preCount)=>preCount+1);
  }

  const deleteItem = useCallback((id)=>{
    setTodo(todo.filter((t)=>{
      return t.id !== id;
    }))
  },[todo]);

  return (
    <div>
      <h1>useCallBack</h1>
      <h4>Count: {count}</h4>
      <button onClick={increase}>increase</button>
      <hr/>
      <ToDo todo= {todo} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
