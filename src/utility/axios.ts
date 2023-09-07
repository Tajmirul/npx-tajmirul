import axios from 'axios';

export const localAxios = axios.create({
    baseURL: 'https://me-back.toinfinite.dev',
});
