import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import Plan from './components/Plan';
import PlanList from './components/PlanList';
import AddTodo from './components/partial/AddTodo';
import AddRecord from './components/partial/AddRecord';
import AddPlan from './components/partial/AddPlan';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/todo' component={Todo} >
            <Route path='list' component={TodoList} />
            <Route path='add' component={AddTodo} />
            <Route path='record' component={AddRecord} />
        </Route>
        <Route path='/plan' component={Plan} >
            <Route path='list' component={PlanList} />
            <Route path='add' component={AddPlan} />
        </Route>
    </Route>
);