import {FETCH_BOARD} from './DetailBoardActionsTypes';

export function boardInfo(state = {name: ''}, action) {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload;
    default:
      return state;
  }
}
