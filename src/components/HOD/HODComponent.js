import React from 'react'

// ...create a function which take argument as component...
const counterComponent = WrappedComponent => {

  // ...and returns another component...
  return class extends React.Component {

    //...wrap your common logic here....
    constructor() {
      super();
      this.state = {
        counter: 0,
      };

      this.incrementCount = this.incrementCount.bind(this);
    }

    //... your common function will be here ....
    incrementCount() {
      this.setState((preState) => {
        return {
          counter: preState.counter + 1,
        };
      });
    }

    render() {
      // Notice that we pass through any additional props
      return <WrappedComponent counter={this.state.counter} incrementCount={this.incrementCount} />;
    }
  };
}

export default counterComponent