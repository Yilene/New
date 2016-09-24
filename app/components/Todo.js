import React from 'react';


class Todo extends React.Component {
    
    render() {
        return (
            <div className="todo">
                <header className="top">
                    <a className="bar-link"><span className="icon icon-plan"> </span></a>
                    <a className="bar-link"><span className="icon icon-add"> </span></a>
                    <h1>Sep 06, 2016</h1>
                </header>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}   

export default Todo;