import React from 'react';
import PlanItem from './PlanItem';

class PlanList extends React.Component{
    render() {
        return (
            <div className="list">
                <PlanItem />
                <PlanItem />
            </div>
        );
    }
}

export default PlanList;