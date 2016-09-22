import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1 className="date">Sep 22, 2016</h1>
                <div className="greet">
                    <p>Hi, Ilene</p>
                    <p>A new day, a new goal</p>
                </div>
                <div className="mood">
                    <p>How are you feeling today?</p>
                    <div className="mood-des">
                        <a className="icon icon-mood"> </a>
                        <a className="icon icon-mood"> </a>
                        <a className="icon icon-mood"> </a>
                    </div>
                </div>
                <div className="interact">
                    <a className="add">New+</a>
                    <div className="list">
                        <ul>
                            <li>Go and get some food</li>
                            <li>Have dinner</li>
                        </ul>
                        <div className="more">
                            MORE...
                        </div>
                    </div>
                    <div className="record">
                        <p>
                            Dear dairy,
                            It’s really a funny day,for what? I got a ticket to the concert,who? Taylor Swift,I really like her songs,and her live guitar show. So,it’s a day worth to celebrate.
                        </p>
                        <div className="more">
                            MORE...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;