import * as types from '../constants/ActionTypes';

export function changeTodoText(text) {
  return { type: types.CHANGE_TODO_TEXT, text}
}
