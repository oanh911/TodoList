import './AddTodo.css';
import { useState } from "react";
import { TodoStatus } from "../../constants/todolist.enums";
import { createNewTodo, getTodoList } from "../../redux/todolist.slice";
import { useAppDispatch } from './../../../../app/hooks';


function AddTodo(){
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');
    const dispatch = useAppDispatch();
    
    const getNewTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoTitle(event.target.value);
    }

    const handleGetTodoList = () => {
        dispatch(getTodoList(true))
            .unwrap()
            .then()
            .catch(() => alert('Lỗi tải Todolist!'))
    }

    const submitCreateNewTodo = () => {
        if (newTodoTitle) {
            const newTodo = {
                title: newTodoTitle,
                status: TodoStatus.inProgress
            }
            dispatch(createNewTodo(newTodo))
                .unwrap()
                .then(() => {
                    handleGetTodoList();
                })
                .catch(() => alert('Thêm mới không thành công!'));
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