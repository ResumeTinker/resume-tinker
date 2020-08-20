import 'intersection-observer';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'

import './App.css';
import Home from './Pages/Home/Home';

M.AutoInit();


function App() {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
