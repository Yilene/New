import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    render() {
        return (
            <div className="list">
                <TodoItem />
                <TodoItem />
            </div>
        )
    };
}
export default TodoList;