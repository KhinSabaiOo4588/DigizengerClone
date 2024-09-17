import './App.css';
import { useCustomHook } from './CustomHook';

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const {loading,data} = useCustomHook(url);
  return (
    <div>
      {loading?<h1>Loading...</h1>:<h1>Data feching is done</h1>}
    </div>
  );
}

export default App;
