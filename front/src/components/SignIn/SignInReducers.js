import { LOGIN_USER } from './SignInActionsTypes'

export function loginUser(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}
