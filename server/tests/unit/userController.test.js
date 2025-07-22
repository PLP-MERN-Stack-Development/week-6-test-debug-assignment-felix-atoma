import {
  registerUser,
  authUser,
  getUserProfile,
} from '../../src/controllers/userController';
import User from '../../src/models/User';
import jwt from 'jsonwebtoken';

jest.mock('../../src/models/User');
jest.mock('jsonwebtoken');

describe('User Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      user: { _id: '1' },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  describe('registerUser', () => {
    it('should register a new user', async () => {
      req.body = { name: 'Test', email: 'test@test.com', password: '123456' };
      User.findOne.mockResolvedValue(null);
      User.create.mockResolvedValue({
        _id: '1',
        name: 'Test',
        email: 'test@test.com',
      });
      jwt.sign.mockReturnValue('fake-token');

      await registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        _id: '1',
        name: 'Test',
        email: 'test@test.com',
        token: 'fake-token',
      });
    });
  });
});