import * as types from '../types';

const initialState = {winner: 0};

const fightReducer = (state = initialState, action = {}) => {
  const f1 = action.f1;
  const f2 = action.f2;

  let winner = state.winner;

  if (action.type === types.FIGHT) {
    if (f1 === types.ROCK && f2 === types.SCISSORS) {
      winner = 1;
    }
    else
    if (f1 === types.PAPER && f2 === types.ROCK) {
      winner = 1;
    }
    else
    if (f1 === types.SCISSORS && f2 === types.PAPER) {
      winner = 1;
    }
    else
    if (f1 === types.ROCK && f2 === types.PAPER) {
      winner = 2;
    }
    else
    if (f1 === types.PAPER && f2 === types.SCISSORS) {
      winner = 2;
    }
    else
    if (f1 === types.SCISSORS && f2 === types.ROCK) {
      winner = 2;
    }
    else {
      winner = 0;
    }

    return {...state, winner};
  }

  return state;
};

export default fightReducer;
