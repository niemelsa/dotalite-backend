import { newJwtToken, verifyJwtToken } from './../../utils/jwt';
import { UserRequest } from './../../interfaces/user-request.interface';
import { Response } from 'express';

const handleLogin = async (req: UserRequest, res: Response) => {
  console.log('USER: ', req.user);
  const token = newJwtToken(req.user);
  res.redirect(`http://localhost:8100/auth/callback?token=${token}`);
};

const verifyToken = async (req: UserRequest, res: Response) => {
  console.log('VERIFYING TOKEN');
  const token = req.token;

  verifyJwtToken(token)
    .then((user) => {
      res.send({ token, user });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
};

export default {
  handleLogin,
  verifyToken,
};
