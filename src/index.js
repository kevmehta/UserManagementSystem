import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
// import Details from './components/details/details';

render(
    <Router>
        <MuiThemeProvider>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Route path="/" component={Dashboard} />
                </div>
                {/* <div>
                    <Route path="/" component={Details} />
                </div> */}
            </div>
        </MuiThemeProvider>
    </Router>,
    document.getElementById('root')
);