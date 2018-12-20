import { combineReducers } from 'redux';
import fightReducer from './fightReducer';

const rootReducer = combineReducers({
  fight: fightReducer
});

export default rootReducer;