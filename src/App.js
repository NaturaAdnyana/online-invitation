import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Maps from './components/Maps';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/maps">
            <Maps />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
