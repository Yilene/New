import React from 'react';

class AddTodo extends React.Component{
    render() {
        return (
            <div className="add">
                <form className="form" action="">
                    <div contentEditable="true" className="edit-box">
                        Dear me...
                    </div>
                    <div className="todo-type">
                        <span className="type-des">Working</span>
                        <a className="type-item work" data-type="working"></a>
                        <a className="type-item family" data-type="Family"></a>
                        <a className="type-item health" data-type="Health"></a>
                        <a className="type-item shopping" data-type="Shopping"></a>
                        <a className="type-item others" data-type="Others"></a>
                    </div>
                    <a className="submit"><span className="icon icon-tick"> </span></a>
                </form>
            </div>
        );
    }
}

export default AddTodo;