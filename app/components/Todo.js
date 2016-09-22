import React from 'react';
import TodoList from './partial/TodoList'

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
                    <div className="box">
                        <TodoList />
                        <div className="record">
                            <div className="mood-record">
                                <span className="icon icon-love"> </span>
                                <span className="icon icon-love"> </span>
                                <span className="icon icon-love"> </span>
                                <span className="mood-des">A exciting day!</span>
                            </div>
                            <p>
                                Dear me, It's a great day,just be ready to go to the concert next Saturday,so exciting!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   

export default Todo;