import { memo } from "react";
const ToDo = memo(({todo,deleteItem})=>{
    return (
        <div>
            <h1>To Do List</h1>

            <ul>
                {todo.map((t)=>{
                    return <li key={t.id}>{t.title}
                    <button onClick={()=>deleteItem(t.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
});
export default ToDo;