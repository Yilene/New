import React from 'react'

class TodoItem extends React.Component{
    render() {
        return (
            <div className="item">
                <time>09:00</time>
                <p>Finish the design papers.Begin to build the project structure.</p>
            </div>
        )
    }
}

export default TodoItem;