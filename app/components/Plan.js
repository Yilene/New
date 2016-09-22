import React from 'react';
import PlanList from './partial/PlanList';

class Plan extends React.Component {
    render() {
        return (
            <div className="plan">
                <header className="top">
                    <a className="bar-link"><span className="icon icon-daily"> </span></a>
                    <a className="bar-link"><span className="icon icon-add"> </span></a>
                    <h1>Planing</h1>
                </header>
                <div className="box">
                    <PlanList />
                </div>
            </div>
        );
    }
}

export default Plan;