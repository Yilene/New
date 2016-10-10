import alt from '../alt';
import axios from 'axios';
import {browserHistory} from 'react-router';

class AddRecordActions {

    getDailyData(id) {
        return (dispatch) => {
            axios.get('/api/daily' + id)
                .then(function (response) {
                    dispatch(response);
                })
                .catch(function (err) {
                    alert(err);
                });
        }
    }

    changeMood(mood) {
        return mood;
    }

    handleDailyRecord(record) {
        return record;
    }

    handleSubmit(mood, record, id) {
        return () => {
            axios.put('/api/daily/record', { mood: mood, record: record, id: id })
                .then(function (response) {
                    browserHistory.push('/todo/list');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

export default alt.createActions(AddRecordActions);