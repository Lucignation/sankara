import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Import Provider from React-Redux
import { Provider } from 'react-redux'; 

//Importing of Components
import TopNav from './components/top__menu/Top__menu';
import Footer from './components/footer/Footer';
// import Nav from './components/nav/Nav';

//Import Pages to be rendered on screen
import Home from './pages/home/Home';
import Unboxing from './pages/unboxing/Unboxing';
import Setup from './pages/setup/Setup';
import Configuration from './pages/configuration/Configuration';
import Controller from './pages/controllerConfig/ControllerConfig';

//import Store 
import store from './store';


import './App.css';

const App = props => {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <TopNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/unboxing" exact component={Unboxing} />
            <Route path="/setup" exact component={Setup} />
            <Route path="/software-configuration" exact component={Configuration} />
            <Route path="/controller-config" exact component={Controller} />
          </Switch>
        </Fragment>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
