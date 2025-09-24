
//C'EST POUR LOCAL
// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api',
//   withCredentials: false,
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

//C'EST POUR LE DEPLOIEMENT
import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://api.vendeur-pro.com/api', 
    baseURL: 'https://api.vendeur-pro.com/api', // HTTPS sécurisé

  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});



// const getWebinaires = async () => {
//   try {
//     const res = await axios.get('/webinaire');
//     // ...
//   } catch (e) {
//     console.error(e);
//   }
// };

const getWebinaires = async () => {
  try {
    const res = await apiClient.get('/webinaire');
    // ...
    return res.data;
  } catch (e) {
    console.error(e);
  }
};




apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
}, error => Promise.reject(error));

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
