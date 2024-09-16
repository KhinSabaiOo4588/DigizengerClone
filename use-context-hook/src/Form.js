import { useContext } from 'react';
import Context from './Context';

function Form() {
    // Access context values and functions
    const { inputValue, setInputValue, lists, setLists, isEditMode, setIsEditMode, editListId, setEditListId } = useContext(Context);

    function submitHandler(e) {
        e.preventDefault(); // Prevent default form submission

        if (isEditMode) {
            // Update an existing item
            setLists(lists.map((list) =>
                list.id === editListId ? { ...list, item: inputValue } : list
            ));
            setIsEditMode(false); // Exit edit mode
            setEditListId(null); // Clear the edit list ID
        } else {
            // Add a new item
            setLists([...lists, { id: Math.random().toString(), item: inputValue }]);
        }

        setInputValue(""); // Clear input after submission
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type='text'
                    className="form-control"
                />
                <button type="submit" className="form-control">
                    {isEditMode ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Form;
