import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import Button from '../../components/Button/Button';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      
      await register(userData);
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container} data-test="register-page">
      <h1>Create Account</h1>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            data-test="name-input"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            data-test="email-input"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
            data-test="password-input"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            data-test="confirm-password-input"
          />
        </div>
        <Button 
          type="submit" 
          isLoading={isLoading}
          data-test="submit-button"
        >
          Register
        </Button>
      </form>
      <div className={styles.loginLink}>
        Already have an account? <a href="/login" data-test="login-link">Login</a>
      </div>
    </div>
  );
};

export default Register;