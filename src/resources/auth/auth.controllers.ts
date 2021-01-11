import { findOrCreateUser } from './auth.service';
import { UserInfo } from './../../interfaces/user-info.interface';
import { UserRequest } from './../../interfaces/user-request.interface';
import { Response } from 'express';

// const verifyToken = async (req: UserRequest, res: Response) => {
//   console.log('VERIFYING TOKEN');
//   const token = req.token;

//   verifyJwtToken(token)
//     .then((user) => {
//       res.send({ token, user });
//     })
//     .catch((error) => {
//       res.status(403).send(error);
//     });
// };

const signIn = async (req: UserRequest, res: Response) => {
  const user: UserInfo = await findOrCreateUser(req.user);

  res.status(200).send(user);
};

export default {
  signIn,
};
