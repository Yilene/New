import alt from '../alt';
import AddTodoActions from '../actions/AddTodoActions';

class AddTodoStore {
    constructor() {
        this.type = 'Work';
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
    
}

export default alt.createStore(AddTodoStore);