import { Response } from 'express';
import { updateUser } from './../../utils/updateUser';
import { UserRequest } from './../../interfaces/user-request.interface';

const linkPlayerProfile = async (req: UserRequest, res: Response) => {
  const { uid } = req.user;
  let { playerId } = req.body;
  playerId = playerId.toString();

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
