import alt from '../alt';
import axios from 'axios';

class AppActions {
    
    createDailyData() {
        return (dispatch) => {
            axios.post('/api/daily')
                .then(function (response) {
                    dispatch(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    
}

export default alt.createActions(AppActions);