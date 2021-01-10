import { NextFunction, Response } from 'express';
import { UserRequest } from '../interfaces/user-request.interface';
import * as admin from 'firebase-admin';

export const extractIdToken = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.header('Authorization');
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.idToken = bearerToken;
    next();
  } else {
    res.status(403).send({ message: 'Authorization header error' });
  }
};

export const verifyIdToken = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const idToken = req.idToken;

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((error) => {
      console.log(error);
      res.status(403).send({ message: 'Authorization header error' });
    });
};
