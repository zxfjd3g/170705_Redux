import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import counter from './reducers'

// 創建一個store對象
const store = createStore(counter) // 创建一个store对象, 指定reducer, 此时就会第一次调用reducer函数, 得到初始状态

// 渲染<provider>, 包含容器组件标签App
ReactDOM.render(
  (
    <Provider store={store}>
      <App></App>
    </Provider>
  ),
  document.getElementById('root')
)
