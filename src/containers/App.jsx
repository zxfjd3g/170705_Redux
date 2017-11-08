import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import * as actions from '../actions'


const mapStateToprops = (state) => ({
  count: state
})



/*const mapDispatchToProps = (dispatch) => ({
  increment: (number) => store.dispatch(actions.increment(number)),
  decrement: (number) => store.dispatch(actions.decrement(number))
})*/

// const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch))
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Counter)