import React, {Component} from 'react'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      })
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Incrmeent Counter
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          Decrement Counter
        </button>

        {this.state.counter === 0 && (
          <p data-test="below-zero">{`Counter: ${this.state.counter} can't go below 0`}</p>
        )}
      </div>
    )
  }
}

export default App
