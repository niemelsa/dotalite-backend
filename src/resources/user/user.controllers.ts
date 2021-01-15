import { Favorite } from './../../interfaces/favorite.interface';
import { Response } from 'express';
import { updateUser } from './../../utils/updateUser';
import { UserRequest } from './../../interfaces/user-request.interface';
import { addFavoriteToUser } from '../../utils/addFavoriteToUser';

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

const addFavorite = async (req: UserRequest, res: Response) => {
  const { uid } = req.user;
  let { favoriteId, type, image, title } = req.body;
  favoriteId = favoriteId.toString();

  let favorite: Favorite = {
    userId: uid,
    favoriteId,
    type,
    image,
    title,
  };

  addFavoriteToUser(favorite)
    .then((user) => {
      console.log('ADDED FAV: ', user);
      res.status(200).send({ message: 'updated', user });
    })
    .catch((error) => {
      res.status(401).send(error);
    });
};

const removeFavorite = async (req: UserRequest, res: Response) => {};

export default {
  linkPlayerProfile,
  addFavorite,
  removeFavorite,
};
