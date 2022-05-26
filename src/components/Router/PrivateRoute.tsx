import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../../app/store';

export interface PrivateRoutePropsType {
    path: string,
    component: FC,
    redirectPath: string
}

function PrivateRoute(props: PrivateRoutePropsType){
    const token = useSelector((state: RootState) => state.auth.token);
    const isAuthenticated = (token: string): boolean => {
        return token ? true : false;
    }

    return(
        isAuthenticated(token) ? <Route exact path={props.path} component={props.component} /> : <Redirect exact to={{pathname: props.redirectPath}} />
    );
}

export default PrivateRoute;