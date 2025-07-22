// src/pages/login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import Button from '../../components/Button/Button';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const userData = await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container} data-test="login-page">
      <h1>Login</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-test="email-input"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            data-test="password-input"
          />
        </div>
        <Button 
          type="submit" 
          isLoading={isLoading}
          data-test="submit-button"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;