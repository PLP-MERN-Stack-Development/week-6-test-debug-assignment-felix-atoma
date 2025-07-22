// utils/config.js
const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern-testing',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_here',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '30d',
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173'
};

export default config; // Proper default export