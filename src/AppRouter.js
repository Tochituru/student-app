import React from 'react';
import Home from './containers/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home}></Route>
    </Router>
  );
}

export default AppRouter;
