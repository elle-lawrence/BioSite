import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getAllProjects;
