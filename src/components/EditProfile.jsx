import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ profileData, saveProfileData }) => {
  const [formData, setFormData] = useState(profileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      saveProfileData(response.data); // Guardar los datos actualizados
    } catch (error) {
      console.error('Error al guardar los datos del perfil:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center">
        <label className="w-32 font-semibold">Photo:</label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <label className="w-32 font-semibold">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <label className="w-32 font-semibold">Bio:</label>
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <label className="w-32 font-semibold">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <label className="w-32 font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <label className="w-32 font-semibold">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-lg"
          onClick={() => saveProfileData(profileData)}
        >
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
