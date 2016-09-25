import alt from '../alt';
import axios from 'axios';
import {browserHistory} from 'react-router';

class AddTodoActions {

    handleRecord(record) {
        return record;
    }

    handleProgress(progress) {
        return progress;
    }

    getPlanData(id) {
        return (dispatch) => {
            axios.get('/api/plan' + id)
                .then(function (response) {
                    dispatch(response);
                })
                .catch(function (err) {
                    alert(err);
                });
        }
    }
    
    submitPlan(progress, record, id) {
        return (dispatch) => { 
            axios.put('/api/plan', { progress: progress, record: record, id: id })
                .then(function (response) {
                    browserHistory.push(`/plan/list`);
                })
                .catch(function (error) {
                    alert(error);
                });
        }
    }
    
    
}

export default alt.createActions(AddTodoActions);