import axios from 'axios';

const api = axios.create({
    baseUrl: "https://backend-week6.herokuapp.com"
});

export default api;