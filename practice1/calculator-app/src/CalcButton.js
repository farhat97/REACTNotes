import React from 'react';
import './App.css';

class CalcButton extends React.Component {

    state = {
        value: null
    }

    sendData = () => {
        this.props.parentCallback('this is from child');
    }
    
    render() {
        return(
            <button className="calcButton" onClick={this.sendData}>
                {this.props.value}
            </button>
        );
    }
}


export default CalcButton;