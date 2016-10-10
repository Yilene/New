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
        if(this.state._id == ''){
        }else{
            var moodArray = [];
            for(let i = 0; i < 3; i++){
                if(i < this.state.mood){
                    moodArray.push({love: true});
                }else{
                    moodArray.push({love: false});
                }
            }
            var that = this;
            moodNodes = moodArray.map(function (mood, index) {
                return <a onClick={that.handleMood.bind(that, index + 1, that.state._id)} key={index} className={mood.love ? "icon icon-love" : "icon icon-mood"}> </a>
            });

            switch(this.state.mood) {
                case 0:
                    moodDes = <p>How are you feeling today?</p>;
                    break;
                case 1:
                    moodDes = <p>A bad day!</p>;
                    break;
                case 2:
                    moodDes = <p>A normal day!</p>;
                    break;
                case 3:
                    moodDes = <p>A exciting day!</p>;
                    break;
            }
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
                if(index < 2){
                    if(!todo.finish){
                        return <li key={todo._id} className="todo-item">{todo.content}</li>
                    }
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
                    {moodDes}
                    <div className="mood-des">
                        {moodNodes}
                    </div>
                </div>
                <div className="interact">
                    {interact}
                </div>
            </div>
        );
    }
}

export default Home;