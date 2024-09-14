import './App.css';
import { useState,useReducer } from 'react';

const initialValue = {
    people: [],
};

function reducer(state, action){
    if(action.type == "INPUT_ADDED"){
      const newPeople = [...state.people, action.payload];

      return { ...state, people: newPeople };
    }

}
function App() {
  const[inputValue, setInputValue] = useState("");

  const [state, dispatch] = useReducer(reducer,initialValue);
  function submitHandler(e){
    e.preventDefault();
    const newItem = {id:Math.random().toString,name: inputValue};
    dispatch({type:"INPUT_ADDED", payload: newItem})
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <input
        type='text'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {
          state.people.map((person)=>{
            return <li key={person.id}>{person.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
