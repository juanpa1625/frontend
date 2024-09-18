import React, { useState } from 'react';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ correo: email, contraseña: password });
      alert('Inicio de sesión exitoso');
      window.location.href = '/profile';  
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
           login
          </button>
        </form>

     
        <div className="mt-6 text-center">
            <p className="mb-4">or continue with these social profile</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-200 p-2 rounded-full">
                <img src="./facebook.PNG" alt="Google" className="w-6 h-6" />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <img src="./github.PNG" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <img src="./google.PNG" alt="Twitter" className="w-6 h-6" />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <img src="./twitter.PNG" alt="GitHub" className="w-6 h-6" />
              </button>
            </div>
          </div>

       
        <div className="mt-6 text-center">
          <p>
            Don't have an account yet?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
