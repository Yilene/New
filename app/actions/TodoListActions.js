import alt from '../alt';
import axios from 'axios';

class TodoListActions {
    getListData() {
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
}

export default alt.createActions(TodoListActions);