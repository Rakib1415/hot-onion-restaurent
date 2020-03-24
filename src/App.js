import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';

import FoodDetails from './components/FoodDetails/FoodDetails';
import Cetagories from './components/Cetagories/Cetagories';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import Complete from './components/Complete/Complete';

function App() {
  return (
    <div className="App">


     
      <Header></Header>
      
      
      
      <Router>
        <Switch>
          <Route exact path="/">
          <Cetagories></Cetagories>
          </Route>
          <Route path="/product/:productKey">
          <FoodDetails></FoodDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path="/complete">
            <Complete></Complete>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
