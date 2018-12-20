import React, {Component} from 'react';
import {connect} from 'react-redux';
import { MYACTION } from '../types'

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        This is my property {this.props.myProperty}?
        <input
          type="button"
          value="Change property"
          onClick={() => this.props.dispatch({ type: MYACTION, payload: this.props.myProperty })}
          />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    myProperty: state.myReducer.myProperty
  }
};


export default connect(mapStateToProps)(MyComponent);