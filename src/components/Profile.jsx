import React, { useState } from 'react';
import { useUser } from '../hook/useUser';
import { PersonalInfo } from '../components/PersonalInfo';
import { Link } from 'react-router-dom';

export function PersonalInfoPage() {
  const { user, isLoading } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 relative">
  
        <div className="absolute top-5 right-5">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
              <img
                src={user?.imagen || 'https://via.placeholder.com/40'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-black dark:text-white">{user?.nombre || 'User'}</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-20">
                <Link
                  to="/user/profile"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  My Profile
                </Link>
                <Link
                  to="/group-chat"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Group Chat
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>

      
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl p-8">
          <div className="text-center text-black dark:text-white tracking-tighter mb-8">
            <h1 className="text-4xl">Personal Info</h1>
            <p className="text-lg font-light">Basic info, like your name and photo</p>
          </div>

          {isLoading && <p className="text-center">Loading...</p>}

          {user && <PersonalInfo user={user} />}
        </div>
      </div>
    </>
  );
}

export default PersonalInfoPage;
