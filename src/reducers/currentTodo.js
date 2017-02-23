import { CHANGE_TODO_TEXT } from '../constants/ActionTypes';

export default function currentToDo(state = {text: "", id: null}, action) {
  
  switch(action.type) {
    case CHANGE_TODO_TEXT:
      return {text: action.text, id: action.id};
    default:
      return state;
  }
}
