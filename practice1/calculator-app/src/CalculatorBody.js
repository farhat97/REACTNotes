import React from 'react';
import './App.css';

import CalcButton from './CalcButton';

class CalculatorBody extends React.Component {
    
    // test: callback function
    callbackFunction = (childData) => {
        console.log('From body, the data is ', childData);
    }
    
    renderButton(i) {
        return <CalcButton  value={i} parentCallback={this.callbackFunction}/>
    }

    render() {
        return(
            <div className="calculatorBody">
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