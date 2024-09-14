import React, { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import { getUserProfile } from '../services/profileService';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    photo: '',
    name: '',
    bio: '',
    phone: '',
    email: '',
    password: '',
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfileData = (updatedData) => {
    setProfileData(updatedData);
    setIsEditing(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getUserProfile();
        setProfileData(data);
      } catch (error) {
        console.error('Error al obtener datos del perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Personal info</h2>
        <p className="text-gray-500 mb-8">Basic info, like your name and photo</p>

        {isEditing ? (
          <EditProfile profileData={profileData} saveProfileData={saveProfileData} />
        ) : (
          <div>
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={profileData.photo || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{profileData.name}</h3>
                  <p className="text-gray-600">{profileData.bio}</p>
                </div>
              </div>
              <button
                onClick={toggleEdit}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Edit
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Phone:</span>
                <span>{profileData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{profileData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Password:</span>
                <span>{profileData.password}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
