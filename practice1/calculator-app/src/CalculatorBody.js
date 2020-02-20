import React from 'react';
import './App.css';

import CalcButton from './CalcButton';
import CalcScreen from './CalcScreen';

class CalculatorBody extends React.Component {

    state = {
        currentNumber: ''
    }
    
    // get the value from the calculator button
    getValue = (btnValue) => {
        console.log('From body, the data is ', btnValue);

        // update calcbody state
        this.setState({currentNumber: this.state.currentNumber.concat(btnValue)});
    }
    renderButton(i) {
        return <CalcButton  value={i} getButtonValue={this.getValue} setButtonValue={i}/>
    }

    render() {
        return(
            <div className="calculatorBody">
                <div className="calculatorScreen">
                    <CalcScreen numberToDisplay={this.state.currentNumber}/>
                </div>
                <div className="calcRow">
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton('/')}
                </div>
                <div className="calcRow">
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton('-')}
                </div>
                <div className="calcRow">
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton('+')}
                </div>
                <div>
                    {this.renderButton(0)}
                    {this.renderButton('=')}
                    {this.renderButton('*')}
                </div>
            </div>
        )
    }
}

export default CalculatorBody;