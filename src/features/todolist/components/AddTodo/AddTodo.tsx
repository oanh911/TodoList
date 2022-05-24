import './AddTodo.css';
import { useState } from 'react';
import { useAppDispatch } from './../../../../app/hooks';
import { creatNewTodo, getTodoList } from '../../api/todolist.api';

function AddTodo(){
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');
    const dispatch = useAppDispatch();
    
    const getNewTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(event.target.value);
    }

    const submitCreateNewTodo = async () => {
        if (newTodoTitle) {
            await dispatch(creatNewTodo(newTodoTitle));
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