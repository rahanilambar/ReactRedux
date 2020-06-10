import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})

axiosInstance.interceptors.request.use((config) => {
    let token = sessionStorage.getItem('token');
    if(token){
        config.headers['authorization'] = token;
        config.headers['Content-Type'] = 'application/json';
    }
    return config
}, (err) => {
    return Promise.reject(err)
})

export default axiosInstance;