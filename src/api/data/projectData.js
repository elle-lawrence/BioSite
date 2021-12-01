import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${databaseURL}/projects.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${databaseURL}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllProjects().then(resolve));
    })
    .catch(reject);
});

const updateProject = (formObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${databaseURL}/projects/${formObj.firebaseKey}.json`, formObj)
    .then(() => getAllProjects().then(resolve))
    .catch(reject);
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${databaseURL}/projects/${firebaseKey}.json`)
    .then(() => getAllProjects().then(resolve))
    .catch(reject);
});

export {
  getAllProjects, createProject, updateProject, getSingleProject, deleteProject,
};
