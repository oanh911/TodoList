import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './features/auth/screens/LoginScreen/LoginScreen';
import Register from './features/auth/screens/RegisterScreen/RegisterScreen';
import Home from './features/home/screens/HomeScreens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
