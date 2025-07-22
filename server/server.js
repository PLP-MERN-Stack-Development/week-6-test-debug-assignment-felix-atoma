import app from './app.js';
import config from './utils/config.js';
import connectDB from './config/db.js';

const startServer = async () => {
  try {
    await connectDB();
    
    const server = app.listen(config.PORT, () => {
      console.log(`✅ Server running on port ${config.PORT}`);
      console.log(`🔗 Test endpoints:`);
      console.log(`   - Health: http://localhost:${config.PORT}/api/health`);
      console.log(`   - Auth Test: http://localhost:${config.PORT}/api/v1/auth/test`);
    });

    process.on('unhandledRejection', (err) => {
      console.error('❌ Unhandled Rejection:', err);
      server.close(() => process.exit(1));
    });
  } catch (err) {
    console.error('❌ Server startup error:', err);
    process.exit(1);
  }
};

startServer();