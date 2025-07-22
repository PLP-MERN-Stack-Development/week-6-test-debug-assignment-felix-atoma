// Set test environment
process.env.NODE_ENV = 'test';

// Configure database connection string for tests
process.env.MONGODB_URI = 'mongodb://localhost:27017/mern-testing-test';

// Set any other test-specific environment variables
process.env.JWT_SECRET = 'test-secret-key';
process.env.PORT = '5001'; // Different port than development