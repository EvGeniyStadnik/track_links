import {useState, useEffect} from 'react';

const userData = 'userData';

export const useAuth = () => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userId, token) => {
    setUserId(userId);
    setToken(token);

    localStorage.setItem(userData, JSON.stringify({userId, token}))
  }

  const logout = () => {
    setUserId(null);
    setToken(null);

    localStorage.removeItem(userData);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(userData))
    if(data && data.userId && data.token){
      setUserId(data.userId);
      setToken(data.token);
    }
  }, [])

  return {login, logout, userId, token}
}