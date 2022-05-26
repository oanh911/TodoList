import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './features/auth/screens/LoginScreen/LoginScreen';
import Register from './features/auth/screens/RegisterScreen/RegisterScreen';
import Home from './features/home/screens/HomeScreens/HomeScreen';
import AuthRoute from './components/Router/AuthRoute';
import PrivateRoute from './components/Router/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthRoute path='/register' component={Register} redirectPath='/' />
          <AuthRoute path='/login' component={Login} redirectPath='/' />
          <PrivateRoute path='/' component={Home} redirectPath='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
