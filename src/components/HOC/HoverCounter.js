import React from 'react';
import counterComponent from './HOCComponent'

class HODHoverCounter extends React.Component {
    render() {
        const { incrementCount, counter } = this.props
        return (
            <div>
                <h3 onMouseOver={incrementCount}>Hover on Heading count : {counter} times</h3>
            </div>
        );
    }
}

export default counterComponent(HODHoverCounter)