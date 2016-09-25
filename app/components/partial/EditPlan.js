import React from 'react';
import EditPlanActions from '../../actions/EditPlanActions';
import EditPlanStore from '../../stores/EditPlanStore';

class EditPlan extends React.Component{
	constructor(props) {
		super(props);
		this.state = EditPlanStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		EditPlanStore.listen(this.onChange);
		EditPlanActions.getPlanData(this.props.params.id);
	}

	componentWillUnmount() {
		EditPlanStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleProgress(event) {
		EditPlanActions.handleProgress(event.target.value);
	}
	
	handleSubmit() {
		if((this.state.newProgress != this.state.progress) || (this.state.record != '')){
			EditPlanActions.submitPlan(this.state.newProgress, this.state.record, this.state._id);
		}else{
			alert("Please input some in the plan content!");
		}
	}

	handleRecord(event) {
		EditPlanActions.handleRecord(event.target.innerHTML);
	}

    render() {
		var processItem;
		if(this.state.process.length != 0){
			processItem = this.state.process.map((process, index) => {
				return (<li key={process._id}>{process.content}</li>)
			});
		}
        return (
            <div className="add">
				<form className="form form-plan" action="">
					<p className="tip">Your plan</p>
					<p className="plan-des">{this.state.content}</p>
					<p className="tip">Progress</p>
					<div className="progress">
						<span>{this.state.newProgress}%</span>
						<input onChange={this.handleProgress.bind(this)} className="rangeInput" type="range" min="0" max="100" defaultValue={'"' + this.state.progress + '"'} />
					</div>
					<p className="tip">Your record</p>
					<div onKeyUp={this.handleRecord.bind(this)} contentEditable="true" className="edit-box"></div>
					<a onClick={this.handleSubmit.bind(this)} className={(this.state.submit) ? "submit" : "submit off"}><span className="icon icon-tick"> </span></a>
				</form>
				<ul className="process">
					{processItem}
				</ul>
            </div>
        );
    }
}

export default EditPlan;