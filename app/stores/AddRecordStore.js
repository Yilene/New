import alt from '../alt';
import AddRecordActions from '../actions/AddRecordActions';

class AddRecordStore {
    constructor() {
        this._id = '';
        this.record = '';
        this.mood = 0;
        this.bindActions(AddRecordActions);
    }

    onHandleDailyRecord(record) {
        this.record = record;
        if(record != '' || this.mood != 0){
            this.submit = true;
        }else{
            this.submit = false;
        }
    }

    onHandleMood(mood) {
        this.mood = mood;
        if(record != '' || this.mood != 0){
            this.submit = true;
        }else{
            this.submit = false;
        }
    }

    onGetDailyData(data) {
        console.log(data);
        this._id = data.data._id;
        this.record = data.data.record;
        this.mood = data.data.mood;
    }
    
}

export default alt.createStore(AddRecordStore);