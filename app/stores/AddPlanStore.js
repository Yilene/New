import alt from '../alt';
import AddPlanActions from '../actions/AddPlanActions';

class AddPlanStore {
    constructor() {
        this.createTime = new Date();
        this._id = '';
        this.progress = 0;
        this.content = '';
        this.finish = false;
        this.process = [];
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