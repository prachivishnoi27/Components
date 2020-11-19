import axios from 'axios';

const KEY = 'AIzaSyChpHku6_FR3xxA7t78DDYxKY8IfwtSgv0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});