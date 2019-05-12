import APIService from '../../APIService';
import {LOGIN_USER} from './SighUpActionsTypes';

export function registration(login, email, password1, password2) {
    return async (dispatch) => {
        try {
            const data = await APIService.registration(login, email, password1, password2);
        } catch (e) {
            // TODO: error popup
            console.log('ERROR!', e);
        }
    };
}
