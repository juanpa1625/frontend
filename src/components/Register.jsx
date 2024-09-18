import React, { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';  

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();  

 
  const validateForm = () => {
    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return false;
    }
    setError('');  
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    setLoading(true);  

    try {
      await register({ correo: email, contraseña: password });
      alert('Usuario registrado con éxito');
      navigate('/login');  
    } catch (err) {
      setError('Error al registrar usuario');
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <header>
          <h1 className="font-semibold text-lg mt-7">
            Join thousands of learners from
            <br /> around the world
          </h1>
        </header>
        <main>
          <p className="mt-3.5">
            Master web development by making real-life projects. There are multiple paths for you to choose
          </p>
          <h2 className="text-2xl font-semibold mb-6 mt-6">Registrarse</h2>
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
              disabled={loading}  
            >
              {loading ? 'Cargando...' : 'Start coding now'}
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
              Already a member?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
