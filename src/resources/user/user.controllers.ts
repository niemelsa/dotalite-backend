import { updateUser } from './../../utils/updateUser';
import { findUser } from '../../utils/findUser';
import { UserRequest } from './../../interfaces/user-request.interface';
import { Request, Response } from 'express';

const linkPlayerProfile = async (req: UserRequest, res: Response) => {
  console.log('REQUEST: ', req);
  const { uid } = req.user;
  const { playerId } = req.body;

  updateUser(uid, { playerId })
    .then((user) => {
      console.log('NEW: ', user);
      res.status(200).send({ message: 'updated', user });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
};

export default {
  linkPlayerProfile,
};
