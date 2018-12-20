import * as types from '../types';

const initialState = {myProperty: 'any'};

const myReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.MYACTION:
      return { ...state, myProperty: (action.payload === 'other')? 'any':'other' };
    default:
      return state;
  }
};

export default myReducer;