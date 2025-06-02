// src/services/authService.js
import api from './api';

export default {
  register(userData) {
    return api.post('/register', userData);
  },

  login(credentials) {
    return api.post('/login', credentials);
  },

  getProfile() {
    return api.get('/profile');
  },

  logout() {
    return api.post('/logout')
      .finally(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      });
  }
};
