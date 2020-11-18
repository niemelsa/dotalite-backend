import jwt from 'jsonwebtoken';
import config from '../config';

export const newToken = (user: any) => {
  return jwt.sign(
    { id: user.id, displayName: user.displayName, image: user.image },
    config.secrets.jwtSecret,
    {
      expiresIn: config.secrets.expiresIn,
    }
  );
};

export const verifyToken = (token: any) => {
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwtSecret, (err: any, payload: any) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};
