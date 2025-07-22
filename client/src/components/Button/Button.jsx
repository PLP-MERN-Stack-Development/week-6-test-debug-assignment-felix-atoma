// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${
    isLoading ? styles.loading : ''
  }`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      data-test="button"
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isLoading: PropTypes.bool,
};

export default Button;
