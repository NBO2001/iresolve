import axios from 'axios';

export default axios.create({
    baseURL: 'https://apiquestions.herokuapp.com'
});