import * as types from '../types';

export const add = (op1, op2) => ({
  type: types.ADD,
  op1,
  op2
});

export const decrement = (op1, op2) => ({
  type: types.DECREMENT,
  op1,
  op2
});

export const multiply = (op1, op2) => ({
  type: types.MULTIPLY,
  op1,
  op2
});

export const divide = (op1, op2) => ({
  type: types.DIVIDE,
  op1,
  op2
});