import APIService from '../../APIService';
import {FETCH_BOARD, FETCH_CARD} from './DetailBoardActionsTypes';

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

export function onCardEdit(boardId, cardId, cardData) {
  return async (dispatch) => {
    try {
      await APIService.editCard(cardId, cardData);
      const newData = await APIService.getDetailBoard(boardId);
      dispatch({
        type: FETCH_BOARD,
        payload: newData
      });
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  }
}

export function onListEdit(boardId, listId, listData) {
  return async (dispatch) => {
    try {
      await APIService.editList(listId, listData);
      const newData = await APIService.getDetailBoard(boardId);
      dispatch({
        type: FETCH_BOARD,
        payload: newData
      });
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  }

}
