import alt from '../alt';
import TodoListActions from '../actions/TodoListActions';

class TodoListStore {
    constructor() {
        this.todos = [];
        this.record = '';
        this.mood = '';
        this._id = '';
        this.bindActions(TodoListActions);
    }
    
    onGetListData(data) {
        if(data.status == 200){
            this.todos = data.data.todos.reverse();
            this.record = data.data.record;
            this.mood = data.data.mood;
            this._id = data.data._id;
        }
    }
}

export default alt.createStore(TodoListStore);