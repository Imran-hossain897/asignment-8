import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componets/Home/Home';
import NoMatched from './componets/NoMatched/NoMatched';
import PostDetails from './componets/PostDetails/PostDetails';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/details/:showDetails/'>
            <PostDetails></PostDetails>
          </Route>
          <Route exact path='/'>
          <Home/>        
          </Route>
          <Route path='*'>
            <NoMatched/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
