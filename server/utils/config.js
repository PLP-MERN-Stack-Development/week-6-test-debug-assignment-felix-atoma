// utils/config.js
const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://felixatoma2:fWV0jPDNdTOw9GUq@cluster0-shard-00-00.xxxxxx.mongodb.net:27017,cluster0-shard-00-01.xxxxxx.mongodb.net:27017,cluster0-shard-00-02.xxxxxx.mongodb.net:27017/mern-testing?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_here',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '30d',
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173'
};

export default config; // Proper default export