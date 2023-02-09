import React from 'react';


import Home from './Home';
import About from './About';
import Footer from './Footer';
import Header from './Header';


import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
 
<Redirect to='/' />

  </Switch>
  <Footer/>
    </>
  );
}

export default App;
