import express from 'express';
import {
  registerUser,
  authUser,
  logoutUser,       // ✅ Added import
  getUserProfile
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Test route - verify routing is working
router.get('/test', (req, res) => {
  console.log('✅ Auth test route hit');
  res.json({ 
    status: 'success',
    message: 'Auth routes are working',
    endpoints: {
      register: 'POST /register',
      login: 'POST /login',
      logout: 'POST /logout',
      profile: 'GET /profile (protected)'
    }
  });
});

// Auth routes
router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);  // ✅ Now handled
router.get('/profile', protect, getUserProfile);

export default router;
