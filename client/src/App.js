import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from "react-redux";
import classNames from 'classnames';

import { SiteHeader, SiteNavigation } from './components';
import { Home } from './pages';

import store from './store';

import './App.scss';

function App() {
  return (<Provider store={store}><BrowserRouter>
    <div className="App">
      <SiteHeader />
      <div className="site-body">
        <SiteNavigation />
        <div className="site-content">
          <Route exact path="/" component={Home} />

          {/* <Button onClick={() => alert('btn clicked!')} >btn</Button> */}
        </div>
      </div>      
    </div>
  </BrowserRouter></Provider>);
}

export default App;
