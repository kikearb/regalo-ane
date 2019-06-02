import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './Home';
import { Steps } from './Steps';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/steps" component={Steps} />
    </Router>
    </>
  );
}

export default App;
