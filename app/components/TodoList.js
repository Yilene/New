import React from 'react';
import TodoUl from './partial/TodoUl'

class TodoList extends React.Component{
    render() {
        return (
            <div className="box">
                <TodoUl />
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
        )
    };
}
export default TodoList;