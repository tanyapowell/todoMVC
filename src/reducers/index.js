import { combineReducers } from 'redux';
import todos from './todos';
import currentToDo from './currentToDo';

const rootReducer = combineReducers({
  todos,
  currentToDo
});

export default rootReducer;
