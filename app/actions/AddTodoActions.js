import alt from '../alt';
import axios from 'axios';
import {browserHistory} from 'react-router';

class AddTodoActions {
    
    changeType(type) {
        return type;
    }

    activeSubmit(content) {
        return content;
    }
    
    submitTodo(content, type) {
        return (dispatch) => {
            axios.put('/api/daily/todo', { content: content, type: type, time: new Date, finish: false })
                .then(function (response) {
                    browserHistory.push(`/todo/list`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    
    
}

export default alt.createActions(AddTodoActions);