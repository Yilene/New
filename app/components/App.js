import React from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = AppStore.getState();
    }

    componentDidMount() {
        AppActions.createDailyData();
    }
    
    render() {
        return (
            <div className='container' >
                {this.props.children}
            </div>
        );
    }
}

export default App;