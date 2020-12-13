import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Reference from './pages/Reference';
import Intro from './pages/middleTabs/Intro';
import Photo from './pages/middleTabs/Photo';
import Text from './pages/middleTabs/Text';

import Header from './components/Header';
import Footer from './components/Footer';

const PageNotFound = () => {
  const styling = {
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "33px"
  };

  return <div style={styling}>Här var det tomt ¯\_(ツ)_/¯</div>;
};

ReactDOM.render(
    <Router>
      <Header />
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
      <Footer />
    </Router>,
    document.getElementById('root')
);