import React from 'react';
import './App.css';
import Login from './Login/Login';
import Details from './Details/Details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <AuthenticatedRoute path="/details" component={Details} />
              <Route path="/login" component={Login}></Route>
              <Route path="/" component={Login}></Route>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
