import { findUser } from '../../utils/findUser';
import { UserRequest } from './../../interfaces/user-request.interface';
import { Response, Request } from 'express';
import { createUser } from '../../utils/createUser';

const signIn = async (req: UserRequest, res: Response) => {
  let user;
  const { uid } = req.user;

  user = await findUser(uid);

  if (!user) {
    user = await createUser(req.user);
  }

  res.status(200).send(user);
};

const register = async (req: Request, res: Response) => {};

export default {
  signIn,
  register,
};
