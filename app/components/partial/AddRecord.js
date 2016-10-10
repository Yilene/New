import React from 'react';
import AddRecordActions from '../../actions/AddRecordActions';
import AddRecordStore from '../../stores/AddRecordStore';

class AddRecord extends React.Component{
    constructor(props) {
        super(props);
        this.state = AddRecordStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddRecordStore.listen(this.onChange);
        AddRecordActions.getDailyData(this.props.params.id);
    }

    componentWillUnmount() {
        AddRecordStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleDailyRecord(event) {
        AddRecordActions.handleDailyRecord(event.target.innerHTML);
    }

    handleSubmit() {
        AddRecordActions.handleSubmit(this.state.mood, this.state.record, this.props.params.id);
    }

    handleMood(mood) {
        if(this.state.mood != mood){
            AddRecordActions.changeMood(mood);
        }
    }

    render() {
        var moods,moodDes;
        
        if(this.state._id != '') {
            var moodArray = [];
            for (let i = 0; i < 3; i++) {
                if (i < this.state.mood) {
                    moodArray.push({love: true});
                } else {
                    moodArray.push({love: false});
                }
            }
            var that = this;
            moods = moodArray.map(function (mood, index) {
                return <a onClick={that.handleMood.bind(that, index + 1, that.state._id)} key={index}
                          className={mood.love ? "icon icon-love" : "icon icon-mood"}> </a>
            });
            switch (this.state.mood) {
                case 0:
                    moodDes = <p>How are you feeling today?</p>;
                    break;
                case 1:
                    moodDes = <p>A bad day!</p>;
                    break;
                case 2:
                    moodDes = <p>A normal day!</p>;
                    break;
                case 3:
                    moodDes = <p>A exciting day!</p>;
                    break;
            }
        }

        return (
            <div className="add">
                <form className="form" action="">
                    <div className="mood">
                        {moodDes}
                        <div className="mood-des">
                            {moods}
                        </div>
                    </div>
                    <div onKeyUp={this.handleDailyRecord.bind(this)} contentEditable="true" className="edit-box">
                    </div>
                    <a onClick={this.handleSubmit.bind(this)} className={this.state.submit ? "submit":"submit off"}><span className="icon icon-tick"> </span></a>
                </form>
            </div>
        );
    }
}

export default AddRecord;