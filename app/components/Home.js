import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';
import {getEngDate} from '../utils/dateUtils';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.getDailyData();
    }
    
    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }
    
    onChange(state) {
        this.setState(state);
    }

    handleMood(mood, id) {
        if(this.state.mood != mood){
            HomeActions.updateMood(mood, id);
        }
    }
    
    render() {
        var moodDes, moodNodes,interact;
        if(this.state.mood == ''){

        }else if(this.state.mood == 3){
            moodDes = "A exciting day!";
            moodNodes = <div className="mood-des">
                            <a onClick={this.handleMood.bind(this, 1, this.state._id)} className="icon icon-love"> </a>
                            <a onClick={this.handleMood.bind(this, 2, this.state._id)} className="icon icon-love"> </a>
                            <a onClick={this.handleMood.bind(this, 3, this.state._id)} className="icon icon-love"> </a>
                        </div>;
        }else if(this.state.mood == 2){
            moodDes = "A normal day!";
            moodNodes = <div className="mood-des">
                            <a onClick={this.handleMood.bind(this, 1, this.state._id)} className="icon icon-love"> </a>
                            <a onClick={this.handleMood.bind(this, 2, this.state._id)} className="icon icon-love"> </a>
                            <a onClick={this.handleMood.bind(this, 3, this.state._id)} className="icon icon-mood"> </a>
                        </div>;
        }else if(this.state.mood == 1){
            moodDes = "A dad day!";
            moodNodes = <div className="mood-des">
                            <a onClick={this.handleMood.bind(this, 1, this.state._id)} className="icon icon-love"> </a>
                            <a onClick={this.handleMood.bind(this, 2, this.state._id)} className="icon icon-mood"> </a>
                            <a onClick={this.handleMood.bind(this, 3, this.state._id)} className="icon icon-mood"> </a>
                        </div>;
        }else if(this.state.mood == 0){
            moodDes = "How are you feeling today?";
            moodNodes = <div className="mood-des">
                            <a onClick={this.handleMood.bind(this, 1, this.state._id)} className="icon icon-mood"> </a>
                            <a onClick={this.handleMood.bind(this, 2, this.state._id)} className="icon icon-mood"> </a>
                            <a onClick={this.handleMood.bind(this, 3, this.state._id)} className="icon icon-mood"> </a>
                        </div>;
        }
        if(this.state._id == ''){

        }else if(this.state.record != ''){
            interact = <div className="record">
                            <p>
                                Dear Me,
                                {this.state.record}
                            </p>
                            <div className="more">
                                <Link to="/todo/list">MORE...</Link>
                            </div>
                        </div>;
        }else if(this.state.todos.length != 0){
            var list;
            list = this.state.todos.map((todo, index) => {
                if(!todo.finish){
                    return <li key={todo._id} className="todo-item">{todo.content}</li>
                }
            });
            interact = <div className="list">
                            <ul>
                                {list}
                            </ul>
                            <div className="more">
                                <Link to="/todo/list">MORE...</Link>
                            </div>
                        </div>;
        }else{
            interact = <Link to="/todo/add" className="add">New+</Link>;
        }

        return (
            <div className="home">
                <h1 className="date">{getEngDate(this.state.date)}</h1>
                <div className="greet">
                    <p>Hi, Ilene</p>
                    <p>{this.state.inspire}</p>
                </div>
                <div className="mood">
                    <p>{moodDes}</p>
                    {moodNodes}
                </div>
                <div className="interact">
                    {interact}
                </div>
            </div>
        );
    }
}

export default Home;