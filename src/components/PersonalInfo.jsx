import React from 'react';

export function PersonalInfo({ user }) {
  return (
    <div className="flex flex-col items-center">
    
      <div className="mb-4">
        <img
          src={user.imagen || 'https://via.placeholder.com/100'}
          alt={`${user.nombre}'s profile`}
          className="w-24 h-24 rounded-full object-cover shadow-lg"
        />
      </div>

   
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{user.nombre}</h2>
        <p className="text-gray-600 dark:text-gray-300">{user.correo}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{user.bio}</p> 
      </div>

    
      <div className="mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Member since {new Date(user.fecha_creacion).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated {new Date(user.fecha_actualizacion).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
