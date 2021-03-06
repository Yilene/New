import React from 'react';
import TodoListActions from '../actions/TodoListActions';
import TodoListStore from '../stores/TodoListStore';
import {formatTime} from '../utils/dateUtils';
import {browserHistory} from 'react-router';


class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = TodoListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        TodoListStore.listen(this.onChange);
        TodoListActions.getListData();
    }

    componentWillUnmount() {
        TodoListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    onClickRecord() {
        browserHistory.push('/todo/record/' + this.state._id);
    }

    render() {
        var todos;
        if(this.state.todos.length != 0){
            todos = this.state.todos.map((todo, index) => {
                return (<div key={todo._id} className={'item ' + todo.type.toLowerCase() + (todo.finish? " finish" : "") }>
                            <time>{formatTime(new Date(todo.time))}</time>
                            <p className="todo-content">{todo.content}</p>
                        </div>)
            });
        }

        var moodDes, moodNodes;
        if(this.state.mood == 3){
            moodDes = <span className="mood-des">A exciting day!</span>;
            moodNodes = <div className="mood-record">
                <a className="icon icon-love"> </a>
                <a className="icon icon-love"> </a>
                <a className="icon icon-love"> </a>
                {moodDes}
            </div>;
        }else if(this.state.mood == 2){
            moodDes = <span className="mood-des">A normal day!</span>;
            moodNodes = <div className="mood-record">
                <a className="icon icon-love"> </a>
                <a className="icon icon-love"> </a>
                <a className="icon icon-mood"> </a>
                {moodDes}
            </div>;
        }else if(this.state.mood == 1){
            moodDes = <span className="mood-des">A dad day!</span>;
            moodNodes = <div className="mood-record">
                <a className="icon icon-love"> </a>
                <a className="icon icon-mood"> </a>
                <a className="icon icon-mood"> </a>
                {moodDes}
            </div>;
        }else{
            moodDes = <span className="mood-des">How are you feeling today?</span>;
            moodNodes = <div className="mood-record">
                <a className="icon icon-mood"> </a>
                <a className="icon icon-mood"> </a>
                <a className="icon icon-mood"> </a>
                {moodDes}
            </div>;
        }

        var record;
        if(this.state.record == '' || this.state.record == undefined){
            record = <p>Describe your day...</p>
        }else{
            record = <p>{this.state.record}</p>
        }

        return (
            <div className="box">
                <div className="list">{todos}</div>
                <div onClick={this.onClickRecord.bind(this)} className="record">
                    {moodNodes}
                    {record}
                </div>
            </div>
        )
    };
}

export default TodoList;