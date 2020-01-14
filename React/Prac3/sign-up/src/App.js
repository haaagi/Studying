import React, { Component } from 'react';
import SignUp from './components/SignUp';

class App extends Component {
  id = 0
  state= {
    userInfo: [],
  }
  handleCreate = (data) => {
    const { userInfo } = this.state;
    this.setState({
      userInfo: userInfo.concat({id: this.id++, ...data})
    })
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <SignUp onCreate={this.handleCreate}/>
        {JSON.stringify(userInfo)}
      </div>
    )
  }
}

export default App;