import 'intersection-observer';

import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import Home from './Pages/Home/Home';
import Designs from './Pages/Designs/Designs';

import Header from './PageBlocks/Header/Header';

import M from 'materialize-css';

M.AutoInit();

function App() {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/resume-tinker">
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
