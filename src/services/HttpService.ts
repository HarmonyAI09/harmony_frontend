import http, { http_v2 } from '@/utils/axios';

class HttpService {
  static async get(url: string, params: object = {}) {
    return await http.get(url, { params }).then(response => response.data);
  }

  static async post(url: string, body: object, params: object = {}) {
    return await http
      .post(url, body, { params })
      .then(response => response.data);
  }

  static async put(url: string, body: object, params: object = {}) {
    return await http
      .put(url, body, { params })
      .then(response => response.data);
  }

  static async delete(url: string, params: object = {}) {
    return await http.delete(url, { params }).then(response => response.data);
  }
}

class Http2Service {
  static async get(url: string, params: object = {}) {
    return await http_v2.get(url, { params }).then(response => response.data);
  }

  static async post(url: string, body: object, params: object = {}) {
    return await http_v2
      .post(url, body, { params })
      .then(response => response.data);
  }

  static async put(url: string, body: object, params: object = {}) {
    return await http_v2
      .put(url, body, { params })
      .then(response => response.data);
  }

  static async delete(url: string, params: object = {}) {
    return await http_v2
      .delete(url, { params })
      .then(response => response.data);
  }
}

export default HttpService;
export { Http2Service };
