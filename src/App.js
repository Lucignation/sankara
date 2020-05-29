import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Import Provider from React-Redux
import { Provider } from 'react-redux'; 

//Importing of Components
import TopNav from './components/top__menu/Top__menu';
// import Nav from './components/nav/Nav';

//Import Pages to be rendered on screen
import Home from './pages/home/Home';

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
          </Switch>
        </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
