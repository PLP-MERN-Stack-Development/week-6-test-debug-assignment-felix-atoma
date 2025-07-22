// src/components/LoadingSpinner/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ size = 'medium', variant = 'primary' }) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };

  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    light: styles.light,
    dark: styles.dark
  };

  return (
    <div 
      className={`${styles.spinner} ${sizeClasses[size]} ${variantClasses[variant]}`}
      role="status"
      aria-label="Loading"
    >
      <div className={styles.spinnerInner}></div>
    </div>
  );
};

export default LoadingSpinner;