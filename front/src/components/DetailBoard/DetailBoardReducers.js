import {FETCH_BOARD, FETCH_CARD} from './DetailBoardActionsTypes';

export function boardInfo(state = {lists: []}, action) {
  switch (action.type) {
    case FETCH_BOARD:
      return action.payload;
    // case FETCH_CARD:
    //   console.log(state);
    //   const newCard = action.payload;
    //   const foundCard = state.lists.filter(list => list.cards.some(card => card.id === newCard.id));
    //   console.log('foundCard', foundCard);
    //   return state;
    default:
      return state;
  }
}
