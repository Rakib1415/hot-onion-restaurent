import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FoodItems from './components/FoodItems/FoodItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <FoodItems></FoodItems>
    </div>
  );
}

export default App;
