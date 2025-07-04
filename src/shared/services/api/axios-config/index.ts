import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';
import { Environment } from '../../../environment';

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error), //passando os interceptos criados para a instancia base do Axios
);

export { Api };
