import React from 'react';

class AddPlan extends React.Component{
    render() {
        return (
            <div className="add">
	            <form className="form form-plan" action="">
	            	<time>10:10 Sep 22, 2016</time>
	            	<p className="plan-des">Prepare for the final exam</p>
	            	<p className="tip">Progress</p>
	            	<div className="progress">
						<span>0%</span>
	            		<input className="rangeInput" type="range" min="0" max="100" defaultValue="0" />
	            	</div>
					<div contentEditable="true" className="edit-box">
						Record...
					</div>
					<a className="submit"><span className="icon icon-tick"> </span></a>
	            </form>
				<ul className="process">
					<li>Start</li>
					<li>Go to the library with Edison Zhang</li>
					<li>Go to the library</li>
				</ul>
            </div>
        );
    }
}

export default AddPlan;