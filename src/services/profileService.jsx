import axios from 'axios';

export const getUserProfile = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/users/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    });
    return response.data; 
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    throw error; 
  }
};
