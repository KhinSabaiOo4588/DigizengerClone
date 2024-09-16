import './App.css';
import Context from './Context';
import Form from './Form';
import List from './List';
import { useState } from 'react';

function App() {
    // Define state variables to manage the form input, list of items, and edit mode
    const [inputValue, setInputValue] = useState("");
    const [lists, setLists] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editListId, setEditListId] = useState(null);

    return (
        // Provide the context values to all child components
        <Context.Provider value={{ 
            inputValue, 
            setInputValue, 
            lists, 
            setLists, 
            isEditMode, 
            setIsEditMode, 
            editListId, 
            setEditListId 
        }}>
            <Form />
            <List />
        </Context.Provider>
    );
}

export default App;
