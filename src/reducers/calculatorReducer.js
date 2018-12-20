import * as types from '../types';

const initialState = {result: 0};

const calculatorReducer = (state = initialState, action = {}) => {
  const op1 = action.op1 && parseInt(action.op1) || 0;
  const op2 = action.op1 && parseInt(action.op2) || 0;

  let result = state.result;

  switch (action.type) {
    case types.ADD:
      result = op1 + op2;
      break;
    case types.SUBTRACT:
      result = op1 - op2;
      break;
    case types.MULTIPLY:
      result =  op1 * op2;
      break;
    case types.DIVIDE:
      result =  op1 / op2;
      break;
  };

  return {...state, result};
};

export default calculatorReducer;

