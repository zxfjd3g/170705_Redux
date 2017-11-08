/*
reducer函数模块
 */
export default function counter(state=1, action) {
  console.log('counter()', state, action)
  switch (action.type) {
    case 'INCREMENT':
      return state + action.number
    case 'DECREMENT':
      return state - action.number
    default:
      return state
  }
  return
}