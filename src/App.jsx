import React from 'react';
import Banner from './Banner'
import Section2 from './Section2';
import Home from './Home';
import Section3 from './Section3';
import Footer from './Footer';

import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={Banner}/>
    <Route exact path="/" component={Section2}/>
    <Route exact path="/" component={Section3}/>
    <Route exact path="/" component={Footer}/>
 
<Redirect to='/' />
  </Switch>
    </>
  );
}

export default App;
