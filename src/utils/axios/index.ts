import axios from "axios";

const token = sessionStorage.getItem('token')

export const instance = axios.create({
    baseURL: 'http://localhost:7000/',
    timeout: 4000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const instanceAuth = axios.create({
    baseURL: 'http://localhost:7000/',
    timeout: 4000,
    headers: {
        'X-Custom-Header': 'foobar',
        Authorization: `Bearer ${token}`
    }
});

export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    timeout: 4000,
    headers: {'X-Custom-Header': 'foobar'}
});