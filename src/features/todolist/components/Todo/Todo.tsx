import './Todo.css'
import { useState } from 'react';
import { useAppDispatch } from './../../../../app/hooks';
import { updateTodo, editTodo, deleteTodo, getTodoList } from '../../redux/todolist.slice';
import { TodoType } from './../../types/todolist.types';

function Todo(todo: TodoType){
    const [editedTodo, setEditedTodo] = useState<string>('');
    const [isEditDisplay, setIsEditDisplay] = useState<boolean>(true);
    const [editTodoId, setEditTodoId] = useState<number>(0);
    const dispatch = useAppDispatch();

    const handleGetTodoList = () => {
        dispatch(getTodoList(true))
            .unwrap()
            .then()
            .catch(() => alert('Lỗi tải Todolist!'))
    }

    const handleUpdateTodo = (todo: TodoType) => {
        dispatch(updateTodo(todo))
            .unwrap()
            .then(() => {
                handleGetTodoList();
            })
            .catch(() => alert('Cập nhật không thành công!'));
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

    const handleEditTodo = (todo: TodoType) => {
        const newTodo = {
            ...todo,
            title: editedTodo
        }
        dispatch(editTodo(newTodo))
            .unwrap()
            .then(() => {
                handleGetTodoList();
            })
            .catch(() => alert('Sửa không thành công!'));
        cancelEditTodo();
    }

    const handleDeleteTodo = (todoId: number) => {
        dispatch(deleteTodo(todoId))
            .unwrap()
            .then(() => {
                handleGetTodoList();
            })
            .catch(() => alert('Xóa không thành công!'));
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
                            <button className='update-btn' onClick={() => {handleUpdateTodo(todo)}}>Update</button>
                            <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                            <button className='delete-btn' onClick={() => {handleDeleteTodo(todo.id)}}>Delete</button>
                        </div>
                        :
                        <div className='edit-todo-action'>
                            <button className='update-edit-btn' onClick={() => {handleEditTodo(todo)}}>OK</button>
                            <button className='cancel-edit-btn' onClick={cancelEditTodo}>Cancel</button>
                        </div>
                    :
                    <div>
                        <button className='update-btn' onClick={() => {handleUpdateTodo(todo)}}>Update</button>
                        <button className='edit-btn' onClick={() => {displayEditTodo(todo.id)}}>Edit</button>
                        <button className='delete-btn' onClick={() => {handleDeleteTodo(todo.id)}}>Delete</button>
                    </div>
                }
            </td>
        </tr>
    );
}

export default Todo;