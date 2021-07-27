import React, { Component } from 'react';

// FunctionComponent
const App = () => (<Counter></Counter>)

class Counter extends Component {
  // インスタンスが作成される際、一番最初に呼び出される
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
