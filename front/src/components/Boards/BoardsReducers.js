import {GET_BOARDS} from './BoardsActionsTypes';

export function allUserBoards(state = [], action) {
  switch (action.type) {
    case GET_BOARDS:
      return action.payload;
    default:
      return state;
  }
}
