import APIService from '../../APIService';
import {LOGIN_USER} from './SignInActionsTypes';

export function authenticate(login, password) {
  return async (dispatch) => {
    try {
      const data = await APIService.auth(login, password);
      localStorage.setItem('token', data.access);
      dispatch({
        type: LOGIN_USER,
        payload: {
          username: 'test'
        }
      });
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  };
}
