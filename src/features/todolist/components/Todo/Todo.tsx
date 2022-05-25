import './Todo.css'
import { useState } from 'react';
import { useAppDispatch } from './../../../../app/hooks';
import { updateTodo, editTodo, deleteTodo } from '../../redux/todolist.slice';
import { TodoType } from './../../types/todolist.types';

function Todo(todo: TodoType){
    const [editedTodo, setEditedTodo] = useState<string>('');
    const [isEditDisplay, setIsEditDisplay] = useState<boolean>(true);
    const [editTodoId, setEditTodoId] = useState<number>(0);
    const dispatch = useAppDispatch();

    const submitUpdateTodo = (todo: TodoType) => {
        dispatch(updateTodo(todo));
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

    const submitEditTodo = async (todo: TodoType) => {
        const newTodo = {
            ...todo,
            title: editedTodo
        }
        await dispatch(editTodo(newTodo));
        cancelEditTodo();
    }

    const submitDeleteTodo = (todoId: number) => {
        dispatch(deleteTodo(todoId));
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
                            <button className='update-btn' onClick={() => {submitUpdateTodo(todo)}}>Update</button>
                            <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                            <button className='delete-btn' onClick={() => {submitDeleteTodo(todo.id)}}>Delete</button>
                        </div>
                        :
                        <div className='edit-todo-action'>
                            <button className='update-edit-btn' onClick={() => {submitEditTodo(todo)}}>OK</button>
                            <button className='cancel-edit-btn' onClick={cancelEditTodo}>Cancel</button>
                        </div>
                    :
                    <div>
                        <button className='update-btn' onClick={() => {submitUpdateTodo(todo)}}>Update</button>
                        <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                        <button className='delete-btn' onClick={() => {submitDeleteTodo(todo.id)}}>Delete</button>
                    </div>
                }
            </td>
        </tr>
    );
}

export default Todo;