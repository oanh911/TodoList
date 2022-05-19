import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import TodoList from './features/todolist/components/TodoList/TodoList';
import Login from './features/todolist/components/Register-Login/Login';
import Register from './features/todolist/components/Register-Login/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={TodoList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
