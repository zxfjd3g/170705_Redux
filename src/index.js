import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import {createStore} from 'redux'
import counter from './reducers'

// 創建一個store對象
const store = createStore(counter) // 创建一个store对象, 指定reducer, 此时就会第一次调用reducer函数, 得到初始状态

// 定义创建action的函数
const incrementAction = (number) => ({type: 'INCREMENT', number})
const decrementAction = (number) => ({type: 'DECREMENT', number})

// 用于调用dispatch()更新状态的函数
const increment = (number) => store.dispatch(incrementAction(number))
const decrement = (number) => store.dispatch(decrementAction(number))

// 渲染组件标签的函数
function render () {
  console.log('render()')
  ReactDOM.render(
    <Counter count={store.getState()} increment={increment} decrement={decrement}/>,
    document.getElementById('root')
  )
}
// 初始化渲染
render()

// 订阅监听(当产生了新的state, 就对组件重新渲染)
store.subscribe(render)