import request from 'supertest';
import app from '../../src/app';
import User from '../../src/models/User';
import jwt from 'jsonwebtoken';

jest.mock('../../src/models/User');
jest.mock('jsonwebtoken');

describe('User Routes', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/users', () => {
    it('should register a new user', async () => {
      User.findOne.mockResolvedValue(null);
      User.create.mockResolvedValue({
        _id: '1',
        name: 'Test',
        email: 'test@test.com',
      });
      jwt.sign.mockReturnValue('fake-token');

      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Test', email: 'test@test.com', password: '123456' });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('token', 'fake-token');
    });
  });
});