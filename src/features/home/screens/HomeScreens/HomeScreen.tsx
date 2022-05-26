import './HomeScreen.css';
import logo from '../../../../logo.png';
import { useAppDispatch } from '../../../../app/hooks';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getTodoList } from '../../../todolist/redux/todolist.slice';
import { logout } from '../../../auth/redux/auth.slice';
import TodoList from './../../../todolist/components/Todolist/Todolist';
import { RootState } from '../../../../app/store';

function Home(){
    const dispatch = useAppDispatch();
    const history = useHistory();
    const isLoaded: boolean = useSelector((state: RootState) => state.todos.loaded);
    const token = useSelector((state: RootState) => state.auth.token);

    const handleGetTodoList = () => {
        dispatch(getTodoList(true))
            .unwrap()
            .then()
            .catch(() => alert('Lỗi tải Todolist!'))
    }

    useEffect(() => {
        handleGetTodoList();
    }, []);

    const gotoLogin = () => {
        if (!token){
            history.push('/login');
        }
    }

    const submitLogout = () => {
        dispatch(logout());
        gotoLogin();
    }

    return(
        (isLoaded) ? 
            <div>
                <div className="navbar">
                    <img alt='logo1' src={logo} />
                    <button onClick={submitLogout}>Logout</button>
                </div>
                <TodoList />
            </div>
            :
            null
    );
}

export default Home;