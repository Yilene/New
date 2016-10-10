import alt from '../alt';
import EditPlanActions from '../actions/EditPlanActions';

class EditPlanStore {
    constructor() {
        this.process = [];
        this.submit = false;
        this.bindActions(EditPlanActions);
    }

    onGetPlanData(data) {
        this.createTime = data.data.createTime;
        this._id = data.data._id;
        this.progress = data.data.progress;
        this.newProgress = data.data.progress;
        this.content = data.data.content;
        this.finish = data.data.finish;
        this.process = data.data.process;
        this.submit = false;
        this.bindActions(EditPlanActions);
    }

    onHandleRecord(record) {
        this.record = record;
        this.submit = ((this.newProgress != this.progress) || (this.record != ''));
    }
    
    onChangeType(type) {
        this.type = type;
    }
    
    onHandleProgress(progress){
        this.newProgress = progress;
        this.submit = ((this.newProgress != this.progress) || (this.record != ''));
    }

    onClearData() {
        this.record = '';
    }
    
}

export default alt.createStore(EditPlanStore);