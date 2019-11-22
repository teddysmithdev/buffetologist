import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
    </Router>
  );
}

export default App;
