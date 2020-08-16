import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'

import './App.css';
import Home from './Pages/Home/Home';


M.AutoInit();


function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
