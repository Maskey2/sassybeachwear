import './App.css';
import React,  { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Product';
import Customer from './components/Customer';
import Contact from './components/Contact';
import Home from './components/Home';
import  Box   from '@material-ui/core/Box';
import Footer from './components/Footer';
import { Grid } from '@material-ui/core';
import Header from './components/Header'



 function App() {
  return (
    <Router>
      <Header/>
      <Switch>        
        <Route path="/contact" component={Contact}></Route>
        <Route path="/customers" component={Customer}></Route>
        <Route path="/products" component={Product}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer/>
      </Router>
  );
}

export default App;
