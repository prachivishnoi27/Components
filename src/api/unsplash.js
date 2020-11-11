import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID uKs9IVjU0X8uqu-m3sc8JZjQK5Rd8OGcay36xje4eDk'
    }
});