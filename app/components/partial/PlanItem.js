import React from 'react';

class PlanItem extends React.Component{
    render() {
        return (
            <div className="item">
                <time>10:10 Sep 22, 2016</time>
                <p className="plan-des">Prepare for the final exam</p>
                <div className="progress">
                    <p>50%</p>
                    <div className="progress-bar"></div>
                </div>
                <ul className="process">
                    <li>Start</li>
                    <li>Go to the library with Edison Zhang</li>
                    <li>Go to the library</li>
                </ul>
            </div>
        );
    }
}

export default PlanItem;