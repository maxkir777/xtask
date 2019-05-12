import APIService from '../../APIService';
import {FETCH_BOARD} from './DetailBoardActionsTypes';

export function fetchDetailBoard(id) {
  return async (dispatch) => {
    try {
      const data = await APIService.getDetailBoard(id);
      dispatch({
        type: FETCH_BOARD,
        payload: data
      });
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  };
}
