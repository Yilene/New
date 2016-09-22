import React from 'react';

class Plan extends React.Component {
    render() {
        return (
            <div className="plan">
                <header className="top">
                    <a className="bar-link"><span className="icon icon-daily"> </span></a>
                    <a className="bar-link"><span className="icon icon-add"> </span></a>
                    <h1>Planing</h1>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Plan;