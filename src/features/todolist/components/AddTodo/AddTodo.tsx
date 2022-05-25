import './AddTodo.css';
import { useState } from "react";
import { TodoStatus } from "../../constants/todolist.enums";
import { createNewTodo } from "../../redux/todolist.slice";
import { useAppDispatch } from './../../../../app/hooks';


function AddTodo(){
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');
    const dispatch = useAppDispatch();
    
    const getNewTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(event.target.value);
    }

    const submitCreateNewTodo = async () => {
        if (newTodoTitle) {
            const newTodo = {
                title: newTodoTitle,
                status: TodoStatus.inProgress
            }
            await dispatch(createNewTodo(newTodo));
            setNewTodoTitle('');
        }
    }

    return (
        <div className="add-todo">
            <input placeholder="Enter title" value={newTodoTitle} onChange={getNewTodoTitle}></input>
            <button onClick={submitCreateNewTodo}>Add</button>
        </div>
    );
}

export default AddTodo;