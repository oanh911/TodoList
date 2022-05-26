import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../../app/store';

export interface AuthRoutePropsType {
    path: string,
    component: FC,
    redirectPath: string
}

function AuthRoute(props: AuthRoutePropsType){
    const token = useSelector((state: RootState) => state.auth.token);
    const isAuthenticated = (token: string): boolean => {
        return token ? true : false;
    }

    return(
        isAuthenticated(token) ? <Redirect exact to={{pathname: props.redirectPath}} /> : <Route exact path={props.path} component={props.component} />
    );
}

export default AuthRoute;