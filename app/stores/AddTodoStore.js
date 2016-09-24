import alt from '../alt';
import AddTodoActions from '../actions/AddTodoActions';

class AddTodoStore {
    constructor() {
        this.date = new Date();
        this._id = '';
        this.type = 'Work';
        this.content = '';
        this.submit = false;
        this.bindActions(AddTodoActions);
    }
    
    onActiveSubmit(content) {
        this.content = content;
        if(content != ''){
            this.submit = true;
        }else{
            this.submit = false;
        }
    }
    
    onChangeType(type) {
        this.type = type;
    }

    onSubmitTodo(data) {
        console.log(data);
    }
    
}

export default alt.createStore(AddTodoStore);