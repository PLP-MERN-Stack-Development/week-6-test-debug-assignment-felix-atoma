import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to MERN Testing</h1>
        <p className={styles.subtitle}>A comprehensive testing solution for your MERN stack applications</p>
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Unit Testing</h3>
          <p>Test individual components and functions in isolation</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Integration Testing</h3>
          <p>Verify how different parts of your application work together</p>
        </div>
        <div className={styles.featureCard}>
          <h3>E2E Testing</h3>
          <p>Test complete user flows from start to finish</p>
        </div>
      </div>

      <div className={styles.cta}>
        <Link to="/login">
          <Button variant="primary">Get Started</Button>
        </Link>
        <Link to="/register">
          <Button variant="secondary">Create Account</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;