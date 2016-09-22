import React from 'react';
import TodoItem from './TodoItem'

class PlanUl extends React.Component{
    render() {
        return (
            <div className="list">
                <TodoItem />
                <TodoItem />
            </div>
        )
    };
}
export default PlanUl;