import alt from '../alt';
import axios from 'axios';

class PlanListActions {
    getPlanList() {
        return (dispatch) => {
            axios.get('/api/plans')
                .then(function (response) {
                    dispatch(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

export default alt.createActions(PlanListActions);