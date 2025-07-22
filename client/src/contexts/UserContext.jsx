import { createContext, useState, useContext, useEffect } from 'react';
import {
  loginUser,
  logoutUser,
  fetchCurrentUser,
  registerUser as apiRegisterUser
} from '../services/userService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!user && token) {
      fetchCurrentUser()
        .then(data => {
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data));
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem('user');
          localStorage.removeItem('token');
        });
    }
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data.token) {
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.token);
    }
    return data;
  };

  const register = async (userData) => {
    const data = await apiRegisterUser(userData);
    return data;
  };

  const logout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};