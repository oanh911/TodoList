import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import './TodoList.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../../../../app/store";
import { TodoType } from './../../types/types';
import { useEffect } from "react";
import { getTodoList } from "../../api/todolist.api";

function TodoList(){
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTodoList());
    }, [dispatch]);

    const todos: TodoType[] = useSelector((state: RootState) => {
        return state.todos.todos;
    });

    const isLoaded: boolean = useSelector((state: RootState) => {
        return state.todos.loaded;
    });

    return (
        (isLoaded) ? 
        <div>
            <AddTodo />

            <table className='todolist'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo: TodoType, index: number) => {
                    return <Todo key={index} id={todo.id} title={todo.title} status={todo.status} />;
                })}
            </tbody>
            </table>
        </div>
        :
        <div></div>
    );
}

export default TodoList;