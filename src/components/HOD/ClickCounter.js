import React from "react";
import counterComponent from './HODComponent'

class HODClickCounter extends React.Component {
    render() {
        const { incrementCount, counter } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked me {counter} times</button>
            </div>
        );
    }
}

export default counterComponent(HODClickCounter);
