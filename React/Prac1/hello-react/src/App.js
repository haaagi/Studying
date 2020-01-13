import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    const name = 'hi react';
    return (
      <Fragment>
        <div>
          <MyName name="jbh"></MyName>
        </div>
        <div>
          <Counter />
        </div>
      </Fragment>
    )
  }
}

export default App;