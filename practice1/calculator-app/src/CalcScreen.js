import React from 'react';

class CalcScreen extends React.Component {
    state = {
        firstNumber: null,
        operation: null,
        secondNumber: null
    }

    render() {
        return(
            <div style={{height: '70px'}}>
                <p> screen </p>
            </div>
        )
    }
}

export default CalcScreen;