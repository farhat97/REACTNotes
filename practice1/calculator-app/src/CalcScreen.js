import React from 'react';

class CalcScreen extends React.Component {
    /*state = {
        firstNumber: null,
        operation: null,
        secondNumber: null
    }*/

    state = {
        number: '123'
    }

    render() {
        return(
            <div style={{height: '70px'}}>
                <p> {this.props.numberToDisplay} </p>
            </div>
        )
    }
}

export default CalcScreen;