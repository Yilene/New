import React from 'react';
import {Link} from 'react-router';
import {getEngDate} from '../utils/dateUtils';

class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <header className="top">
                    <Link to="/plan/list" className="bar-link"><span className="icon icon-plan"> </span></Link>
                    <Link to="/todo/add" className="bar-link"><span className="icon icon-add"> </span></Link>
                    <h1>{getEngDate(new Date())}</h1>
                </header>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}   

export default Todo;