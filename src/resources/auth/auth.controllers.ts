import { newToken } from './../../utils/jwt';
import { UserRequest } from './../../interfaces/user-request.interface';
import { Response } from 'express';

const handleLogin = async (req: UserRequest, res: Response) => {
  const token = newToken(req.user);
  res.redirect(`http://localhost:8100/auth/callback?token=${token}`);
};

export default {
  handleLogin,
};
