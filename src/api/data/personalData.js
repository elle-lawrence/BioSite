import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;
const key = '-MpEPXWW_vSsZSq4CPvg';

const getAllPersonal = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/personal/${key}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updatePersonal = (object) => new Promise((resolve, reject) => {
  axios
    .patch(`${databaseURL}/personal/${key}.json`, object)
    .then(() => getAllPersonal().then(resolve))
    .catch(reject);
});

export { getAllPersonal, updatePersonal };
