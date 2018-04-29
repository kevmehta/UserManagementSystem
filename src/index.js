import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import Details from './components/details/details';

render(
    <MuiThemeProvider>
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/details" exact component={Details} />
                </Switch>
            </Router>
        </div>
    </MuiThemeProvider>,
    document.getElementById('root')
);