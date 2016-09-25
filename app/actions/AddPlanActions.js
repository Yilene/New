import alt from '../alt';
import axios from 'axios';
import {browserHistory} from 'react-router';

class AddTodoActions {

    activeSubmit(content) {
        return content;
    }

    handleProgress(progress) {
        return progress;
    }
    
    submitPlan(content, progress) {
        return (dispatch) => {
            axios.post('/api/plan', { content: content, progress: progress, finish: false })
                .then(function (response) {
                    browserHistory.push(`/plan/list`);
                })
                .catch(function (error) {
                    toastr.error(error);
                });
        }
    }
    
    
}

export default alt.createActions(AddTodoActions);