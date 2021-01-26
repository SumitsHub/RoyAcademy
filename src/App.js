import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Result from './components/Result/Result';
import Contact from './components/Contact/Contact';
import Admission from './components/Admission/Admission';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admission" component={Admission} />
          <Route path="*" component={()=>{return <h1>Oops! You Lost.</h1>;}} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
