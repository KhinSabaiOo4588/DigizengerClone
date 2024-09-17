import './App.css';
import { useEffect, useState } from 'react';
import List from './Memo';

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const fetchData = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }
  useEffect(()=>{
    fetchData();
  },[url]);
  return (
    <div>
        <h2>Counter:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increse</button>
        <List posts={posts}/>
    </div>
  );
}

export default App;
