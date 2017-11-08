// 本质是多个action creators, 但工作中交流说: actions
export const increment = (number) => ({type: 'INCREMENT', number})
export const decrement = (number) => ({type: 'DECREMENT', number})