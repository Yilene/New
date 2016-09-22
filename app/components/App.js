import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        );
    }
}

export default Home;