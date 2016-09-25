import React from 'react';
import AddPlanActions from '../../actions/AddPlanActions';
import AddPlanStore from '../../stores/AddPlanStore';

class AddPlan extends React.Component{
	constructor(props) {
		super(props);
		this.state = AddPlanStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddPlanStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AddPlanStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleContent(event) {
		AddPlanActions.activeSubmit(event.target.innerHTML);
	}

	handleProgress(event) {
		AddPlanActions.handleProgress(event.target.value);
	}
	
	handleSubmit() {
		var content = this.state.content;
		if(content == ''){
			alert("Please input some in the plan content!");
		}else{
			AddPlanActions.submitPlan(this.state.content, this.state.progress);
		}
	}

    render() {
        return (
            <div className="add">
				<form className="form form-plan" action="">
					<p className="tip">Your plan</p>
					<div onKeyUp={this.handleContent.bind(this)} contentEditable="true" className="edit-box plan-edit">
					</div>
					<p className="tip">Progress</p>
					<div className="progress">
						<span>{this.state.progress}%</span>
						<input onChange={this.handleProgress.bind(this)} className="rangeInput" type="range" min="0" max="100" defaultValue="0" />
					</div>
					<a onClick={this.handleSubmit.bind(this)} className={(this.state.submit) ? "submit" : "submit off"}><span className="icon icon-tick"> </span></a>
				</form>
				<ul className="process">
				</ul>
            </div>
        );
    }
}

export default AddPlan;