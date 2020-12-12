import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Reference from './pages/Reference';
import Intro from './pages/middleTabs/Intro';
import Photo from './pages/middleTabs/Photo';
import Text from './pages/middleTabs/Text';

const PageNotFound = () => {
  return (
    <h1>Page not found!</h1>
  );
};

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Home} />
				  <Route exact path="/contact" component={Contact} />
				  <Route exact path="/book" component={Book} />
				  <Route exact path="/reference" component={Reference} />
				  <Route exact path="/intro" component={Intro} />
				  <Route exact path="/photo" component={Photo} />
				  <Route exact path="/text" component={Text} />
          <Route exact component={PageNotFound} />
	    </Switch>
    </Router>,
    document.getElementById('root')
);