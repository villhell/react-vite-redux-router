import axios from 'axios';

const repository = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default (resource) => {
  return {
    index() {
      return repository.get(resource);
    },
    show(id) {
      return repository.get(`${resource}/${id}`);
    },
    post(payload) {
      return repository.post(resource, payload);
    },
    delete(id) {
      return repository.delete(`${resource}/${id}`);
    },
  };
};
