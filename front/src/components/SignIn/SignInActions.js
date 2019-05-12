import APIService from '../../APIService';

export function authenticate(login, password) {
  return async () => {
    try {
      const data = await APIService.auth(login, password);
      console.log(data);
    } catch (e) {
      // TODO: error popup
      console.log('ERROR!', e);
    }
  };
}
