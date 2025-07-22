// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import Button from '../../components/Button/Button';
import LoadingSpinner from '../../components/Button/LoadingSpinner/LoadingSpinner';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user, logout, isLoading } = useUser();
  const navigate = useNavigate();
  useDocumentTitle('Dashboard');

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, isLoading, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
      // In a production app, you might show a toast notification here
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return null; // Already handled by useEffect redirect
  }

  return (
    <main className={styles.container} data-testid="dashboard-page">
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.userBadge}>
          <span className={styles.userName}>{user.name}</span>
          <span className={styles.userEmail}>{user.email}</span>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.statsContainer}>
          {/* Placeholder for dashboard metrics */}
          <div className={styles.statCard}>
            <h3>Recent Activity</h3>
            <p>No recent activity</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            onClick={handleLogout}
            variant="danger"
            size="medium"
            data-testid="logout-button"
            aria-label="Log out from your account"
          >
            Logout
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;