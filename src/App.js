import React from 'react'

import { connect } from 'react-redux'

const App = function (props) {
  const onChange = e => props.setTitle(e.target.value)
  const onIncrClick = e => props.incr()

  return (
    <div className="pa4">
      <h1>{props.title}</h1>
      <input
        value={props.title}
        onChange={onChange} />

      <h1>Counter: {props.counter}</h1>
      <button onClick={onIncrClick}>INCREMENT</button>
      <button onClick={e => props.decr()}>DECREMENT</button>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    title: state.title,
    counter: state.counter
  }
}

const mapActionsToProps = function (dispatch) {
  return {
    setTitle: (txt) => dispatch({type: 'SET_TITLE', payload: txt}),
    incr: () => dispatch({type: 'INCR'}),
    decr: () => dispatch({type: 'DECR'})
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(App)
