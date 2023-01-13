import axios from 'axios';

const fetchNews = () =>
  axios
    .get('https://63c0640c0cc56e5fb0ecfeed.mockapi.io/news')
    .then((response) => response.data);

export default fetchNews;
