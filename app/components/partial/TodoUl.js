import React from 'react';
import TodoItem from './TodoItem'

class PlanUl extends React.Component{
    render() {
        return (
            <div className="list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <div className="tip">That's all ~~</div>
            </div>
        )
    };
}
export default PlanUl;