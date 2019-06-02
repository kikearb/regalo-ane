import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './Home';
import { Steps } from './Steps';
import { Congratulations } from './Congratulations';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/steps" component={Steps} />
      <Route path="/congratulations" component={Congratulations} />
    </Router>
    </>
  );
}

export default App;
