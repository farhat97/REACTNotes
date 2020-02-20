import React from 'react';
import './App.css';

class CalcButton extends React.Component {

    state = {
        value: this.props.setButtonValue
    }

    sendData = () => {
        this.props.getButtonValue(this.state.value);
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