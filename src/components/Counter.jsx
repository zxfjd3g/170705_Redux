import React, {Component, PropTypes} from 'react'

export default class Counter extends Component {
  /*state = { 类的实例对象的属性
    count: 0
  }*/
  static propTyes = { // 类的属性
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  increment = () => {
    const number = this.refs.number.value*1
    this.props.increment(number)
  }

  decrement = () => {
    const number = this.refs.number.value*1
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    let count = this.props.count
    if(count%2===1) {
      const number = this.refs.number.value*1
      this.props.increment(number)
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const number = this.refs.number.value*1
      this.props.increment(number)
    }, 1000)
  }

  render () {
    const {count} = this.props
    return (
      <div>
        <p>Clicked: {count} times</p>
        <select ref="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> {' '}
        <button onClick={this.increment}>+</button>{' '}
        <button  onClick={this.decrement}>-</button>{' '}
        <button  onClick={this.incrementIfOdd}>increment if odd</button>{' '}
        <button  onClick={this.incrementAsync}>increment async</button>{' '}
      </div>
    )
  }
}

