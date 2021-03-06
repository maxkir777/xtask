import {registration} from "./components/SighUp/SighUpActions";

const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';

const ENDPOINT = 'http://127.0.0.1:8000/';
const API = 'api/v1/';

function createUrlString(url, getParams = null) {
  if (!getParams || Object.keys(getParams).length === 0) return url;
  // eslint-disable-next-line no-undef
  return url + (url.includes('?') ? '&' : '?') + $.param(getParams);
}

class Service {
  instance = null;

  constructor() {
    if (!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  static async fetchResponse(url, method, body, headers) {
    // eslint-disable-next-line curly,no-param-reassign
    headers = headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // TODO: Better solution
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;

    return fetch(url, {
      headers,
      method,
      timeout: 0,
      body,
    });
  }

  static async fetch(url, method = POST, body = null, headers = null) {
    const response = await Service.fetchResponse(url, method, body, headers);
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`${error}`);
    }
    return response.json();
  }

  static async auth(login, password) {
    const data = {
      username: login,
      password
    };
    const url = `${ENDPOINT}${API}token/`;
    return Service.fetch(url, POST, JSON.stringify(data));
  }


  static async registration(login, email, password1, password2) {
    const data = {
      username: login,
      email: email,
      password1,
      password2
    };
    const url = `${ENDPOINT}${API}registration/`;
    return Service.fetch(url, POST, JSON.stringify(data));
  }

  static async addBoard(name) {
    const data = {
      name
    };
    const url = `${ENDPOINT}${API}boards/`;
    return Service.fetch(url, POST).getBoards()
  }

  static async getBoards() {
    const url = `${ENDPOINT}${API}boards/`;
    return Service.fetch(url, GET)
  }

  static async getDetailBoard(id) {
    const url = `${ENDPOINT}${API}boards/${id}/`;
    return Service.fetch(url, GET)
  }

  static async editCard(id, data) {
    const url = `${ENDPOINT}${API}cards/${id}/`;
    return Service.fetch(url, PATCH, JSON.stringify(data))
  }

  static async editList(id, data) {
    const url = `${ENDPOINT}${API}lists/${id}/`;
    return Service.fetch(url, PATCH, JSON.stringify(data))
  }
}

export default Service;
