import './HomeScreen.css';
import logo from '../../../../logo.png';
import { useAppDispatch } from '../../../../app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from "../../../../app/store";
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getIsStillLogin } from '../../../auth/redux/auth.slice';
import { getTodoList } from '../../../todolist/redux/todolist.slice';
import { logout } from '../../../auth/redux/auth.slice';
import TodoList from './../../../todolist/components/Todolist/Todolist';

function Home(){
    const dispatch = useAppDispatch();
    const history = useHistory();
    const isStillLogin: boolean = useSelector((state: RootState) => state.auth.isStillLogin);
    const isLoaded: boolean = useSelector((state: RootState) => state.todos.loaded);

    useEffect(() => {
        dispatch(getTodoList());
    }, [dispatch]);

    const submitLogout = () => {
        dispatch(logout);
        dispatch(getIsStillLogin(false));
        history.push('/login');
        alert('Đăng xuất thành công!');
    }

    return(
        (isStillLogin) ? 
            (isLoaded) ? 
                <div>
                    <div className="navbar">
                        <img alt='logo1' src={logo} />
                        <button onClick={submitLogout}>Đăng xuất</button>
                    </div>
                    <TodoList />
                </div>
                :
                null
            :
            <div><p>Bạn chưa đăng nhập. Vui lòng <Link to='/login'>đăng nhập</Link></p></div>
    );
}

export default Home;