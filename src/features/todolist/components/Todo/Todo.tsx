import './Todo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../../../../app/store";
import { updateTodo, editTodo, deleteTodo, getTodoList } from './../../api/todolist.api';
import { TodoType } from './../../types/types';

function Todo(todo: TodoType){
    const [editedTodo, setEditedTodo] = useState<string>('');
    const [isEditDisplay, setIsEditDisplay] = useState<boolean>(true);
    const [editTodoId, setEditTodoId] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();

    const submitUpdateTodo = async (todoId: number, todoStatus: string) => {
        await dispatch(updateTodo({todoId, todoStatus}));
        dispatch(getTodoList());
    }

    const displayEditTodo = (todoId: number) => {
        setEditTodoId(todoId)
        setIsEditDisplay(false);
    }

    const cancelEditTodo = () => {
        setIsEditDisplay(true);
    }

    const getEditTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTodo(event.target.value);
    }

    const submitEditTodo = async (todoId: number, todoTitle: string) => {
        await dispatch(
            editTodo({todoId, todoTitle})
        );
        cancelEditTodo();
        dispatch(getTodoList());
    }

    const submitDeleteTodo = async (todoId: number) => {
        await dispatch(deleteTodo(todoId));
        dispatch(getTodoList());
    }

    return (
        <tr>
            <td className='todo-id'>{todo.id}</td>
            <td className='todo-title'>
                {(editTodoId === todo.id) ?
                    (isEditDisplay) ? <p>{todo.title}</p> : <input defaultValue={todo.title} onChange={getEditTodoTitle}></input>
                    :
                    <p>{todo.title}</p>
                }
            </td>
            <td className='todo-status'>{todo.status}</td>
            <td className='todo-action'>
                {(editTodoId === todo.id) ?
                    (isEditDisplay) ? 
                        <div>
                            <button className='update-btn' onClick={() => {submitUpdateTodo(todo.id, todo.status)}}>Update</button>
                            <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                            <button className='delete-btn' onClick={() => {submitDeleteTodo(todo.id)}}>Delete</button>
                        </div>
                        :
                        <div className='edit-todo-action'>
                            <button className='update-edit-btn' onClick={() => {submitEditTodo(todo.id, editedTodo)}}>OK</button>
                            <button className='cancel-edit-btn' onClick={cancelEditTodo}>Cancel</button>
                        </div>
                    :
                    <div>
                        <button className='update-btn' onClick={() => {submitUpdateTodo(todo.id, todo.status)}}>Update</button>
                        <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                        <button className='delete-btn' onClick={() => {submitDeleteTodo(todo.id)}}>Delete</button>
                    </div>
                }
            </td>
        </tr>
    );
}

export default Todo;