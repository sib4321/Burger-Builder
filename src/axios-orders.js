import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-be96d.firebaseio.com/'
});

export default instance;