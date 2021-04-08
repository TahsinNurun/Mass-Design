
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
import ManageVegetables from './Component/ManageVegetables/ManageVegetables';
import AddVegetableByAdmin from './Component/AddVegetableByAdmin/AddVegetableByAdmin';
import CheckOut from './Component/CheckOut/CheckOut';


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
          <PrivateRoute path="/checkOut/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/orderSummary">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/addVegetableByAdmin">
            <AddVegetableByAdmin></AddVegetableByAdmin>
          </Route>
          <PrivateRoute path="/manageVegetables">
            <ManageVegetables></ManageVegetables>
          </PrivateRoute>
          <Route path="/deals">
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
