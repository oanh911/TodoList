import './AddTodo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../../app/store";
import { creatNewTodo, getTodoList } from '../../api/todolist.api';

function AddTodo(){
    const [newTodo, setNewTodo] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    
    const getNewTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }

    const submitCreateNewTodo = async (todoTitle: string) => {
        await dispatch(creatNewTodo(todoTitle));
        dispatch(getTodoList());
        setNewTodo('');
    }

    return (
        <div className="add-todo">
            <input placeholder="Enter title" value={newTodo} onChange={getNewTodoTitle}></input>
            <button onClick={() => {submitCreateNewTodo(newTodo)}}>Add</button>
        </div>
    );
}

export default AddTodo;