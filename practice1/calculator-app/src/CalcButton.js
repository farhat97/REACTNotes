import React from 'react';
import './App.css';

class CalcButton extends React.Component {

    state = {
        value: null
    }
    
    render() {
        return(
            <button className="calcButton">
                {this.props.value}
            </button>
        );
    }
}


export default CalcButton;