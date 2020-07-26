import React from 'react';


class HoverCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState(preState => {
            return {
                counter: preState.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h3 onMouseOver={this.incrementCount}>Hover on Heading count : {this.state.counter} times</h3>
            </div>
        );
    }
}

export default HoverCounter;