import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [todo, setToDo] = useState([]);
  const heavyCalculation = useMemo(()=>{
    return intensiveCalculation(count)
  },[count]);

  function increse(){
    setCount((preCount)=>preCount+1);
  }

  const addToDo = ()=>{
    setToDo((todo)=>{
      return [...todo,{item: "New List added"}]
    })
  }

  return (
    <div className="App">
        <h1>Use Memo Hook</h1>
        <h4>Count: {count}</h4>
        <button onClick={increse}>Increse</button>
        <hr/>
        <h2>Expensive/heavy Calculation</h2>
        <button onClick={addToDo}>Add</button>
        {
          todo.map((t,index)=>{
            return <p key={index}>{`${t.item}-${index}`}</p>;
          })
        }
        <h2>{heavyCalculation}</h2>
    </div>
  );
}

const intensiveCalculation = (number)=>{
  console.count("Render Count");
  for(let i = 0; i< 1000000000;i++){
    number += 1;
  }
  return number;
}

export default App;
