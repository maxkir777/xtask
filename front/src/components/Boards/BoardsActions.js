import APIService from '../../APIService';
import {GET_BOARDS} from './BoardsActionsTypes';

export function getBoards() {
  return async (dispatch) => {
    try {
      const data = await APIService.getBoards();
      dispatch({
        type: GET_BOARDS,
        payload: data
      });
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  };
}

