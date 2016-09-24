import React from 'react';
import AddTodoActions from '../../actions/AddTodoActions';
import AddTodoStore from '../../stores/AddTodoStore'; 

class AddTodo extends React.Component{
    constructor(props) {
        super(props);
        this.state = AddTodoStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddTodoStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddTodoStore.unlisten(this.onChange);
    }


    handleType(type) {
        AddTodoActions.changeType(type);
    }

    handleContent(event) {
        AddTodoActions.activeSubmit(event.target.innerHTML);
    }

    handleSubmit() {
        var content = this.state.content;
        if(content == ''){
            alert("Please input the content!");
        }else{
            AddTodoActions.submitTodo(this.state.content, this.state.type);
        }
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        return (
            <div className="add">
                <form className="form" action="">
                    <span className="label">What's your goal?</span>
                    <div onKeyUp={this.handleContent.bind(this)} contentEditable="true" className="edit-box">
                    </div>
                    <div className="todo-type">
                        <span className="type-des">{this.state.type}</span>
                        <a style={this.state.type == "Work" ? {height: 4.8 + "rem"}: {height: 2.4 + "rem"}} onClick={this.handleType.bind(this, "Work")} className="type-item work" > </a>
                        <a style={this.state.type == "Family" ? {height: 4.8 + "rem"}: {height: 2.4 + "rem"}} onClick={this.handleType.bind(this, "Family")} className="type-item family" > </a>
                        <a style={this.state.type == "Health" ? {height: 4.8 + "rem"}: {height: 2.4 + "rem"}} onClick={this.handleType.bind(this, "Health")} className="type-item health" > </a>
                        <a style={this.state.type == "Shopping" ? {height: 4.8 + "rem"}: {height: 2.4 + "rem"}} onClick={this.handleType.bind(this, "Shopping")} className="type-item shopping" > </a>
                        <a style={this.state.type == "Others" ? {height: 4.8 + "rem"}: {height: 2.4 + "rem"}} onClick={this.handleType.bind(this, "Others")} className="type-item others" > </a>
                    </div>
                    <a onClick={this.handleSubmit.bind(this)} className={(this.state.submit) ? "submit" : "submit off"}><span className="icon icon-tick"> </span></a>
                </form>
            </div>
        );
    }
}

export default AddTodo;