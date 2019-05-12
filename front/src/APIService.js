function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (`${name}=`)) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const GET = 'GET';
const POST = 'POST';
// const PATCH = 'PATCH';

const ENDPOINT = '/';
const API = 'api/v1/';

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

const csrftoken = getCookie('csrftoken');

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
    // eslint-disable-next-line no-param-reassign
    if (!csrfSafeMethod(method)) headers['X-CSRFToken'] = csrftoken;
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
      login,
      password
    };
    const url = `${ENDPOINT}${API}token/`;
    return Service.fetch(url, POST, data);
  }
}

export default Service;
