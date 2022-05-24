import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import './TodoList.css';
import logo from '../../../../logo.png';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { useAppDispatch } from './../../../../app/hooks';
import { RootState } from "../../../../app/store";
import { getIsStillLogin } from "../../redux/authSlice";
import { TodoType } from './../../types/types';
import { logout } from './../../api/auth.api';
import { getTodoList } from "../../api/todolist.api";

function TodoList(){
    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getTodoList());
    }, [dispatch]);

    const todos = useSelector((state: RootState) => state.todos.todos);
    const isLoaded: boolean = useSelector((state: RootState) => state.todos.loaded);
    const isStillLogin: boolean = useSelector((state: RootState) => state.auth.isStillLogin);

    const submitLogout = () => {
        dispatch(logout);
        dispatch(getIsStillLogin(false));
        history.push('/login');
        alert('Đăng xuất thành công!');
    }

    return (
        (isStillLogin) ? 
            (isLoaded) ? 
                <div>
                    <div className="navbar">
                        <img alt='logo1' src={logo} />
                        <button onClick={submitLogout}>Đăng xuất</button>
                    </div>
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
                </div>
                :
                null
            :
            <div><p>Bạn chưa đăng nhập. Vui lòng <Link to='/login'>đăng nhập</Link></p></div>
    );
}

export default TodoList;