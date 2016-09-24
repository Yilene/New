import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.date = new Date();
        this._id = '';
        this.mood = '';
        this.inspire = 'A new day, a new goal';
        this.todos = [];
        this.record = '';

        this.bindActions(HomeActions);
    }
    
    onGetDailyData(data) {
        if(data.status == 200){
            this._id = data.data._id;
            this.mood = Number(data.data.mood);
            this.inspire = data.data.inspire == ''|| undefined ? this.inspire: data.data.inspire;
            this.todos = data.data.todos;
            this.record = data.data.record ==  undefined ? '':data.data.record;
        }
    }

    onUpdateMood(data) {
        if(data.status == 200){
            this.mood = Number(data.data.mood);
        }
    }
    
}

export default alt.createStore(HomeStore);