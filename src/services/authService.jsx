import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Cambia la URL según tu configuración

// Registro de usuario
export const register = async (email, password) => {
  return axios.post(`${API_URL}/register`, { email, password });
};

// Inicio de sesión
export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
