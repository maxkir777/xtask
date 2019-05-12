import {LOGIN_USER, REGISTRATION_USER} from './SighUpActionsTypes'

export function registrationUser(state = {}, action) {
    switch (action.type) {
        case REGISTRATION_USER:
            return action.payload;
        default:
            return state;
    }
}
