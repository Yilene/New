import alt from '../alt';
import PlanListActions from '../actions/PlanListActions';

class PlanListStore {
    constructor() {
        this.plans = [];
        this.bindActions(PlanListActions);
    }

    onGetPlanList(data) {
        if(data.status == 200){
            console.log(data);
            this.plans = data.data;
        }
    }
    
}

export default alt.createStore(PlanListStore);