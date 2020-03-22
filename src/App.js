import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FoodItems from './components/FoodItems/FoodItems';
import FoodDetails from './components/FoodDetails/FoodDetails';
import FoodDescription from './components/FoodDescription/FoodDescription';
import Cetagories from './components/Cetagories/Cetagories';
import FoodContainer from './components/FoodContainer/FoodContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      
      
      <Router>
        <Switch>
          <Route exact path="/">
          <Cetagories></Cetagories>
          </Route>
          <Route path="/product/:productKey">
          <FoodDetails></FoodDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
