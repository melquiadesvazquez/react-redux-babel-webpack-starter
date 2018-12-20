import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as types from '../types';
import Fighter from './Fighter';

class Fight extends React.Component {
  state = {
    f1: types.ROCK,
    f2: types.PAPER
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
    const { f1, f2 } = this.state;
    const { winner, dispatch } = this.props;

    return (
      <div>
        <Fighter
          name="f1"
          value={f1}
          onChange={this.handleChange}
          />
        {' vs '}
        <Fighter
          name="f2"
          value={f2}
          onChange={this.handleChange}
          />

        <input
          className="btn"
          type="button"
          value="👊"
          onClick={() => dispatch({ type: types.FIGHT, f1, f2  })}
          />
          {' = '}
          {winner}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    winner: state.fight.winner
  }
};


export default connect(mapStateToProps)(Fight);