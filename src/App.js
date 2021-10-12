import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';

class App extends Component {
  render(){
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/gallery' component={Gallery} />
      </Switch>
    </Router>
    </>
  );
}
};
export default App;