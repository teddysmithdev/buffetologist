import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import BalanceSheet from './pages/BalanceSheet'
import CashFlowStatement from './pages/CashFlowStatement'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/balance-sheet' component={BalanceSheet} />
      <Route exact path='/cashflow-statement' component={CashFlowStatement} />
    </Router>
  );
}

export default App;
