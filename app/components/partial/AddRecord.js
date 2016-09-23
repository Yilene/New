import React from 'react';

class AddRecord extends React.Component{
    render() {
        return (
            <div className="add">
                <form className="form" action="">
                    <div className="mood">
                        <p>How are you feeling today?</p>
                        <input type="hidden" value="3"/>
                        <div className="mood-des">
                            <a className="icon icon-mood"> </a>
                            <a className="icon icon-mood"> </a>
                            <a className="icon icon-mood"> </a>
                        </div>
                    </div>
                    <input type="hidden" value="input"/>
                    <div contentEditable="true" className="edit-box">
                        Dear me...
                    </div>
                    <a className="submit"><span className="icon icon-tick"> </span></a>
                </form>
            </div>
        );
    }
}

export default AddRecord;