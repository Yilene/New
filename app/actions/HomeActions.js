import alt from '../alt';
import axios from 'axios';

class HomeActions {
    
    getDailyData() {
        return (dispatch) => {
            axios.get('/api/daily')
                .then(function (response) {
                    dispatch(response);
                })
                .catch(function (error) {
                    alert(error);
                });
        }
    }

    updateMood(mood,id) {
        return (dispatch) => {
            axios.put('/api/daily/mood',{mood: mood, id: id})
                .then(function (response) {
                    dispatch(response);
                })
                .catch(function (error) {
                    alert(error);
                })
        }
    }
    
}

export default alt.createActions(HomeActions);