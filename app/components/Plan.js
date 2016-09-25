import React from 'react';
import {Link} from 'react-router';

class Plan extends React.Component {
    render() {
        return (
            <div className="plan">
                <header className="top">
                    <Link to="/todo/list" className="bar-link"><span className="icon icon-daily"> </span></Link>
                    <Link to="/plan/add" className="bar-link"><span className="icon icon-add"> </span></Link>
                    <Link to="/plan/list"><h1>Planing</h1></Link>
                </header>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Plan;