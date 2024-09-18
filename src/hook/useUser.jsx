import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/profileService'; 
import { useNavigate } from 'react-router-dom';

export function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const userInfo = await getUserProfile(); 
        setUser(userInfo); 
      } catch (error) {
        alert('Error fetching user info, redirecting to login.'); 
        navigate('/login'); 
      } finally {
        setIsLoading(false); 
      }
    }

    fetchUser();
  }, [navigate]);

  return { user, isLoading };
}
