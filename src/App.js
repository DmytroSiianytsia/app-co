import React from 'react';
import './app.css';
import { HashRouter as Router,  Switch,  Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import UsersStatistics from './components/UsersStatistics/UsersStatistics';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/usersStatistics" component={UsersStatistics}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
