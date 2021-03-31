import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MetaTags from 'react-meta-tags';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Reference from './pages/Reference';
import Intro from './pages/Intro';
import Photo from './pages/Photo';
import Text from './pages/Text';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
      <MetaTags>
        <title>Nilszen Form &amp; Design</title>
        <meta name="robots" content="nilszen, design, form, tryck, bok, egen bok, stefan, nilszén" />
        <meta name="description" content="Funderar du på att göra en bok av din historia? 
          Då kan vi hjälpa dig med rätt form, design, text och tryck!
          Bra text, intressanta foton och en genomtänkt struktur gör din historia läsvärd!" />
      </MetaTags>

      <Header />
        <ScrollToTop />
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