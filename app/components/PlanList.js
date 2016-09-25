import React from 'react';
import {Link} from 'react-router';
import PlanListActions from '../actions/PlanListActions';
import PlanListStore from '../stores/PlanListStore';
import {formatDateTime} from '../utils/dateUtils';

class PlanList extends React.Component{
    constructor(props) {
        super(props);
        this.state = PlanListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PlanListStore.listen(this.onChange);
        PlanListActions.getPlanList();
    }

    componentWillUnmount() {
        PlanListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        var planItem, processItem;
        if(this.state.plans.length != 0) {

            planItem = this.state.plans.map((plan, index) => {
                if(plan.process.length != 0){
                    processItem = plan.process.map((process, index) => {
                        return (<li key={process._id}>{process.content}</li>)
                    });
                }
                return (<Link to={"/plan/" + plan._id} key={plan._id} className="item">
                    <time>{formatDateTime(new Date(plan.createTime))}</time>
                    <p className="plan-des">{plan.content}</p>
                    <div className="progress">
                        <p>{plan.progress}%</p>
                        <div className="progress-bar">
                            <div className="rate" style={{width: plan.progress + "%"}}></div>
                        </div>
                    </div>
                    <ul className="process">
                        {processItem}
                    </ul>
                </Link>)
            });
        }

        return (
            <div className="box">
                <div className="list">
                    {planItem}
                </div>
            </div>
        );
    }
}

export default PlanList;