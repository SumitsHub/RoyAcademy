import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={()=>{return <h1>Oops! You Lost.</h1>;}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
