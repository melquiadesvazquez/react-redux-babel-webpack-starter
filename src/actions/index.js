import * as types from '../types';

export const fight = (f1, f2) => ({
  type: types.FIGHT,
  f1,
  f2
});
