import { useContext } from 'react';
import Context from './Context';

function List() {
    // Access context values and functions
    const { lists, setLists, setInputValue, setIsEditMode, setEditListId } = useContext(Context);

    function deleteItem(id) {
        // Remove an item from the list
        setLists(lists.filter((list) => list.id !== id));
    }

    function editItem(id, item) {
        // Set edit mode and populate input field with the item's current value
        setIsEditMode(true);
        setEditListId(id);
        setInputValue(item);
    }

    return (
        <div>
            <ul>
                {lists.map((list) => (
                    <li key={list.id}>
                        {list.item}
                        <button onClick={() => editItem(list.id, list.item)}>Edit</button>
                        <button onClick={() => deleteItem(list.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
