import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0,
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <h1>
                    카운터
                </h1>
                <div>기존값 : {this.state.number}</div>
                <div>확인해야 할 값: {this.state.foo}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.fooChange}>change</button>
            </div>
        )
    }
}

export default Counter;