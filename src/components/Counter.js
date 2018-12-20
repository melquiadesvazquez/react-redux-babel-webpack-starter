import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as types from '../types';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <input
          type="button"
          value="-"
          onClick={() => this.props.dispatch({ type: types.DECREMENT })}
          />
        {this.props.counter}
        <input
          type="button"
          value="+"
          onClick={() => this.props.dispatch({ type: types.INCREMENT })}
          />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};


export default connect(mapStateToProps)(Counter);