import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const url = "https://api.github.com/users";
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getUsers(){
    const response = await fetch(url);
    const users = await response.json();

    if(response.status > 300){
      setIsLoading(false);
      setIsError(true);
    }

    setUsers(users);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    getUsers();
  }, []);

  if(isLoading){
    return <h1>Loading....</h1>;
  }

  return (
    <div className="container">
      <h1>Github Users</h1>
      <ul className='users'>
        {users.map((user)=>{
          return(
            <li key={user.id}>
              <img src={user.avatar_url}></img>
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
