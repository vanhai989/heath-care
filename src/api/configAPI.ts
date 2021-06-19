import axios, {AxiosInstance} from 'axios';
import AppConfig from '../config/AppConfig';
import DebugConfig from '../config/DebugConfig';
import {store} from '../redux/store/configureStore';

const apiLogRequest = (apiName: string, axiosRequest: any) => {
  console.group &&
    console.group(
      '%cAPI Request',
      'color:white;font-weight:bold;background:#0194ff;padding:2px 6px',
      apiName,
    );
  console.log('HTTP Method\t\t', axiosRequest.method.toUpperCase());
  console.log('Endpoint\t\t', axiosRequest.url);
  axiosRequest.data && console.log('Request Body\t', axiosRequest.data);
  console.log('AXIOS Request\t', axiosRequest);
  console.groupEnd && console.groupEnd();
};

const apiLogResponse = (apiName: string, axiosResponse: any) => {
  console.log(axiosResponse);
  console.group &&
    console.group(
      '%cAPI Response',
      'color:white;font-weight:bold;background:green;padding:2px 6px',
      apiName,
    );
  console.log('HTTP Method\t\t', axiosResponse.config.method.toUpperCase());
  console.log('Endpoint\t\t', axiosResponse.config.url);
  axiosResponse.config.data &&
    console.log('Request Body\t', axiosResponse.config.data);
  axiosResponse.data && console.log('Response Body\t', axiosResponse.data);
  console.log('AXIOS Response\t', axiosResponse);
  console.groupEnd && console.groupEnd();
};

const apiLogError = (apiName: string, error: any) => {
  console.log('error', error);
  console.group &&
    console.group(
      '%cAPI Response',
      'color:white;font-weight:bold;background:red;padding:2px 6px',
      apiName,
    );
  console.log('HTTP Method\t\t', error.config.method.toUpperCase());
  console.log('Endpoint\t\t', error.config.url);
  error &&
    error.config.data &&
    console.log('Request Body\t', error.config.data);
  error && error.data && console.log('Response Body\t', error.data);
  console.log('AXIOS Error\t', error);
  console.groupEnd && console.groupEnd();
};

const client: AxiosInstance = axios.create(AppConfig.axios);

const _loggingRequest = (request: any) => {
  const apiName = request.url || 'UNKNOWN';
  apiLogRequest(apiName, request);
  return request;
};

const _configRequest = (request: any) => {
  if (
    request.url &&
    !request.url.includes('login') &&
    !request.url.includes('register')
  ) {
    const {access_token} = store.getState().user;
    if (access_token) {
      request.headers.Authorization = `${access_token}`;
    }
  }
};

const _loggingRequestError = (error: any) => {
  console.log('API Error', error);
  return error;
};

const _loggingResponse = (response: any) => {
  const apiName = response.config.url || 'UNKNOWN';
  apiLogResponse(apiName, response);
  return response;
};

const _loggingResponseError = (error: any) => {
  if (error.response) {
    const apiName = error.config.url || 'UNKNOWN';
    apiLogError(apiName, error.response);
  } else if (error.request) {
    const apiName = error.config.headers.X_HEADER_API_LOG || 'UNKNOWN';
    apiLogError(apiName, error.request);
  } else {
    console.log('API Error', error.message);
  }
  throw error;
};

if (DebugConfig.logging) {
  client.interceptors.request.use(_loggingRequest, _loggingRequestError);
  client.interceptors.response.use(_loggingResponse, _loggingResponseError);
}
client.interceptors.request.use(
  (request: any) => {
    _configRequest(request);
    return request;
  },
  () => null,
);

const clientMethod = (a: AxiosInstance) => {
  return {
    post(endpoint: string, mParams: any, config: any = {}) {
      return a.post(endpoint, mParams, config);
    },
    put(endpoint: string, mParams: any, config: any = {}) {
      return a.put(endpoint, mParams, config);
    },
    get(endpoint: string, config: any = {}) {
      return a.get(endpoint, config);
    },
    delete(endpoint: string, config: any = {}) {
      return a.delete(endpoint, config);
    },
  };
};

const myClient = clientMethod(client);

export default myClient;
