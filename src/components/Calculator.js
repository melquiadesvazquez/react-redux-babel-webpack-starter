import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as types from '../types';

class Calculator extends React.Component {
  state = {
    op1: 0,
    op2: 0
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { op1, op2 } = this.state;
    const { result, dispatch } = this.props;

    return (
      <div>
        <input
          type="number"
          name="op1"
          onChange={this.handleChange}
          value={op1}
          />
        <input
          type="number"
          name="op2"
          onChange={this.handleChange}
          value={op2}
          />
        <input
          type="button"
          value="+"
          onClick={() => dispatch({ type: types.ADD, op1, op2  })}
          />
        <input
          type="button"
          value="-"
          onClick={() => dispatch({ type: types.SUBTRACT, op1, op2 })}
          />
        <input
          type="button"
          value="x"
          onClick={() => dispatch({ type: types.MULTIPLY, op1, op2 })}
          />
        <input
          type="button"
          value="/"
          onClick={() => dispatch({ type: types.DIVIDE, op1, op2 })}
          />
          {' = '}
          {result}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    result: state.calculator.result
  }
};


export default connect(mapStateToProps)(Calculator);