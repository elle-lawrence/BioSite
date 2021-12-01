import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getTechStack = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/techStack.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getTechStack;
