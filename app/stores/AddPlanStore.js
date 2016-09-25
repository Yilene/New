import alt from '../alt';
import AddPlanActions from '../actions/AddPlanActions';

class AddPlanStore {
    constructor() {
        this.progress = 0;
        this.submit = false;
        this.bindActions(AddPlanActions);
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
    
    onHandleProgress(progress){
        this.progress = progress;
    }
    
}

export default alt.createStore(AddPlanStore);