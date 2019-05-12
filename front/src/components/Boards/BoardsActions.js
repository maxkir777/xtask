import APIService from '../../APIService';

export function getBoards() {
  return async (dispatch) => {
    try {
      const data = await APIService.getBoards();
      console.log(data);
      dispatch({
      });
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  };
}
