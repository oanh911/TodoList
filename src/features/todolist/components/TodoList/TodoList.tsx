import './Todolist.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { TodoType } from './../../types/todolist.types';
import AddTodo from './../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

function TodoList(){
    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
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
    );
}

export default TodoList;