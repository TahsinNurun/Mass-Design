
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';
import Deals from './Component/Deals/Deals';
import Admin from './Component/Admin/Admin';
import NoMatch from './Component/NoMatch/NoMatch';
import React, { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name:{loggedInUser.name}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders/:name">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/Admin">
            <Admin></Admin>
          </Route>
          <Route path="/Deals">
            <Deals></Deals>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
