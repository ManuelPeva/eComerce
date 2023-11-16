// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
