import { UserRequest } from './../interfaces/user-request.interface';
import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { nextTick } from 'process';
import config from '../config';

export const newJwtToken = (user: any) => {
  return jwt.sign(
    { id: user.id, displayName: user.displayName, image: user.image },
    config.secrets.jwtSecret,
    {
      expiresIn: config.secrets.expiresIn,
    }
  );
};

export const verifyJwtToken = (token: any): Promise<object> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.secrets.jwtSecret,
      (err: VerifyErrors | null, payload: object | undefined) => {
        if (err) return reject(err);
        resolve(payload);
      }
    );
  });
};

export const verifyRequestHeader = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.header('Authorization');
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).end();
  }
};
