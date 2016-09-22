import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Todo from './components/Todo';
import Plan from './components/Plan';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/todo' component={Todo} />
        <Route path='/plan' component={Plan} />
    </Route>
);