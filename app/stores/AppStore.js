import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
    constructor() {
        this.bindActions(AppActions);
    }
    
    onCreateDailyData(data) {
        if(data.status == 200){
            console.log('ok');
        }
    }
    
}

export default alt.createStore(AppStore);